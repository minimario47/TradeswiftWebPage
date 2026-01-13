import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="header-border" />
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <div className="header-logo-mark">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
                        </svg>
                    </div>
                    TRADESWIFT PRO
                </Link>

                <button
                    className="header-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Meny"
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        {isOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="square" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="square" />
                        )}
                    </svg>
                </button>

                <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Hem</Link>
                    <Link to="/#funktioner" onClick={() => setIsOpen(false)}>Funktioner</Link>
                    <Link to="/om-oss" onClick={() => setIsOpen(false)}>Om oss</Link>
                    <Link to="/kontakt" onClick={() => setIsOpen(false)}>Kundtjänst</Link>
                </nav>
            </div>
        </header>
    );
}
