import './Legal.css';

export function Terms() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Användarvillkor</h1>
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#allmant">Allmänt</a></li>
                        <li><a href="#tjanst">Tjänstebeskrivning</a></li>
                        <li><a href="#licens">Licens och användningsrätt</a></li>
                        <li><a href="#konto">Konto och registrering</a></li>
                        <li><a href="#prenumerationer">Prenumerationer och betalning</a></li>
                        <li><a href="#stripe">Stripe Connect</a></li>
                        <li><a href="#ansvar">Användarens ansvar</a></li>
                        <li><a href="#rattigheter">Immateriella rättigheter</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="allmant">1. ALLMÄNT</h2>
                    <p>
                        Dessa användarvillkor ("Villkor") reglerar din användning av TradeSwift Pro-appen
                        och relaterade tjänster som tillhandahålls av TradeSwift AB, org.nr 559XXX-XXXX
                        ("TradeSwift", "vi" eller "oss").
                    </p>
                    <p>
                        Genom att skapa ett konto eller använda våra tjänster accepterar du dessa Villkor.
                    </p>

                    <h2 id="tjanst">2. TJÄNSTEBESKRIVNING</h2>
                    <p>TradeSwift Pro är en faktureringslösning som erbjuder:</p>
                    <ul>
                        <li>Skapande och hantering av fakturor</li>
                        <li>Kvittoskanning med AI-stöd</li>
                        <li>Betalningshantering via Stripe</li>
                        <li>Kundhantering och rapportering</li>
                    </ul>

                    <h2 id="licens">3. LICENS OCH ANVÄNDNINGSRÄTT (EULA)</h2>
                    <p>
                        TradeSwift AB beviljar dig en begränsad, icke-exklusiv, icke-överförbar,
                        återkallelig licens att använda TradeSwift Pro-appen på enheter du äger
                        eller kontrollerar, i enlighet med dessa Villkor.
                    </p>
                    <p>Du får inte:</p>
                    <ul>
                        <li>Kopiera, modifiera eller distribuera appen</li>
                        <li>Reverse-engineera, dekompilera eller demontera appens källkod</li>
                        <li>Ta bort upphovsrättsmeddelanden eller varumärken</li>
                        <li>Använda appen för olagliga ändamål</li>
                        <li>Underlicensiera eller överlåta din licens till tredje part</li>
                    </ul>
                    <p>
                        Denna licens upphör automatiskt om du bryter mot dessa Villkor.
                    </p>

                    <h2 id="konto">4. KONTO OCH REGISTRERING</h2>
                    <p>
                        För att använda TradeSwift Pro måste du skapa ett konto. Du ansvarar för att:
                    </p>
                    <ul>
                        <li>Ange korrekta och aktuella uppgifter</li>
                        <li>Hålla dina inloggningsuppgifter säkra</li>
                        <li>Meddela oss om obehörig åtkomst till ditt konto</li>
                    </ul>

                    <h2 id="prenumerationer">5. PRENUMERATIONER OCH BETALNING</h2>
                    <p>
                        TradeSwift Pro erbjuder olika prenumerationsplaner. Genom att prenumerera:
                    </p>
                    <ul>
                        <li>Godkänner du att betala de avgifter som anges för din valda plan</li>
                        <li>Samtycker du till automatisk förnyelse om du inte avbryter innan förnyelseperioden</li>
                        <li>Hanteras betalningar säkert via App Store eller Stripe</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>App Store-köp</h4>
                        <p>
                            Prenumerationer som köps via App Store hanteras enligt Apples villkor.
                            Avsluta via Inställningar på din iOS-enhet. Du kan återställa tidigare
                            köp genom App Store om du installerar om appen.
                        </p>
                    </div>

                    <h2 id="stripe">6. STRIPE CONNECT</h2>
                    <p>
                        TradeSwift Pro använder Stripe Connect för att hantera betalningar från dina kunder.
                        Genom att koppla ett Stripe-konto via TradeSwift:
                    </p>
                    <ul>
                        <li>
                            Godkänner du Stripes villkor för anslutna konton:{' '}
                            <a
                                href="https://stripe.com/connect-account/legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Stripe Connected Account Agreement
                            </a>
                        </li>
                        <li>Förstår du att ditt Stripe-konto är ett separat avtal mellan dig och Stripe</li>
                        <li>Godkänner du att TradeSwift kan ta ut en plattformsavgift på transaktioner (anges i appen)</li>
                    </ul>

                    <h3>6.1 UTBETALNINGAR</h3>
                    <p>
                        Betalningar från dina kunder behandlas av Stripe och betalas ut till ditt
                        angivna bankkonto enligt Stripes utbetalningsschema, vanligtvis inom 2-7 arbetsdagar
                        beroende på din bank och land.
                    </p>

                    <h3>6.2 AVGIFTER</h3>
                    <p>
                        Stripe tar ut transaktionsavgifter enligt deras prislista. TradeSwift kan
                        ta ut en ytterligare plattformsavgift som visas tydligt i appen innan du
                        genomför transaktioner.
                    </p>

                    <h2 id="ansvar">7. ANVÄNDARENS ANSVAR</h2>
                    <p>Du förbinder dig att:</p>
                    <ul>
                        <li>Använda tjänsten i enlighet med gällande lagar</li>
                        <li>Inte missbruka tjänsten eller störa andra användare</li>
                        <li>Ansvara för att dina fakturor uppfyller lagkrav</li>
                        <li>Inte försöka kringgå säkerhets- eller betalningssystem</li>
                    </ul>

                    <h2 id="rattigheter">8. IMMATERIELLA RÄTTIGHETER</h2>
                    <p>
                        TradeSwift och dess innehåll (logotyper, design, kod) ägs av TradeSwift AB
                        eller licensgivare. Licensen i avsnitt 3 ger dig inte äganderätt till appen
                        eller dess innehåll.
                    </p>

                    <h2>9. ANSVARSBEGRÄNSNING</h2>
                    <p>
                        TradeSwift tillhandahålls "i befintligt skick". Vi garanterar inte att
                        tjänsten alltid är tillgänglig eller felfri.
                    </p>
                    <p>
                        Vi ansvarar inte för indirekta skador, förlorade intäkter eller data
                        som uppstår genom användning av tjänsten, i den utsträckning lagen tillåter.
                    </p>

                    <h2>10. UPPSÄGNING</h2>
                    <p>
                        Du kan säga upp ditt konto när som helst via appen eller genom att
                        kontakta support. Vi kan stänga av eller avsluta konton som bryter
                        mot dessa Villkor.
                    </p>

                    <h2>11. ÄNDRINGAR AV VILLKOREN</h2>
                    <p>
                        Vi kan uppdatera dessa Villkor. Fortsatt användning efter ändringar
                        innebär att du accepterar de uppdaterade villkoren.
                    </p>

                    <h2>12. TILLÄMPLIG LAG OCH TVISTER</h2>
                    <p>
                        Dessa Villkor regleras av svensk lag. Tvister ska i första hand lösas
                        genom förhandling. Om detta inte lyckas avgörs tvisten av svensk domstol
                        med Stockholm som första instans.
                    </p>

                    <h2>13. KONTAKT</h2>
                    <p>
                        Vid frågor om dessa Villkor, kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
