import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">TRADESWIFT PRO</div>
                        <p>
                            Professionell faktureringslösning för hantverkare och småföretagare.
                            Arbeta smartare, få betalt snabbare.
                        </p>
                        <div className="footer-company">
                            <strong>TradeSwift AB</strong><br />
                            Exempelgatan 123<br />
                            123 45 Stockholm<br />
                            Sverige<br />
                            Org.nr: 559XXX-XXXX
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Produkt</h4>
                        <ul>
                            <li><Link to="/">Funktioner</Link></li>
                            <li><Link to="/">Priser</Link></li>
                            <li><a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">Ladda ner</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/kontakt">Kundtjänst</Link></li>
                            <li><a href="mailto:support@tradeswift.se">support@tradeswift.se</a></li>
                            <li><a href="tel:+46812345678">08-123 456 78</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Juridiskt</h4>
                        <ul>
                            <li><Link to="/integritetspolicy">Integritetspolicy</Link></li>
                            <li><Link to="/villkor">Användarvillkor</Link></li>
                            <li><Link to="/aterbetalning">Återbetalning</Link></li>
                            <li><Link to="/avbestallning">Avbeställning</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} TradeSwift AB. Alla rättigheter förbehållna.</p>
                </div>
            </div>
        </footer>
    );
}
