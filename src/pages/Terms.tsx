import './Legal.css';

export function Terms() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <h1>Användarvillkor</h1>
                    <p className="last-updated">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-content">
                    <h2>1. Allmänt</h2>
                    <p>
                        Dessa användarvillkor ("Villkor") reglerar din användning av TradeSwift Pro-appen
                        och relaterade tjänster som tillhandahålls av TradeSwift AB, org.nr 559XXX-XXXX
                        ("TradeSwift", "vi" eller "oss").
                    </p>
                    <p>
                        Genom att skapa ett konto eller använda våra tjänster accepterar du dessa Villkor.
                    </p>

                    <h2>2. Tjänstebeskrivning</h2>
                    <p>TradeSwift Pro är en faktureringslösning som erbjuder:</p>
                    <ul>
                        <li>Skapande och hantering av fakturor</li>
                        <li>Kvittoskanning med AI-stöd</li>
                        <li>Betalningshantering via Stripe</li>
                        <li>Kundhantering och rapportering</li>
                    </ul>

                    <h2>3. Konto och registrering</h2>
                    <p>
                        För att använda TradeSwift Pro måste du skapa ett konto. Du ansvarar för att:
                    </p>
                    <ul>
                        <li>Ange korrekta och aktuella uppgifter</li>
                        <li>Hålla dina inloggningsuppgifter säkra</li>
                        <li>Meddela oss om obehörig åtkomst till ditt konto</li>
                    </ul>

                    <h2>4. Prenumerationer och betalning</h2>
                    <p>
                        TradeSwift Pro erbjuder olika prenumerationsplaner. Genom att prenumerera:
                    </p>
                    <ul>
                        <li>Godkänner du att betala de avgifter som anges för din valda plan</li>
                        <li>Samtycker du till automatisk förnyelse om du inte avbryter</li>
                        <li>Hanteras betalningar säkert via Stripe</li>
                    </ul>

                    <div className="legal-highlight">
                        <p>
                            <strong>Obs:</strong> Prenumerationer som köps via App Store hanteras enligt
                            Apples villkor. Avsluta via Inställningar på din iOS-enhet.
                        </p>
                    </div>

                    <h2>5. Användarens ansvar</h2>
                    <p>Du förbinder dig att:</p>
                    <ul>
                        <li>Använda tjänsten i enlighet med gällande lagar</li>
                        <li>Inte missbruka tjänsten eller störa andra användare</li>
                        <li>Ansvara för att dina fakturor uppfyller lagkrav</li>
                        <li>Inte försöka kringgå säkerhets- eller betalningssystem</li>
                    </ul>

                    <h2>6. Immateriella rättigheter</h2>
                    <p>
                        TradeSwift och dess innehåll (logotyper, design, kod) ägs av TradeSwift AB
                        eller licensgivare. Du får en begränsad, icke-exklusiv licens att använda
                        appen för personligt eller affärsmässigt bruk.
                    </p>

                    <h2>7. Ansvarsbegränsning</h2>
                    <p>
                        TradeSwift tillhandahålls "i befintligt skick". Vi garanterar inte att
                        tjänsten alltid är tillgänglig eller felfri.
                    </p>
                    <p>
                        Vi ansvarar inte för indirekta skador, förlorade intäkter eller data
                        som uppstår genom användning av tjänsten, i den utsträckning lagen tillåter.
                    </p>

                    <h2>8. Uppsägning</h2>
                    <p>
                        Du kan säga upp ditt konto när som helst via appen eller genom att
                        kontakta support. Vi kan stänga av eller avsluta konton som bryter
                        mot dessa Villkor.
                    </p>

                    <h2>9. Ändringar av villkoren</h2>
                    <p>
                        Vi kan uppdatera dessa Villkor. Fortsatt användning efter ändringar
                        innebär att du accepterar de uppdaterade villkoren.
                    </p>

                    <h2>10. Tillämplig lag och tvister</h2>
                    <p>
                        Dessa Villkor regleras av svensk lag. Tvister ska i första hand lösas
                        genom förhandling. Om detta inte lyckas avgörs tvisten av svensk domstol
                        med Stockholm som första instans.
                    </p>

                    <h2>11. Kontakt</h2>
                    <p>
                        Vid frågor om dessa Villkor, kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
