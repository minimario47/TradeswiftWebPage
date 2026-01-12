import './Home.css';

export function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-label">FÖR HANTVERKARE & SMÅFÖRETAGARE</span>
                        <h1 className="hero-title">
                            Arbeta smartare.<br />
                            Få betalt snabbare.
                        </h1>
                        <p className="hero-subtitle">
                            Skapa professionella fakturor, skanna kvitton och hantera betalningar
                            – allt i en app byggd för dig som arbetar med händerna.
                        </p>
                        <div className="hero-actions">
                            <a
                                href="https://apps.apple.com"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LADDA NER FÖR IOS
                            </a>
                            <a href="#funktioner" className="btn btn-secondary">
                                SE FUNKTIONER
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-phone">
                            <div className="hero-phone-header">
                                <span>Denna månad</span>
                                <span className="amount">36 450 kr</span>
                            </div>
                            <div className="invoice-card">
                                <div className="invoice-card-row">
                                    <div>
                                        <h4>#2024-001</h4>
                                        <p>Andersson Bygg AB</p>
                                    </div>
                                    <span className="amount">12 500 kr</span>
                                </div>
                            </div>
                            <div className="invoice-card">
                                <div className="invoice-card-row">
                                    <div>
                                        <h4>#2024-002</h4>
                                        <p>Svensson Renovering</p>
                                    </div>
                                    <span className="amount">8 750 kr</span>
                                </div>
                            </div>
                            <div className="invoice-card">
                                <div className="invoice-card-row">
                                    <div>
                                        <h4>#2024-003</h4>
                                        <p>Johansson & Co</p>
                                    </div>
                                    <span className="amount">15 200 kr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="funktioner" className="features">
                <div className="features-container">
                    <div className="features-header">
                        <p className="section-label">Funktioner</p>
                        <h2>Allt du behöver för att få betalt</h2>
                        <p>
                            Kraftfulla verktyg designade för att spara tid och hjälpa dig
                            fokusera på det du gör bäst.
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <h3>Snabb fakturering</h3>
                            <p>
                                Skapa professionella fakturor på sekunder. Välj från färdiga mallar
                                eller anpassa efter ditt varumärke.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <rect x="3" y="3" width="18" height="18" />
                                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                            </div>
                            <h3>Kvittoskanning</h3>
                            <p>
                                Fotografera kvitton med kameran. AI läser automatiskt av
                                belopp, datum och leverantör.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <rect x="1" y="4" width="22" height="16" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3>Enkla betalningar</h3>
                            <p>
                                Koppla Stripe för direktbetalningar. Dina kunder betalar
                                snabbt och säkert med kort eller Swish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta">
                <div className="cta-container">
                    <h2>Redo att förenkla din fakturering?</h2>
                    <p>
                        Anslut dig till tusentals hantverkare som redan sparar tid med TradeSwift Pro.
                    </p>
                    <a
                        href="https://apps.apple.com"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        KOM IGÅNG GRATIS
                    </a>
                </div>
            </section>
        </>
    );
}
