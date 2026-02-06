import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { language } = useLanguage();

    const content = {
        en: {
            brandDescription:
                'TradeSwift is an invoicing app for tradespeople and solo contractors. Built and maintained by Mikail Yenigün.',
            identityLabel: 'Creator',
            identityLines: ['Mikail Yenigün', 'Independent developer', 'Sweden'],
            product: {
                title: 'Product',
                features: 'Features',
                pricing: 'Pricing',
                download: 'Download'
            },
            support: {
                title: 'Support',
                about: 'About the app',
                help: 'Support'
            },
            legal: {
                title: 'Legal',
                privacy: 'Privacy Policy',
                terms: 'Terms of Service',
                refund: 'Refund Policy',
                cancellation: 'Cancellation Policy'
            },
            rights: `© ${currentYear} TradeSwift. Built by Mikail Yenigün.`
        },
        sv: {
            brandDescription:
                'TradeSwift är en fakturaapp för hantverkare och egenföretagare. Byggd och underhållen av Mikail Yenigün.',
            identityLabel: 'Skapare',
            identityLines: ['Mikail Yenigün', 'Oberoende utvecklare', 'Sverige'],
            product: {
                title: 'Produkt',
                features: 'Funktioner',
                pricing: 'Priser',
                download: 'Ladda ner'
            },
            support: {
                title: 'Support',
                about: 'Om appen',
                help: 'Kundtjänst'
            },
            legal: {
                title: 'Juridiskt',
                privacy: 'Integritetspolicy',
                terms: 'Användarvillkor',
                refund: 'Återbetalning',
                cancellation: 'Avbeställning'
            },
            rights: `© ${currentYear} TradeSwift. Byggd av Mikail Yenigün.`
        }
    };

    const t = content[language];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src="/logo.svg" alt="TradeSwift PRO" style={{ height: '30px' }} />
                        </div>
                        <p>{t.brandDescription}</p>
                        <div className="footer-company">
                            <strong>{t.identityLabel}</strong>
                            {t.identityLines.map((line) => (
                                <span key={line}>
                                    {line}
                                    <br />
                                </span>
                            ))}
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

            </div>
        </footer>
    );
}
