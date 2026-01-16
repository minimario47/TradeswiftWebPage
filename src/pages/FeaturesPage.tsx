import { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { FeatureSelector } from '../components/FeatureReel';
import { FEATURE_REEL_CONTENT } from '../components/FeatureReel';
import './FeaturesPage.css';

export function FeaturesPage() {
    const { language } = useLanguage();
    const content = FEATURE_REEL_CONTENT[language];

    useEffect(() => {
        document.title = language === 'sv'
            ? 'Funktioner | TradeSwift Pro'
            : 'Features | TradeSwift Pro';
    }, [language]);

    return (
        <main className="features-page">
            <div className="features-page-intro">
                <div className="features-page-intro-content">
                    <span className="section-label">{content.page.label}</span>
                    <h1>{content.page.title}</h1>
                    <p>{content.page.subtitle}</p>
                </div>
            </div>
            <FeatureSelector outstanding={36450} overdue={15200} />
        </main>
    );
}
