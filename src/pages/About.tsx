import './About.css';

export function About() {
    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <p className="section-label">OM OSS</p>
                    <h1>Vi bygger verktyg för de som bygger Sverige</h1>
                    <p>
                        TradeSwift skapades av och för hantverkare som vill fokusera på
                        sitt hantverk — inte pappersarbete.
                    </p>
                </div>

                <div className="about-divider" />

                <div className="about-content">
                    <div className="about-mission">
                        <h2>VARFÖR VI FINNS</h2>
                        <p>
                            Varje dag förlorar tusentals hantverkare värdefull tid på administrativt
                            arbete. Fakturor som ska skrivas. Kvitton som ska sorteras. Betalningar
                            som ska jagas.
                        </p>
                        <p>
                            Vi tror att expertis förtjänar respekt. Din tid är värd mer än att
                            sitta vid ett skrivbord. TradeSwift Pro hanterar pappersarbetet så
                            att du kan göra det du är bäst på.
                        </p>
                        <p>
                            Ingen onödig komplexitet. Inga överflödiga funktioner. Bara det som
                            faktiskt hjälper dig att få betalt snabbare.
                        </p>
                    </div>

                    <div className="about-team">
                        <h2>TEAMET</h2>
                        <div className="team-member">
                            <div className="team-member-name">MIKAIL YENIGÜN</div>
                            <div className="team-member-role">Grundare & Utvecklare</div>
                        </div>
                    </div>
                </div>

                <div className="about-details">
                    <div className="about-detail">
                        <div className="about-detail-label">Företag</div>
                        <div className="about-detail-value">TradeSwift AB</div>
                    </div>
                    <div className="about-detail">
                        <div className="about-detail-label">Registrerat</div>
                        <div className="about-detail-value">Sverige</div>
                    </div>
                    <div className="about-detail">
                        <div className="about-detail-label">Kontakt</div>
                        <div className="about-detail-value">support@tradeswift.se</div>
                    </div>
                </div>

                <div className="about-philosophy">
                    <h2>DESIGNFILOSOFI</h2>
                    <p>
                        TradeSwift är byggt kring brutal enkelhet. Ingen onödig dekoration.
                        Ingen distraherande animation. Varje element finns för att det behövs —
                        inget annat.
                    </p>
                    <p>
                        Professionella verktyg ska se ut som professionella verktyg.
                        Vi bygger för användare som värderar funktion framför underhållning.
                    </p>
                </div>
            </div>
        </div>
    );
}
