import { useLanguage } from '../i18n/LanguageContext';
import './Legal.css';

export function Terms() {
    const { language } = useLanguage();
    return language === 'sv' ? <TermsSv /> : <TermsEn />;
}

function TermsEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Terms of Service</h1>
                    <p className="legal-meta">Last updated: January 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift Pro helps you create invoices, manage clients, scan receipts, and send
                        payment links. Stripe Connect handles card payments; you are responsible for customer
                        refunds and disputes.<br />
                        Any TradeSwift fees are shown in-app. App Store billing and refunds are handled by Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#allmant">General</a></li>
                        <li><a href="#tjanst">Service description</a></li>
                        <li><a href="#licens">License and use</a></li>
                        <li><a href="#konto">Account and registration</a></li>
                        <li><a href="#prenumerationer">Pricing and fees</a></li>
                        <li><a href="#stripe">Stripe Connect</a></li>
                        <li><a href="#ansvar">User responsibilities</a></li>
                        <li><a href="#rattigheter">Intellectual property</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="allmant">1. GENERAL</h2>
                    <p>
                        These terms of service ("Terms") govern your use of the TradeSwift Pro app
                        and related services provided by TradeSwift AB, reg. no. 559XXX-XXXX
                        ("TradeSwift", "we" or "us").
                    </p>
                    <p>
                        By creating an account or using our services, you accept these Terms.
                    </p>

                    <h2 id="tjanst">2. SERVICE DESCRIPTION</h2>
                    <p>TradeSwift Pro is an invoicing solution that offers:</p>
                    <ul>
                        <li>Creation and management of invoices</li>
                        <li>Client and item management</li>
                        <li>Receipt scanning with AI support</li>
                        <li>Payment links and processing via Stripe Connect</li>
                        <li>PDF export and email delivery on request</li>
                    </ul>

                    <h2 id="licens">3. LICENSE AND USE (EULA)</h2>
                    <p>
                        TradeSwift AB grants you a limited, non-exclusive, non-transferable,
                        revocable license to use the TradeSwift Pro app on devices you own or
                        control, in accordance with these Terms.
                    </p>
                    <p>You may not:</p>
                    <ul>
                        <li>Copy, modify, or distribute the app</li>
                        <li>Reverse engineer, decompile, or disassemble the app</li>
                        <li>Remove copyright notices or trademarks</li>
                        <li>Use the app for unlawful purposes</li>
                        <li>Sublicense or transfer your license to third parties</li>
                    </ul>
                    <p>
                        This license terminates automatically if you breach these Terms.
                    </p>

                    <h2 id="konto">4. ACCOUNT AND REGISTRATION</h2>
                    <p>
                        To use TradeSwift Pro you must create an account. You are responsible for:
                    </p>
                    <ul>
                        <li>Providing accurate and up-to-date information</li>
                        <li>Keeping your login credentials secure</li>
                        <li>Notifying us of unauthorized access to your account</li>
                    </ul>

                    <h2 id="prenumerationer">5. PRICING AND FEES</h2>
                    <p>
                        TradeSwift may charge platform fees per transaction and other fees that are
                        shown in the app before you use the service. You are responsible for reviewing
                        pricing information and confirming before a payment is completed.
                    </p>
                    <p>
                        If we offer paid plans for iOS access, purchases are made via Apple App Store.
                        Apple handles billing, renewals, and refunds under its terms. App Store
                        subscriptions renew automatically unless cancelled.
                    </p>

                    <h2 id="stripe">6. STRIPE CONNECT</h2>
                    <p>
                        TradeSwift Pro uses Stripe Connect to let you receive payments from your
                        customers. By connecting a Stripe account via TradeSwift:
                    </p>
                    <p>
                        TradeSwift is not a party to the underlying transaction between you and
                        your customer.
                    </p>
                    <ul>
                        <li>
                            You agree to Stripe’s connected account terms:{' '}
                            <a
                                href="https://stripe.com/connect-account/legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Stripe Connected Account Agreement
                            </a>
                        </li>
                        <li>You understand your Stripe account is a separate agreement between you and Stripe</li>
                        <li>
                            You confirm you are responsible for your relationship with your customers,
                            including delivery of services, taxes, customer support, and refunds
                        </li>
                        <li>
                            You understand you are normally the merchant of record for customer payments,
                            unless otherwise explicitly stated in the app
                        </li>
                        <li>
                            You accept that Stripe may require identity and business verification before
                            payouts can be made
                        </li>
                        <li>TradeSwift may charge a platform fee on transactions (shown in the app)</li>
                    </ul>

                    <h3>6.1 PAYOUTS</h3>
                    <p>
                        Payments from your customers are processed by Stripe and paid out to your
                        designated bank account according to Stripe’s payout schedule, typically
                        within 2–7 business days depending on your bank and country.
                    </p>

                    <h3>6.2 FEES</h3>
                    <p>
                        Stripe charges transaction fees based on their pricing. TradeSwift may
                        charge an additional platform fee shown clearly in the app before you
                        complete transactions.
                    </p>

                    <h3>6.3 REFUNDS AND DISPUTES</h3>
                    <p>
                        You are responsible for managing refunds and disputes for payments your
                        customers make to you. Stripe may debit disputed amounts and dispute fees
                        from your Stripe balance under Stripe rules. TradeSwift may provide tools
                        to initiate refunds or submit evidence, but does not decide disputes between
                        you and your customer.
                    </p>

                    <h2 id="ansvar">7. USER RESPONSIBILITIES</h2>
                    <p>You agree to:</p>
                    <ul>
                        <li>Use the service in accordance with applicable laws</li>
                        <li>Not misuse the service or disrupt other users</li>
                        <li>Ensure your invoices comply with legal requirements</li>
                        <li>Not attempt to bypass security or payment systems</li>
                    </ul>

                    <h2 id="rattigheter">8. INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p>
                        TradeSwift and its content (logos, design, code) are owned by TradeSwift AB
                        or licensors. The license in section 3 does not grant you ownership of the
                        app or its content.
                    </p>

                    <h2>9. LIMITATION OF LIABILITY</h2>
                    <p>
                        TradeSwift is provided "as is". We do not guarantee that the service will
                        always be available or error-free.
                    </p>
                    <p>
                        We are not liable for indirect damages, lost revenue, or data arising from
                        use of the service, to the extent permitted by law.
                    </p>

                    <h2>10. TERMINATION</h2>
                    <p>
                        You may close your account at any time via the app or by contacting support.
                        We may suspend or terminate accounts that violate these Terms.
                    </p>

                    <h2>11. CHANGES TO TERMS</h2>
                    <p>
                        We may update these Terms. Continued use after changes means you accept the
                        updated terms.
                    </p>

                    <h2>12. GOVERNING LAW AND DISPUTES</h2>
                    <p>
                        These Terms are governed by Swedish law. Disputes should first be resolved
                        through negotiation. If this fails, disputes are decided by Swedish courts,
                        with Stockholm as the court of first instance.
                    </p>

                    <h2>13. CONTACT</h2>
                    <p>
                        For questions about these Terms, contact us at{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function TermsSv() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Användarvillkor</h1>
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift Pro hjälper dig skapa fakturor, hantera kunder, skanna kvitton och
                        skicka betalningslänkar. Stripe Connect hanterar kortbetalningar; du ansvarar
                        för kunders återbetalningar och tvister.<br />
                        Eventuella TradeSwift-avgifter visas i appen. App Store-betalning och
                        återbetalning hanteras av Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#allmant">Allmänt</a></li>
                        <li><a href="#tjanst">Tjänstebeskrivning</a></li>
                        <li><a href="#licens">Licens och användningsrätt</a></li>
                        <li><a href="#konto">Konto och registrering</a></li>
                        <li><a href="#prenumerationer">Priser och avgifter</a></li>
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
                        <li>Kund- och artikelhantering</li>
                        <li>Kvittoskanning med AI-stöd</li>
                        <li>Betalningslänkar och betalningshantering via Stripe Connect</li>
                        <li>PDF-export och e-postutskick på begäran</li>
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

                    <h2 id="prenumerationer">5. PRISER OCH AVGIFTER</h2>
                    <p>
                        TradeSwift kan ta ut plattformsavgifter per transaktion och andra avgifter
                        som visas i appen innan du använder tjänsten. Du ansvarar för att granska
                        prisinformation och bekräfta innan en betalning genomförs.
                    </p>
                    <p>
                        Om vi erbjuder betalda planer för appåtkomst på iOS sker köp via Apple App Store.
                        Apple hanterar betalning, förnyelse och återbetalningar enligt sina villkor.
                        App Store-prenumerationer förnyas automatiskt om de inte sägs upp.
                    </p>

                    <h2 id="stripe">6. STRIPE CONNECT</h2>
                    <p>
                        TradeSwift Pro använder Stripe Connect för att låta dig ta emot betalningar
                        från dina kunder. Genom att koppla ett Stripe-konto via TradeSwift:
                    </p>
                    <p>
                        TradeSwift är inte part i den underliggande transaktionen mellan dig och din kund.
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
                        <li>
                            Bekräftar du att du ansvarar för din relation med dina kunder, inklusive
                            leverans av tjänster, skatter, kundsupport och återbetalningar
                        </li>
                        <li>
                            Förstår du att du normalt är merchant of record för kundbetalningar,
                            om inget annat uttryckligen anges i appen
                        </li>
                        <li>
                            Accepterar du att Stripe kan kräva identitets- och företagsverifiering
                            innan utbetalningar kan göras
                        </li>
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

                    <h3>6.3 ÅTERBETALNINGAR OCH TVISTER</h3>
                    <p>
                        Du ansvarar för att hantera återbetalningar och tvister för betalningar
                        som dina kunder gör till dig. Stripe kan dra omtvistade belopp och
                        tvistavgifter från ditt Stripe-saldo enligt Stripes regler. TradeSwift
                        kan tillhandahålla verktyg för att initiera återbetalningar eller lämna
                        bevis, men fattar inte beslut i tvister mellan dig och din kund.
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
