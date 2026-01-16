import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { FEATURE_REEL_CONTENT, type FeatureItem } from './FeatureReelContent';
import { FeatureMockup } from './FeatureMockup';
import { getFeatureIcon } from './FeatureIcons';
import './FeatureSelector.css';

interface FeatureSelectorProps {
    outstanding?: number;
    overdue?: number;
}

export function FeatureSelector({ outstanding = 36450, overdue = 15200 }: FeatureSelectorProps) {
    const { language } = useLanguage();
    const content = FEATURE_REEL_CONTENT[language];
    const features = content.features;

    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const previewRef = useRef<HTMLDivElement>(null);
    const chipsRef = useRef<HTMLDivElement>(null);

    const activeFeature = features[activeIndex];

    useEffect(() => {
        if (chipsRef.current) {
            const activeChip = chipsRef.current.children[activeIndex] as HTMLElement;
            if (activeChip) {
                activeChip.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'center',
                    block: 'nearest'
                });
            }
        }
    }, [activeIndex]);

    const minSwipeDistance = 50;

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeIndex < features.length - 1) {
            setActiveIndex(prev => prev + 1);
        } else if (isRightSwipe && activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowRight' && activeIndex < features.length - 1) {
            setActiveIndex(prev => prev + 1);
        } else if (e.key === 'ArrowLeft' && activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    };

    const renderFeatureChip = (feature: FeatureItem, index: number) => {
        const Icon = getFeatureIcon(feature.id);
        const isActive = index === activeIndex;

        return (
            <button
                key={feature.id}
                className={`selector-chip ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-pressed={isActive}
                aria-label={feature.title}
            >
                <Icon className="selector-chip-icon" />
                <span className="selector-chip-label">{feature.shortTitle}</span>
            </button>
        );
    };

    return (
        <div className="feature-selector" onKeyDown={handleKeyDown}>
            <div className="selector-header">
                <Link to="/" className="selector-back">
                    ← {content.page.backToHome}
                </Link>
                <span className="selector-counter">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                </span>
            </div>

            <div className="selector-chips-wrapper">
                <div className="selector-chips" ref={chipsRef}>
                    {features.map((feature, index) => renderFeatureChip(feature, index))}
                </div>
            </div>

            <div
                className="selector-preview"
                ref={previewRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                tabIndex={0}
                aria-live="polite"
            >
                <div className="selector-preview-inner">
                    <div className="selector-mockup">
                        <FeatureMockup
                            featureId={activeFeature.id}
                            outstanding={outstanding}
                            overdue={overdue}
                            isActive={true}
                        />
                    </div>

                    <div className="selector-details">
                        <div className="selector-details-header">
                            <span className="selector-details-kicker">{activeFeature.kicker}</span>
                            <span className="selector-details-stat">{activeFeature.stat}</span>
                        </div>
                        <h2 className="selector-details-title">{activeFeature.title}</h2>
                        <p className="selector-details-description">{activeFeature.description}</p>
                        <ul className="selector-details-bullets">
                            {activeFeature.bullets.map(bullet => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="selector-details-outcome">→ {activeFeature.outcome}</div>
                    </div>
                </div>
            </div>

            <div className="selector-swipe-hint">
                <span>{content.page.swipeHint}</span>
            </div>

            <div className="selector-nav">
                <button
                    className="selector-nav-btn"
                    onClick={() => setActiveIndex(prev => Math.max(0, prev - 1))}
                    disabled={activeIndex === 0}
                    aria-label="Previous feature"
                >
                    ←
                </button>
                <div className="selector-nav-dots">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            className={`selector-nav-dot ${index === activeIndex ? 'is-active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Go to ${feature.title}`}
                            aria-current={index === activeIndex}
                        />
                    ))}
                </div>
                <button
                    className="selector-nav-btn"
                    onClick={() => setActiveIndex(prev => Math.min(features.length - 1, prev + 1))}
                    disabled={activeIndex === features.length - 1}
                    aria-label="Next feature"
                >
                    →
                </button>
            </div>
        </div>
    );
}
