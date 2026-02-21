import { useLanguage } from '../i18n/LanguageContext';
import { FeatureSelector } from '../components/FeatureReel';
import { FEATURE_REEL_CONTENT } from '../components/FeatureReel';
import { SEO } from '../components/SEO';
import { softwareApplicationSchema, breadcrumbSchema } from '../seo/schemas';
import './FeaturesPage.css';

export function FeaturesPage() {
    const { language } = useLanguage();
    const content = FEATURE_REEL_CONTENT[language];

    return (
        <section className="features-page">
            <SEO
                path="/funktioner"
                jsonLd={[
                    softwareApplicationSchema(),
                    breadcrumbSchema([
                        { name: 'TradeSwift Pro', url: 'https://www.tradeswift.se/' },
                        { name: language === 'sv' ? 'Funktioner' : 'Features', url: 'https://www.tradeswift.se/funktioner/' },
                    ]),
                ]}
            />
            <div className="features-page-intro">
                <div className="features-page-intro-content">
                    <span className="section-label">{content.page.label}</span>
                    <h1>{content.page.title}</h1>
                    <p>{content.page.subtitle}</p>
                </div>
            </div>
            <FeatureSelector outstanding={36450} overdue={15200} />
        </section>
    );
}
