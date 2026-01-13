import './Legal.css';

export function Cancellation() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Avbeställningspolicy</h1>
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box">
                    <h4>Viktigt att veta</h4>
                    <p>
                        Hur du avslutar din prenumeration beror på var du köpte den –
                        via App Store eller direkt via vår app.
                    </p>
                </div>

                <div className="legal-content">
                    <h2>1. ÖVERSIKT</h2>
                    <p>
                        Du kan när som helst avsluta din TradeSwift Pro-prenumeration. Denna
                        policy förklarar hur du gör det och vad som händer efteråt.
                    </p>

                    <h2>2. AVSLUTA PRENUMERATION VIA APP STORE</h2>
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

                    <h2>3. AVSLUTA PRENUMERATION VIA STRIPE</h2>
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

                    <h2>4. VAD HÄNDER NÄR DU AVSLUTAR?</h2>
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

                    <h2>5. PAUSA PRENUMERATION</h2>
                    <p>
                        Vi erbjuder för närvarande inte möjlighet att pausa prenumerationer.
                        Om du behöver ta en paus rekommenderar vi att du avslutar och sedan
                        återaktiverar när du är redo.
                    </p>

                    <h2>6. RADERA KONTO OCH DATA</h2>
                    <div className="legal-info-box">
                        <h4>Din rätt att bli raderad</h4>
                        <p>
                            Du har rätt att begära fullständig radering av ditt konto och all
                            associerad data enligt GDPR och Apples riktlinjer.
                        </p>
                    </div>

                    <h3>6.1 BEGÄR RADERING VIA APPEN</h3>
                    <ol>
                        <li>Öppna TradeSwift Pro-appen</li>
                        <li>Gå till <strong>Inställningar</strong> → <strong>Konto</strong></li>
                        <li>Tryck på <strong>Radera mitt konto</strong></li>
                        <li>Bekräfta din begäran</li>
                    </ol>

                    <h3>6.2 BEGÄR RADERING VIA E-POST</h3>
                    <p>
                        Skicka ett e-postmeddelande till{' '}
                        <a href="mailto:support@tradeswift.se?subject=Begäran om kontoradering">
                            support@tradeswift.se
                        </a>{' '}
                        med ämnet "Begäran om kontoradering" och inkludera:
                    </p>
                    <ul>
                        <li>Din registrerade e-postadress</li>
                        <li>Företagsnamn (om tillämpligt)</li>
                    </ul>

                    <h3>6.3 BEHANDLINGSTID</h3>
                    <p>
                        Vi behandlar din begäran inom <strong>30 dagar</strong>. Du får en
                        bekräftelse när raderingen är slutförd.
                    </p>

                    <h3>6.4 VAD RADERAS?</h3>
                    <ul>
                        <li>Ditt användarkonto och inloggningsuppgifter</li>
                        <li>Alla fakturor du har skapat</li>
                        <li>Kundregister och kontakter</li>
                        <li>Skannade kvitton och bilagor</li>
                        <li>Appinställningar och preferenser</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Observera</h4>
                        <p>
                            Viss data kan behöva sparas enligt lag (t.ex. transaktionsloggar för
                            bokföringslagen i upp till 7 år). Denna data anonymiseras och kan inte
                            kopplas tillbaka till dig.
                        </p>
                    </div>

                    <h2>7. ÅTERAKTIVERING</h2>
                    <p>
                        Du kan när som helst återaktivera din prenumeration genom att:
                    </p>
                    <ul>
                        <li>Öppna TradeSwift Pro-appen</li>
                        <li>Gå till Inställningar → Prenumeration</li>
                        <li>Välj en plan och slutför köpet</li>
                    </ul>

                    <h2>8. KONTAKT</h2>
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
