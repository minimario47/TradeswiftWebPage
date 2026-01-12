import './Contact.css';

export function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <p className="section-label">Support</p>
                    <h1>Kundtjänst</h1>
                    <p>
                        Har du frågor eller behöver hjälp? Vårt team finns här för att stötta dig.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-label">E-post</div>
                            <p>Skriv till oss för allmänna frågor eller supportärenden.</p>
                            <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">Telefon</div>
                            <p>Tillgänglig vardagar 09:00 – 17:00</p>
                            <a href="tel:+46812345678">08-123 456 78</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">Adress</div>
                            <p>
                                TradeSwift AB<br />
                                Exempelgatan 123<br />
                                123 45 Stockholm<br />
                                Sverige
                            </p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" action="mailto:support@tradeswift.se" method="GET">
                            <h3>Skicka ett meddelande</h3>

                            <div className="form-group">
                                <label htmlFor="name">Namn</label>
                                <input type="text" id="name" name="name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">E-post</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Ärende</label>
                                <input type="text" id="subject" name="subject" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Meddelande</label>
                                <textarea id="message" name="body" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                SKICKA MEDDELANDE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
