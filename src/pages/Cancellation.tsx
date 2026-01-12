import './Legal.css';

export function Cancellation() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Avbeställningspolicy</h1>
                    <p className="last-updated">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-content">
                    <h2>1. Översikt</h2>
                    <p>
                        Du kan när som helst avsluta din TradeSwift Pro-prenumeration. Denna
                        policy förklarar hur du gör det och vad som händer efteråt.
                    </p>

                    <div className="legal-highlight">
                        <p>
                            <strong>Obs:</strong> Hur du avslutar din prenumeration beror på var
                            du köpte den – via App Store eller direkt via vår app.
                        </p>
                    </div>

                    <h2>2. Avsluta prenumeration via App Store</h2>
                    <p>
                        Om du prenumererar via Apple App Store, avslutar du så här:
                    </p>
                    <ol>
                        <li>Öppna <strong>Inställningar</strong> på din iPhone eller iPad</li>
                        <li>Tryck på ditt namn högst upp (Apple-ID)</li>
                        <li>Välj <strong>Prenumerationer</strong></li>
                        <li>Hitta <strong>TradeSwift Pro</strong> och tryck på den</li>
                        <li>Välj <strong>Avsluta prenumeration</strong></li>
                    </ol>
                    <p>
                        Din prenumeration fortsätter till slutet av den aktuella faktureringsperioden,
                        sedan upphör den automatiskt.
                    </p>

                    <h2>3. Avsluta prenumeration via Stripe</h2>
                    <p>
                        Om du betalar direkt via Stripe:
                    </p>
                    <ol>
                        <li>Logga in i TradeSwift Pro-appen</li>
                        <li>Gå till <strong>Inställningar</strong> → <strong>Prenumeration</strong></li>
                        <li>Tryck på <strong>Hantera prenumeration</strong></li>
                        <li>Välj <strong>Avsluta</strong> och bekräfta</li>
                    </ol>
                    <p>
                        Alternativt kan du kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> så hjälper
                        vi dig avsluta.
                    </p>

                    <h2>4. Vad händer när du avslutar?</h2>
                    <ul>
                        <li>
                            <strong>Åtkomst kvarstår:</strong> Du behåller tillgång till premium-funktioner
                            fram till slutet av din betalda period.
                        </li>
                        <li>
                            <strong>Data sparas:</strong> Dina fakturor, kunder och kvitton raderas inte
                            automatiskt. De finns kvar om du återaktiverar senare.
                        </li>
                        <li>
                            <strong>Gratisversion:</strong> Efter prenumerationens slut återgår du till
                            gratisversionen med begränsade funktioner.
                        </li>
                    </ul>

                    <h2>5. Pausa prenumeration</h2>
                    <p>
                        Vi erbjuder för närvarande inte möjlighet att pausa prenumerationer.
                        Om du behöver ta en paus rekommenderar vi att du avslutar och sedan
                        återaktiverar när du är redo.
                    </p>

                    <h2>6. Radera konto</h2>
                    <p>
                        Om du vill radera ditt konto helt (inklusive all data):
                    </p>
                    <ol>
                        <li>Avsluta först din aktiva prenumeration (se ovan)</li>
                        <li>Kontakta oss på <a href="mailto:privacy@tradeswift.se">privacy@tradeswift.se</a></li>
                        <li>Begär radering av ditt konto och all associerad data</li>
                    </ol>
                    <p>
                        Observera att viss data kan behöva sparas enligt lag (t.ex. bokföringsmaterial
                        i 7 år).
                    </p>

                    <h2>7. Återaktivering</h2>
                    <p>
                        Du kan när som helst återaktivera din prenumeration genom att:
                    </p>
                    <ul>
                        <li>Öppna TradeSwift Pro-appen</li>
                        <li>Gå till Inställningar → Prenumeration</li>
                        <li>Välj en plan och slutför köpet</li>
                    </ul>

                    <h2>8. Kontakt</h2>
                    <p>
                        Har du problem med att avsluta din prenumeration? Kontakta oss:
                    </p>
                    <ul>
                        <li>E-post: <a href="mailto:support@tradeswift.se">support@tradeswift.se</a></li>
                        <li>Telefon: <a href="tel:+46812345678">08-123 456 78</a> (vardagar 09:00-17:00)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
