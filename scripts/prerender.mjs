import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, extname } from 'path';
import puppeteer from 'puppeteer';

const DIST = join(process.cwd(), 'dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/funktioner',
  '/kontakt',
  '/om-oss',
  '/integritetspolicy',
  '/villkor',
  '/aterbetalning',
  '/avbestallning',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === '/' ? 'index.html' : req.url);

      // SPA fallback: if no file extension, serve index.html
      if (!extname(filePath)) {
        filePath = join(DIST, 'index.html');
      }

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        // Fallback to index.html for SPA routes
        try {
          const content = readFileSync(join(DIST, 'index.html'));
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content);
        } catch {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  const server = await startServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const route of ROUTES) {
    console.log(`Pre-rendering: ${route}`);
    const page = await browser.newPage();
    await page.goto(`http://localhost:${PORT}${route}`, {
      waitUntil: 'networkidle0',
    });

    // Wait for React to render content inside #root
    await page.waitForSelector('#root > *', { timeout: 10000 });

    // Small delay to ensure helmet has injected head tags
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();
    await page.close();

    // Write to dist/{route}/index.html
    const outDir = route === '/' ? DIST : join(DIST, route.slice(1));
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }

    const outFile = route === '/' ? join(DIST, 'index.html') : join(outDir, 'index.html');
    writeFileSync(outFile, html);
    console.log(`  -> ${outFile}`);
  }

  await browser.close();
  server.close();
  console.log('\nPre-rendering complete!');
}

prerender().catch((err) => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
