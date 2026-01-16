import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { FEATURE_REEL_CONTENT, type FeatureItem } from './FeatureReelContent';
import { getFeatureIcon } from './FeatureIcons';
import './FeatureStack.css';

export function FeatureStack() {
    const { language } = useLanguage();
    const content = FEATURE_REEL_CONTENT[language];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const features = content.features.slice(0, 3);

    const cycleCards = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex(prev => (prev + 1) % features.length);
        setTimeout(() => setIsAnimating(false), 400);
    }, [isAnimating, features.length]);

    useEffect(() => {
        const interval = setInterval(cycleCards, 5000);
        return () => clearInterval(interval);
    }, [cycleCards]);

    const handleCardClick = () => {
        cycleCards();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            cycleCards();
        }
    };

    const getCardPosition = (index: number): 'front' | 'middle' | 'back' => {
        const relativeIndex = (index - activeIndex + features.length) % features.length;
        if (relativeIndex === 0) return 'front';
        if (relativeIndex === 1) return 'middle';
        return 'back';
    };

    const renderFeatureCard = (feature: FeatureItem, index: number) => {
        const position = getCardPosition(index);
        const Icon = getFeatureIcon(feature.id);

        return (
            <div
                key={feature.id}
                className={`stack-card is-${position}`}
                onClick={handleCardClick}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={position === 'front' ? 0 : -1}
                aria-label={`${feature.title}. ${content.home.tapHint}`}
            >
                <div className="stack-card-inner">
                    <div className="stack-card-header">
                        <Icon className="stack-card-icon" />
                        <span className="stack-card-stat">{feature.stat}</span>
                    </div>
                    <span className="stack-card-kicker">{feature.kicker}</span>
                    <h3 className="stack-card-title">{feature.title}</h3>
                    <p className="stack-card-description">{feature.description}</p>
                    <div className="stack-card-outcome">→ {feature.outcome}</div>
                </div>
            </div>
        );
    };

    return (
        <section id="features" className="feature-stack-section">
            <div className="feature-stack-container">
                <div className="feature-stack-header">
                    <span className="section-label">{content.home.label}</span>
                    <h2>{content.home.title}</h2>
                    <p>{content.home.subtitle}</p>
                </div>

                <div className="feature-stack-content">
                    <div className="feature-stack-deck" aria-label="Features deck. Tap to cycle through features.">
                        {features.map((feature, index) => renderFeatureCard(feature, index))}
                    </div>

                    <div className="feature-stack-hint">
                        <span className="feature-stack-hint-text">{content.home.tapHint}</span>
                        <div className="feature-stack-dots">
                            {features.map((feature, index) => (
                                <button
                                    key={feature.id}
                                    className={`feature-stack-dot ${index === activeIndex ? 'is-active' : ''}`}
                                    onClick={() => {
                                        if (!isAnimating) {
                                            setIsAnimating(true);
                                            setActiveIndex(index);
                                            setTimeout(() => setIsAnimating(false), 400);
                                        }
                                    }}
                                    aria-label={`Go to ${feature.title}`}
                                    aria-current={index === activeIndex}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <Link to="/funktioner" className="feature-stack-cta">
                    <span>{content.home.exploreAll}</span>
                    <span className="feature-stack-cta-arrow">→</span>
                </Link>
            </div>
        </section>
    );
}
