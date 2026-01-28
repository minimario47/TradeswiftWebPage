import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const labels = {
        en: {
            home: 'Home',
            features: 'Features',
            about: 'About',
            support: 'Support',
            menu: 'Menu',
            language: 'Language'
        },
        sv: {
            home: 'Hem',
            features: 'Funktioner',
            about: 'Om oss',
            support: 'Kundtjänst',
            menu: 'Meny',
            language: 'Språk'
        }
    };

    const t = labels[language];

    return (
        <header className="header">
            <div className="header-border" />
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <img src="/logo.svg" alt="TradeSwift PRO" style={{ height: '30px' }} />
                </Link>

                <div className="header-actions">
                    <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={() => setIsOpen(false)}>{t.home}</Link>
                        <Link to="/#features" onClick={() => setIsOpen(false)}>{t.features}</Link>
                        <Link to="/om-oss" onClick={() => setIsOpen(false)}>{t.about}</Link>
                        <Link to="/kontakt" onClick={() => setIsOpen(false)}>{t.support}</Link>
                    </nav>

                    <div className="header-lang" role="group" aria-label={t.language}>
                        <button
                            type="button"
                            className={`header-lang-button ${language === 'en' ? 'active' : ''}`}
                            onClick={() => {
                                setLanguage('en');
                                setIsOpen(false);
                            }}
                            aria-pressed={language === 'en'}
                        >
                            EN
                        </button>
                        <button
                            type="button"
                            className={`header-lang-button ${language === 'sv' ? 'active' : ''}`}
                            onClick={() => {
                                setLanguage('sv');
                                setIsOpen(false);
                            }}
                            aria-pressed={language === 'sv'}
                        >
                            SV
                        </button>
                    </div>
                </div>

                <button
                    className="header-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={t.menu}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="square" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="square" />
                        )}
                    </svg>
                </button>
            </div>
        </header>
    );
}
