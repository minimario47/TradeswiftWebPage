import './Legal.css';

export function Privacy() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Integritetspolicy</h1>
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box">
                    <h4>Sammanfattning</h4>
                    <p>
                        Vi samlar endast in de uppgifter som är nödvändiga för att tillhandahålla
                        våra tjänster och behandlar dem enligt GDPR och svensk lag.
                    </p>
                </div>

                <div className="legal-content">
                    <h2>1. INLEDNING</h2>
                    <p>
                        TradeSwift AB ("vi", "oss" eller "TradeSwift") värnar om din personliga
                        integritet. Denna integritetspolicy förklarar hur vi samlar in, använder,
                        lagrar och skyddar dina personuppgifter när du använder TradeSwift Pro-appen
                        och våra tjänster.
                    </p>

                    <h2>2. PERSONUPPGIFTSANSVARIG</h2>
                    <p>
                        TradeSwift AB är personuppgiftsansvarig för behandlingen av dina personuppgifter.
                    </p>
                    <div className="legal-info-box">
                        <h4>Kontaktuppgifter</h4>
                        <p>
                            TradeSwift AB<br />
                            Exempelgatan 123<br />
                            123 45 Stockholm<br />
                            E-post: support@tradeswift.se
                        </p>
                    </div>

                    <h2>3. VILKA UPPGIFTER SAMLAR VI IN?</h2>
                    <p>Vi samlar in följande kategorier av personuppgifter:</p>
                    <ul>
                        <li><strong>Kontouppgifter:</strong> Namn, e-postadress, telefonnummer</li>
                        <li><strong>Företagsuppgifter:</strong> Företagsnamn, organisationsnummer, adress</li>
                        <li><strong>Faktureringsdata:</strong> Information om dina fakturor och kunder</li>
                        <li><strong>Betalningsuppgifter:</strong> Hanteras säkert av Stripe</li>
                        <li><strong>Tekniska uppgifter:</strong> Enhets-ID, IP-adress, app-användning</li>
                    </ul>

                    <h2>4. HUR ANVÄNDER VI DINA UPPGIFTER?</h2>
                    <p>Vi behandlar dina personuppgifter för att:</p>
                    <ul>
                        <li>Tillhandahålla och förbättra TradeSwift Pro-tjänsten</li>
                        <li>Hantera ditt konto och autentisering</li>
                        <li>Processa betalningar via Stripe</li>
                        <li>Skicka viktiga meddelanden om tjänsten</li>
                        <li>Uppfylla rättsliga skyldigheter (t.ex. bokföringslagen)</li>
                    </ul>

                    <h2>5. RÄTTSLIG GRUND FÖR BEHANDLING</h2>
                    <p>Vi behandlar dina uppgifter baserat på följande rättsliga grunder:</p>
                    <ul>
                        <li><strong>Avtalsfullgörelse:</strong> För att tillhandahålla den tjänst du har registrerat dig för</li>
                        <li><strong>Rättslig förpliktelse:</strong> För att uppfylla lagkrav</li>
                        <li><strong>Berättigat intresse:</strong> För att förbättra och säkra våra tjänster</li>
                        <li><strong>Samtycke:</strong> För marknadsföring (när tillämpligt)</li>
                    </ul>

                    <h2>6. DELNING AV UPPGIFTER</h2>
                    <p>Vi delar dina uppgifter med följande tredjepartstjänster:</p>

                    <h3>6.1 STRIPE</h3>
                    <p>
                        Stripe, Inc. är vår betaltjänstleverantör. När du använder Stripe Connect
                        för att ta emot betalningar delar vi följande uppgifter med Stripe:
                    </p>
                    <ul>
                        <li>Namn och kontaktuppgifter</li>
                        <li>E-postadress</li>
                        <li>Företagsinformation (organisationsnummer, adress)</li>
                        <li>Bankkontouppgifter för utbetalningar</li>
                        <li>Transaktionshistorik</li>
                    </ul>
                    <p>
                        Stripe behandlar dessa uppgifter enligt sin egen integritetspolicy:{' '}
                        <a
                            href="https://stripe.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            stripe.com/privacy
                        </a>
                    </p>

                    <h3>6.2 ANDRA TJÄNSTER</h3>
                    <ul>
                        <li><strong>Apple:</strong> För autentisering via Sign in with Apple</li>
                        <li><strong>Cloudflare:</strong> För hosting och säkerhet</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Viktig information</h4>
                        <p>Vi säljer aldrig dina personuppgifter till tredje part.</p>
                    </div>

                    <h2>7. LAGRINGSTID</h2>
                    <p>
                        Vi sparar dina uppgifter så länge du har ett aktivt konto, samt under den
                        tid som krävs enligt lag (t.ex. 7 år för bokföringsmaterial).
                    </p>

                    <h2>8. DINA RÄTTIGHETER</h2>
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
                        Kontakta oss på <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> för
                        att utöva dina rättigheter.
                    </p>

                    <h2>9. SÄKERHET</h2>
                    <p>
                        Vi använder branschstandardskydd för att skydda dina uppgifter, inklusive
                        kryptering i transit (TLS) och i vila, samt säkra datacenter.
                    </p>

                    <h2>10. ÄNDRINGAR I POLICYN</h2>
                    <p>
                        Vi kan uppdatera denna policy vid behov. Väsentliga ändringar meddelas
                        via appen eller e-post.
                    </p>

                    <h2>11. KONTAKT OCH KLAGOMÅL</h2>
                    <p>
                        Vid frågor eller klagomål, kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                    <p>
                        Du har även rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).
                    </p>
                </div>
            </div>
        </div>
    );
}
