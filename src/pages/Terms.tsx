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
                    <p className="legal-meta">Last updated: February 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift PRO helps you create invoices, send invoice emails, scan receipts,
                        and accept card payments through Stripe Connect.<br />
                        Card payments are processed by Stripe, while your service agreement stays
                        directly between you and your client.<br />
                        If you subscribe through Apple App Store, Apple handles billing, renewals,
                        and App Store refunds.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#allmant">General</a></li>
                        <li><a href="#tjanst">Service description</a></li>
                        <li><a href="#licens">License and acceptable use</a></li>
                        <li><a href="#konto">Account and registration</a></li>
                        <li><a href="#prenumerationer">Pricing and billing</a></li>
                        <li><a href="#fair-usage">Fair usage policy</a></li>
                        <li><a href="#stripe">Stripe Connect and payments</a></li>
                        <li><a href="#ansvar">User responsibilities</a></li>
                        <li><a href="#rattigheter">Intellectual property</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="allmant">1. GENERAL</h2>
                    <p>
                        These terms of service ("Terms") govern your use of the TradeSwift PRO app
                        and related services provided by Mikail Yenigün, the independent developer
                        and operator of TradeSwift ("TradeSwift", "I", "me").
                    </p>
                    <p>
                        By creating an account or using the service, you accept these Terms.
                    </p>

                    <h2 id="tjanst">2. SERVICE DESCRIPTION</h2>
                    <p>TradeSwift PRO is an invoicing and workflow app that includes:</p>
                    <ul>
                        <li>Invoice creation and management</li>
                        <li>Client and item management</li>
                        <li>Receipt scanning with AI support</li>
                        <li>Email sending and email delivery status tracking</li>
                        <li>Card payment links and payout setup via Stripe Connect</li>
                        <li>Optional iCloud sync and restore features</li>
                    </ul>

                    <h2 id="licens">3. LICENSE AND ACCEPTABLE USE (EULA)</h2>
                    <p>
                        Mikail Yenigün grants you a limited, non-exclusive, non-transferable,
                        revocable license to use the TradeSwift PRO app on devices you own or
                        control, in accordance with these Terms.
                    </p>
                    <p>You may not:</p>
                    <ul>
                        <li>Copy, modify, or distribute the app</li>
                        <li>Reverse engineer, decompile, or disassemble the app</li>
                        <li>Remove copyright notices or trademarks</li>
                        <li>Use the app for unlawful purposes</li>
                        <li>Sublicense or transfer your license to third parties</li>
                        <li>Use bots, scripts, or account sharing to bypass usage controls</li>
                    </ul>
                    <p>
                        This license terminates automatically if you breach these Terms.
                    </p>

                    <h2 id="konto">4. ACCOUNT AND REGISTRATION</h2>
                    <p>
                        To use TradeSwift PRO, you need an account. You are responsible for:
                    </p>
                    <ul>
                        <li>Providing accurate and current information</li>
                        <li>Keeping your account credentials secure</li>
                        <li>Notifying TradeSwift if you suspect unauthorized account access</li>
                    </ul>

                    <h2 id="prenumerationer">5. PRICING, SUBSCRIPTIONS, AND FEES</h2>
                    <p>
                        TradeSwift may offer paid plans (for example monthly, yearly, lifetime, or
                        credits) and may charge a platform fee on Stripe-powered transactions.
                        Applicable prices and fees are shown in the app before purchase or payment.
                    </p>
                    <p>
                        If purchases are made through Apple App Store, Apple handles billing,
                        renewals, and App Store refunds under Apple terms. Subscriptions renew
                        automatically unless cancelled in your Apple subscription settings.
                    </p>

                    <h2 id="fair-usage">6. FAIR USAGE POLICY (ANTI-ABUSE)</h2>
                    <p>
                        Some plans may be marketed as "unlimited" for normal solo contractor use.
                        To protect platform stability, prevent abuse, and maintain delivery quality,
                        TradeSwift applies fair usage safeguards.
                    </p>

                    <h3>6.1 RECEIPT SCANS</h3>
                    <ul>
                        <li>Soft warning at 200 receipt scans in a calendar month</li>
                        <li>Hard stop at 300 receipt scans in a calendar month</li>
                        <li>Hourly safeguard: maximum 50 scans per hour</li>
                    </ul>
                    <p>
                        If you hit the monthly cap, scanning is paused until the next month unless
                        TradeSwift approves higher volume for enterprise use.
                    </p>

                    <h3>6.2 EMAIL SENDING</h3>
                    <ul>
                        <li>Hard stop at 2,000 sent emails in a calendar month</li>
                    </ul>
                    <p>
                        This limit also protects sender reputation and deliverability security.
                    </p>

                    <h3>6.3 ENFORCEMENT</h3>
                    <p>
                        TradeSwift may throttle, pause, or restrict affected features when unusual volume,
                        account sharing, scripted activity, fraud signals, or other abuse risk is
                        detected. Repeated abuse may result in suspension or termination.
                    </p>

                    <h2 id="stripe">7. STRIPE CONNECT AND PAYMENT RELATIONSHIPS</h2>
                    <p>
                        TradeSwift integrates Stripe Connect so you can accept customer card payments.
                        TradeSwift is not the contracting party in the underlying sale of goods or
                        services between you and your client.
                    </p>
                    <ul>
                        <li>
                            You agree to the Stripe Connected Account terms:{' '}
                            <a
                                href="https://stripe.com/connect-account/legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Stripe Connected Account Agreement
                            </a>
                        </li>
                        <li>
                            You must comply with Stripe restrictions, including prohibited/restricted
                            business rules:{' '}
                            <a
                                href="https://stripe.com/legal/restricted-businesses"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                stripe.com/legal/restricted-businesses
                            </a>
                        </li>
                        <li>
                            You are responsible for your customer relationship, including service
                            delivery, invoice accuracy, taxes, VAT, refunds, and support
                        </li>
                        <li>
                            You are generally merchant of record for your customer payments, unless
                            expressly stated otherwise in-app
                        </li>
                        <li>
                            You are responsible for losses, negative balance, chargebacks, dispute
                            fees, and fraud-related debits on your Stripe connected account under
                            Stripe rules
                        </li>
                        <li>
                            Stripe may apply reserves, delayed payouts, or additional verification
                            checks based on risk and compliance requirements
                        </li>
                        <li>
                            You must provide requested onboarding/compliance information and keep
                            account details up to date
                        </li>
                        <li>
                            TradeSwift may request additional information or temporarily limit payment
                            features to support risk mitigation and fraud prevention
                        </li>
                    </ul>

                    <h3>7.1 PAYOUTS</h3>
                    <p>
                        Customer payments are processed by Stripe and paid out according to Stripe's
                        payout schedule and controls for your connected account.
                    </p>

                    <h3>7.2 FEES</h3>
                    <p>
                        Stripe charges payment processing and dispute-related fees under Stripe terms.
                        TradeSwift may charge a separate platform fee shown before payment is created.
                    </p>

                    <h3>7.3 REFUNDS AND DISPUTES</h3>
                    <p>
                        You manage refunds and disputes with your customer. TradeSwift may provide
                        tools to initiate refunds or submit evidence, but TradeSwift does not decide
                        or adjudicate disputes between you and your customer.
                    </p>

                    <h2 id="ansvar">8. USER RESPONSIBILITIES</h2>
                    <p>You agree to:</p>
                    <ul>
                        <li>Use the service in accordance with applicable law</li>
                        <li>Comply with tax, accounting, and invoicing obligations applicable to your business</li>
                        <li>Not misuse or disrupt the service or other users</li>
                        <li>Not bypass technical, payment, risk, or usage controls</li>
                    </ul>

                    <h2 id="rattigheter">9. INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p>
                        TradeSwift and its content (including trademarks, design, and code) are
                        owned by Mikail Yenigün or licensors. The license in section 3 does not
                        transfer ownership rights to you.
                    </p>

                    <h2>10. LIMITATION OF LIABILITY</h2>
                    <p>
                        TradeSwift is provided "as is" and "as available". We do not guarantee
                        uninterrupted or error-free operation.
                    </p>
                    <p>
                        To the extent permitted by law, TradeSwift is not liable for indirect losses,
                        lost profits, or consequential damages arising from your use of the service.
                    </p>

                    <h2>11. TERMINATION</h2>
                    <p>
                        You may stop using the app at any time. We may suspend or terminate accounts
                        that violate these Terms, applicable law, or payment/risk requirements.
                    </p>

                    <h2>12. CHANGES TO TERMS</h2>
                    <p>
                        We may update these Terms from time to time. Material changes may be
                        communicated in-app or by email. Continued use after updates means you
                        accept the revised Terms.
                    </p>

                    <h2>13. GOVERNING LAW AND DISPUTES</h2>
                    <p>
                        These Terms are governed by Swedish law. Disputes should first be addressed
                        through good-faith negotiation. If unresolved, disputes are settled by
                        Swedish courts, with Stockholm District Court as first instance.
                    </p>

                    <h2>14. CONTACT</h2>
                    <p>
                        Questions about these Terms can be sent to{' '}
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
                    <p className="legal-meta">Senast uppdaterad: Februari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift PRO hjälper dig skapa fakturor, skicka faktura-e-post, skanna
                        kvitton och ta betalt via Stripe Connect.<br />
                        Kortbetalningar behandlas av Stripe, men själva tjänsteavtalet är fortfarande
                        direkt mellan dig och din kund.<br />
                        Om du prenumererar via Apple App Store hanterar Apple debitering, förnyelser
                        och App Store-återbetalningar.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#allmant">Allmänt</a></li>
                        <li><a href="#tjanst">Tjänstebeskrivning</a></li>
                        <li><a href="#licens">Licens och tillåten användning</a></li>
                        <li><a href="#konto">Konto och registrering</a></li>
                        <li><a href="#prenumerationer">Priser och debitering</a></li>
                        <li><a href="#fair-usage">Fair usage-policy</a></li>
                        <li><a href="#stripe">Stripe Connect och betalningar</a></li>
                        <li><a href="#ansvar">Användarens ansvar</a></li>
                        <li><a href="#rattigheter">Immateriella rättigheter</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="allmant">1. ALLMÄNT</h2>
                    <p>
                        Dessa användarvillkor ("Villkor") reglerar din användning av TradeSwift
                        PRO-appen och relaterade tjänster som tillhandahålls av Mikail Yenigün,
                        oberoende utvecklare och ansvarig för TradeSwift ("TradeSwift", "jag", "mig").
                    </p>
                    <p>
                        Genom att skapa konto eller använda tjänsten accepterar du dessa Villkor.
                    </p>

                    <h2 id="tjanst">2. TJÄNSTEBESKRIVNING</h2>
                    <p>TradeSwift PRO är en fakturerings- och arbetsflödesapp som innehåller:</p>
                    <ul>
                        <li>Skapande och hantering av fakturor</li>
                        <li>Kund- och artikelhantering</li>
                        <li>Kvittoskanning med AI-stöd</li>
                        <li>E-postutskick och spårning av e-postleverans</li>
                        <li>Kortbetalningslänkar och utbetalningskoppling via Stripe Connect</li>
                        <li>Valfri iCloud-synk och återställning</li>
                    </ul>

                    <h2 id="licens">3. LICENS OCH TILLÅTEN ANVÄNDNING (EULA)</h2>
                    <p>
                        Mikail Yenigün beviljar dig en begränsad, icke-exklusiv, icke-överförbar
                        och återkallelig licens att använda TradeSwift PRO på enheter du äger
                        eller kontrollerar, i enlighet med dessa Villkor.
                    </p>
                    <p>Du får inte:</p>
                    <ul>
                        <li>Kopiera, modifiera eller distribuera appen</li>
                        <li>Reverse-engineera, dekompilera eller demontera appen</li>
                        <li>Ta bort upphovsrätts- eller varumärkesinformation</li>
                        <li>Använda appen för olagliga ändamål</li>
                        <li>Underlicensiera eller överlåta licensen till tredje part</li>
                        <li>Använda botar, script eller kontodelning för att kringgå begränsningar</li>
                    </ul>
                    <p>
                        Licensen upphör automatiskt om du bryter mot dessa Villkor.
                    </p>

                    <h2 id="konto">4. KONTO OCH REGISTRERING</h2>
                    <p>
                        För att använda TradeSwift PRO behöver du ett konto. Du ansvarar för att:
                    </p>
                    <ul>
                        <li>Lämna korrekta och aktuella uppgifter</li>
                        <li>Skydda dina kontouppgifter</li>
                        <li>Meddela TradeSwift vid misstanke om obehörig åtkomst</li>
                    </ul>

                    <h2 id="prenumerationer">5. PRISER, PRENUMERATIONER OCH AVGIFTER</h2>
                    <p>
                        TradeSwift kan erbjuda betalda planer (till exempel månads-, års-, livstids-
                        eller kreditpaket) och kan ta ut plattformsavgift på Stripe-betalningar.
                        Aktuella priser och avgifter visas i appen före köp eller betalning.
                    </p>
                    <p>
                        Om köp sker via Apple App Store hanterar Apple betalning, förnyelser och
                        App Store-återbetalningar enligt Apples villkor. Prenumerationer förnyas
                        automatiskt om de inte sägs upp i Apple-inställningar.
                    </p>

                    <h2 id="fair-usage">6. FAIR USAGE-POLICY (ANTI-MISSBRUK)</h2>
                    <p>
                        Vissa planer kan marknadsföras som "obegränsade" för normalt enmansbruk.
                        För att skydda drift, kvalitet och säkerhet tillämpar TradeSwift fair
                        usage-begränsningar.
                    </p>

                    <h3>6.1 KVITTOSKANNING</h3>
                    <ul>
                        <li>Mjuk varning vid 200 kvittoskanningar under en kalendermånad</li>
                        <li>Hårt stopp vid 300 kvittoskanningar under en kalendermånad</li>
                        <li>Timskydd: maximalt 50 skanningar per timme</li>
                    </ul>
                    <p>
                        När månadsgränsen nås pausas skanning till nästa månad, om inte högre volym
                        har godkänts för enterprise-användning.
                    </p>

                    <h3>6.2 E-POSTUTSKICK</h3>
                    <ul>
                        <li>Hårt stopp vid 2 000 skickade e-post under en kalendermånad</li>
                    </ul>
                    <p>
                        Denna gräns skyddar även avsändarrykte och leveransbarhet.
                    </p>

                    <h3>6.3 TILLÄMPNING</h3>
                    <p>
                        TradeSwift kan strypa, pausa eller begränsa funktioner vid avvikande volym,
                        kontodelning, automatiserat beteende, bedrägerisignaler eller annan
                        missbruksrisk. Upprepat missbruk kan leda till avstängning eller uppsägning.
                    </p>

                    <h2 id="stripe">7. STRIPE CONNECT OCH BETALNINGSRELATIONER</h2>
                    <p>
                        TradeSwift integrerar Stripe Connect för att du ska kunna ta emot kortbetalningar.
                        TradeSwift är inte avtalspart i den underliggande affären mellan dig och din kund.
                    </p>
                    <ul>
                        <li>
                            Du godkänner Stripes villkor för anslutna konton:{' '}
                            <a
                                href="https://stripe.com/connect-account/legal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Stripe Connected Account Agreement
                            </a>
                        </li>
                        <li>
                            Du måste följa Stripes begränsningar, inklusive förbjudna/begränsade
                            verksamheter:{' '}
                            <a
                                href="https://stripe.com/legal/restricted-businesses"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                stripe.com/legal/restricted-businesses
                            </a>
                        </li>
                        <li>
                            Du ansvarar för kundrelationen, inklusive leverans, fakturakorrekthet,
                            skatter, moms, återbetalningar och kundsupport
                        </li>
                        <li>
                            Du är normalt merchant of record för kundbetalningar, om inte annat
                            uttryckligen anges i appen
                        </li>
                        <li>
                            Du ansvarar för förluster, negativt saldo, chargebacks, tvistavgifter
                            och bedrägerirelaterade debiteringar på ditt Stripe-konto enligt
                            Stripes regler
                        </li>
                        <li>
                            Stripe kan använda reserver, fördröjda utbetalningar eller extra
                            verifieringskrav baserat på risk och regelefterlevnad
                        </li>
                        <li>
                            Du måste lämna begärd onboarding-/compliance-information och hålla
                            kontouppgifter uppdaterade
                        </li>
                        <li>
                            TradeSwift kan begära kompletterande information eller tillfälligt
                            begränsa betalningsfunktioner för risk- och bedrägeriminskning
                        </li>
                    </ul>

                    <h3>7.1 UTBETALNINGAR</h3>
                    <p>
                        Kundbetalningar behandlas av Stripe och betalas ut enligt Stripes schema
                        och kontroller för ditt anslutna konto.
                    </p>

                    <h3>7.2 AVGIFTER</h3>
                    <p>
                        Stripe tar ut betal- och tvistrelaterade avgifter enligt Stripe-villkor.
                        TradeSwift kan ta ut separat plattformsavgift som visas före betalning.
                    </p>

                    <h3>7.3 ÅTERBETALNINGAR OCH TVISTER</h3>
                    <p>
                        Du hanterar återbetalningar och tvister med din kund. TradeSwift kan
                        tillhandahålla verktyg för återbetalning eller bevisuppladdning, men
                        TradeSwift avgör inte tvister mellan dig och din kund.
                    </p>

                    <h2 id="ansvar">8. ANVÄNDARENS ANSVAR</h2>
                    <p>Du förbinder dig att:</p>
                    <ul>
                        <li>Använda tjänsten i enlighet med gällande lag</li>
                        <li>Uppfylla skatte-, bokförings- och faktureringskrav för din verksamhet</li>
                        <li>Inte missbruka tjänsten eller störa andra användare</li>
                        <li>Inte kringgå tekniska, betalnings-, risk- eller användningskontroller</li>
                    </ul>

                    <h2 id="rattigheter">9. IMMATERIELLA RÄTTIGHETER</h2>
                    <p>
                        TradeSwift och dess innehåll (inklusive varumärken, design och kod) ägs av
                        Mikail Yenigün eller licensgivare. Licensen i avsnitt 3 överför inte äganderätt.
                    </p>

                    <h2>10. ANSVARSBEGRÄNSNING</h2>
                    <p>
                        TradeSwift tillhandahålls i "befintligt skick" och "i mån av tillgänglighet".
                        Vi garanterar inte oavbruten eller felfri drift.
                    </p>
                    <p>
                        I den mån lag tillåter ansvarar TradeSwift inte för indirekta skador,
                        utebliven vinst eller följdskador som uppstår genom användning av tjänsten.
                    </p>

                    <h2>11. UPPSÄGNING</h2>
                    <p>
                        Du kan när som helst sluta använda appen. Vi kan stänga av eller avsluta
                        konton som bryter mot Villkoren, gällande lag eller betalnings-/riskkrav.
                    </p>

                    <h2>12. ÄNDRINGAR AV VILLKOREN</h2>
                    <p>
                        Vi kan uppdatera Villkoren löpande. Väsentliga ändringar kan meddelas i appen
                        eller via e-post. Fortsatt användning efter uppdatering innebär accept.
                    </p>

                    <h2>13. TILLÄMPLIG LAG OCH TVISTER</h2>
                    <p>
                        Dessa Villkor regleras av svensk lag. Tvister ska först hanteras genom
                        förhandling i god tro. Om tvisten kvarstår avgörs den av svensk domstol
                        med Stockholms tingsrätt som första instans.
                    </p>

                    <h2>14. KONTAKT</h2>
                    <p>
                        Frågor om Villkoren skickas till{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
