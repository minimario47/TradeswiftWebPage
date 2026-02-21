import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { seoData } from '../seo/seoData';

type SEOProps = {
  path: string;
  jsonLd?: object[];
  noindex?: boolean;
};

const SITE_URL = 'https://www.tradeswift.se';
const OG_IMAGE = `${SITE_URL}/logo.svg`;

export function SEO({ path, jsonLd, noindex }: SEOProps) {
  const { language } = useLanguage();
  const data = seoData[path]?.[language];

  if (!data) return null;

  const normalizedPath = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
  const canonical = `${SITE_URL}${normalizedPath}`;
  const ogLocale = language === 'sv' ? 'sv_SE' : 'en_US';

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <link rel="canonical" href={canonical} />

      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:site_name" content="TradeSwift Pro" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {jsonLd?.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
