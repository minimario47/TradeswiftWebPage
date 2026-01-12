import './Legal.css';

export function Privacy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Integritetspolicy</h1>
                    <p className="last-updated">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-content">
                    <h2>1. Inledning</h2>
                    <p>
                        TradeSwift AB ("vi", "oss" eller "TradeSwift") värnar om din personliga
                        integritet. Denna integritetspolicy förklarar hur vi samlar in, använder,
                        lagrar och skyddar dina personuppgifter när du använder TradeSwift Pro-appen
                        och våra tjänster.
                    </p>

                    <div className="legal-highlight">
                        <p>
                            <strong>Sammanfattning:</strong> Vi samlar endast in de uppgifter som är
                            nödvändiga för att tillhandahålla våra tjänster och behandlar dem enligt
                            GDPR och svensk lag.
                        </p>
                    </div>

                    <h2>2. Personuppgiftsansvarig</h2>
                    <p>
                        TradeSwift AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.
                    </p>
                    <p>
                        <strong>Kontaktuppgifter:</strong><br />
                        TradeSwift AB<br />
                        Exempelgatan 123<br />
                        123 45 Stockholm<br />
                        E-post: privacy@tradeswift.se
                    </p>

                    <h2>3. Vilka uppgifter samlar vi in?</h2>
                    <p>Vi samlar in följande kategorier av personuppgifter:</p>
                    <ul>
                        <li><strong>Kontouppgifter:</strong> Namn, e-postadress, telefonnummer</li>
                        <li><strong>Företagsuppgifter:</strong> Företagsnamn, organisationsnummer, adress</li>
                        <li><strong>Faktureringsdata:</strong> Information om dina fakturor och kunder</li>
                        <li><strong>Betalningsuppgifter:</strong> Hanteras säkert av Stripe</li>
                        <li><strong>Tekniska uppgifter:</strong> Enhets-ID, IP-adress, app-användning</li>
                    </ul>

                    <h2>4. Hur använder vi dina uppgifter?</h2>
                    <p>Vi behandlar dina personuppgifter för att:</p>
                    <ul>
                        <li>Tillhandahålla och förbättra TradeSwift Pro-tjänsten</li>
                        <li>Hantera ditt konto och autentisering</li>
                        <li>Processa betalningar via Stripe</li>
                        <li>Skicka viktiga meddelanden om tjänsten</li>
                        <li>Uppfylla rättsliga skyldigheter (t.ex. bokföringslagen)</li>
                    </ul>

                    <h2>5. Rättslig grund för behandling</h2>
                    <p>Vi behandlar dina uppgifter baserat på följande rättsliga grunder:</p>
                    <ul>
                        <li><strong>Avtalsfullgörelse:</strong> För att tillhandahålla den tjänst du har registrerat dig för</li>
                        <li><strong>Rättslig förpliktelse:</strong> För att uppfylla lagkrav</li>
                        <li><strong>Berättigat intresse:</strong> För att förbättra och säkra våra tjänster</li>
                        <li><strong>Samtycke:</strong> För marknadsföring (när tillämpligt)</li>
                    </ul>

                    <h2>6. Delning av uppgifter</h2>
                    <p>Vi delar dina uppgifter med:</p>
                    <ul>
                        <li><strong>Stripe:</strong> För betalningshantering</li>
                        <li><strong>Apple:</strong> För autentisering via Sign in with Apple</li>
                        <li><strong>Cloudflare:</strong> För hosting och säkerhet</li>
                    </ul>
                    <p>
                        Vi säljer aldrig dina personuppgifter till tredje part.
                    </p>

                    <h2>7. Lagringstid</h2>
                    <p>
                        Vi sparar dina uppgifter så länge du har ett aktivt konto, samt under den
                        tid som krävs enligt lag (t.ex. 7 år för bokföringsmaterial).
                    </p>

                    <h2>8. Dina rättigheter</h2>
                    <p>Enligt GDPR har du rätt att:</p>
                    <ul>
                        <li>Få tillgång till dina personuppgifter</li>
                        <li>Begära rättelse av felaktiga uppgifter</li>
                        <li>Begära radering av dina uppgifter</li>
                        <li>Begära begränsning av behandling</li>
                        <li>Invända mot behandling</li>
                        <li>Få dina uppgifter i ett portabelt format</li>
                    </ul>
                    <p>
                        Kontakta oss på <a href="mailto:privacy@tradeswift.se">privacy@tradeswift.se</a> för
                        att utöva dina rättigheter.
                    </p>

                    <h2>9. Säkerhet</h2>
                    <p>
                        Vi använder branschstandardskydd för att skydda dina uppgifter, inklusive
                        kryptering i transit (TLS) och i vila, samt säkra datacenter.
                    </p>

                    <h2>10. Ändringar i policyn</h2>
                    <p>
                        Vi kan uppdatera denna policy vid behov. Väsentliga ändringar meddelas
                        via appen eller e-post.
                    </p>

                    <h2>11. Kontakt och klagomål</h2>
                    <p>
                        Vid frågor eller klagomål, kontakta oss på{' '}
                        <a href="mailto:privacy@tradeswift.se">privacy@tradeswift.se</a>.
                    </p>
                    <p>
                        Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
                    </p>
                </div>
            </div>
        </div>
    );
}
