import './Legal.css';

export function Refund() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Återbetalningspolicy</h1>
                    <p className="last-updated">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-content">
                    <h2>1. Översikt</h2>
                    <p>
                        Denna policy beskriver hur TradeSwift AB hanterar återbetalningar och
                        tvister för prenumerationer och betalningar via TradeSwift Pro.
                    </p>

                    <div className="legal-highlight">
                        <p>
                            <strong>Viktigt:</strong> TradeSwift Pro erbjuder en gratis provperiod
                            så att du kan utvärdera tjänsten innan du förbinder dig till en prenumeration.
                        </p>
                    </div>

                    <h2>2. Prenumerationer via App Store</h2>
                    <p>
                        Prenumerationer som köps via Apple App Store hanteras enligt Apples
                        återbetalningspolicy. För återbetalning av dessa köp:
                    </p>
                    <ul>
                        <li>Kontakta Apples support via <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Apple fattar det slutgiltiga beslutet om återbetalning</li>
                        <li>Återbetalningar kan godkännas vid tekniska problem eller felaktiga debiteringar</li>
                    </ul>

                    <h2>3. Prenumerationer via Stripe</h2>
                    <p>
                        För prenumerationer som betalas direkt via Stripe gäller följande:
                    </p>

                    <h3>3.1 Återbetalning inom 14 dagar</h3>
                    <p>
                        Du har rätt att begära full återbetalning inom 14 dagar från köpet om:
                    </p>
                    <ul>
                        <li>Du inte aktivt har använt prenumerationens funktioner</li>
                        <li>Tjänsten inte fungerade som utlovat</li>
                    </ul>

                    <h3>3.2 Proportionell återbetalning</h3>
                    <p>
                        Efter 14 dagar kan vi erbjuda proportionell återbetalning baserat på
                        återstående tid i prenumerationsperioden, bedömt från fall till fall.
                    </p>

                    <h3>3.3 Ingen återbetalning</h3>
                    <p>
                        Vi återbetalar inte om:
                    </p>
                    <ul>
                        <li>Du har använt tjänsten aktivt under faktureringsperioden</li>
                        <li>Du har brutit mot våra användarvillkor</li>
                        <li>Begäran görs efter prenumerationsperioden har löpt ut</li>
                    </ul>

                    <h2>4. Tvisthantering</h2>
                    <p>
                        Om du har frågor eller invändningar gällande debiteringar:
                    </p>
                    <ol>
                        <li>
                            <strong>Kontakta oss först:</strong> Skicka e-post till{' '}
                            <a href="mailto:billing@tradeswift.se">billing@tradeswift.se</a> med
                            detaljer om problemet.
                        </li>
                        <li>
                            <strong>Vi utreder:</strong> Vi svarar inom 3 arbetsdagar och utreder
                            ärendet noggrant.
                        </li>
                        <li>
                            <strong>Lösning:</strong> Vi erbjuder återbetalning, kreditering eller
                            förklaring beroende på utredningens resultat.
                        </li>
                    </ol>

                    <h2>5. Chargebacks</h2>
                    <p>
                        Om du initierar en chargeback hos din bank utan att först kontakta oss,
                        förbehåller vi oss rätten att:
                    </p>
                    <ul>
                        <li>Stänga av ditt konto under utredningen</li>
                        <li>Ta ut en administrationsavgift om chargebacken bedöms som ogrundad</li>
                    </ul>

                    <h2>6. Hur du begär återbetalning</h2>
                    <p>För att begära återbetalning:</p>
                    <ol>
                        <li>Skicka e-post till <a href="mailto:billing@tradeswift.se">billing@tradeswift.se</a></li>
                        <li>Ange ditt kontonamn och e-postadress</li>
                        <li>Beskriv anledningen till din begäran</li>
                        <li>Inkludera relevant transaktionsinformation om möjligt</li>
                    </ol>

                    <h2>7. Kontakt</h2>
                    <p>
                        Vid frågor om denna policy, kontakta oss på{' '}
                        <a href="mailto:billing@tradeswift.se">billing@tradeswift.se</a> eller
                        ring <a href="tel:+46812345678">08-123 456 78</a> (vardagar 09:00-17:00).
                    </p>
                </div>
            </div>
        </div>
    );
}
