import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { language } = useLanguage();

    const content = {
        en: {
            brandDescription:
                'Professional invoicing platform for tradespeople and small businesses. Work smarter, get paid faster.',
            companyLabel: 'TradeSwift AB',
            product: {
                title: 'Product',
                features: 'Features',
                pricing: 'Pricing',
                download: 'Download'
            },
            support: {
                title: 'Support',
                about: 'About',
                help: 'Support'
            },
            legal: {
                title: 'Legal',
                privacy: 'Privacy Policy',
                terms: 'Terms of Service',
                refund: 'Refund Policy',
                cancellation: 'Cancellation Policy'
            },
            rights: `© ${currentYear} TRADESWIFT AB. ALL RIGHTS RESERVED.`
        },
        sv: {
            brandDescription:
                'Professionell faktureringslösning för hantverkare och småföretagare. Arbeta smartare, få betalt snabbare.',
            companyLabel: 'TradeSwift AB',
            product: {
                title: 'Produkt',
                features: 'Funktioner',
                pricing: 'Priser',
                download: 'Ladda ner'
            },
            support: {
                title: 'Support',
                about: 'Om oss',
                help: 'Kundtjänst'
            },
            legal: {
                title: 'Juridiskt',
                privacy: 'Integritetspolicy',
                terms: 'Användarvillkor',
                refund: 'Återbetalning',
                cancellation: 'Avbeställning'
            },
            rights: `© ${currentYear} TRADESWIFT AB. ALLA RÄTTIGHETER FÖRBEHÅLLNA.`
        }
    };

    const t = content[language];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">TRADESWIFT PRO</div>
                        <p>{t.brandDescription}</p>
                        <div className="footer-company">
                            <strong>{t.companyLabel}</strong>
                            Exempelgatan 123<br />
                            123 45 Stockholm<br />
                            Sverige<br />
                            Org.nr: 559XXX-XXXX
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>{t.product.title}</h4>
                        <ul>
                            <li><Link to="/#features">{t.product.features}</Link></li>
                            <li><Link to="/">{t.product.pricing}</Link></li>
                            <li>
                                <a
                                    href="https://apps.apple.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.product.download}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t.support.title}</h4>
                        <ul>
                            <li><Link to="/om-oss">{t.support.about}</Link></li>
                            <li><Link to="/kontakt">{t.support.help}</Link></li>
                            <li>
                                <a href="mailto:support@tradeswift.se">
                                    support@tradeswift.se
                                </a>
                            </li>
                            <li>
                                <a href="tel:+46812345678">
                                    08-123 456 78
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>{t.legal.title}</h4>
                        <ul>
                            <li><Link to="/integritetspolicy">{t.legal.privacy}</Link></li>
                            <li><Link to="/villkor">{t.legal.terms}</Link></li>
                            <li><Link to="/aterbetalning">{t.legal.refund}</Link></li>
                            <li><Link to="/avbestallning">{t.legal.cancellation}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>{t.rights}</p>
                    <div className="footer-social">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
