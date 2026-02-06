import { useLanguage } from '../i18n/LanguageContext';
import './Legal.css';

export function Privacy() {
    const { language } = useLanguage();
    return language === 'sv' ? <PrivacySv /> : <PrivacyEn />;
}

function PrivacyEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Privacy Policy</h1>
                    <p className="legal-meta">Last updated: February 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift is local-first: your invoices, clients, and receipts stay on your
                        device unless you choose to connect external services.<br />
                        If you connect services like Apple iCloud or Stripe, those providers process
                        data under their own privacy terms.<br />
                        You can delete your data whenever you want. TradeSwift does not run ads and
                        never sells personal data.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#intro">Introduction</a></li>
                        <li><a href="#local-first">Local-first storage</a></li>
                        <li><a href="#connected-services">Connected services</a></li>
                        <li><a href="#minimal-processing">Minimal operational processing</a></li>
                        <li><a href="#no-ads">No ads, no sale of data</a></li>
                        <li><a href="#controls">Your controls and deletion</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#changes">Changes</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="intro">1. INTRODUCTION</h2>
                    <p>
                        TradeSwift is created and operated by Mikail Yenigün ("TradeSwift", "I",
                        "me"). This policy explains how data is handled when you use TradeSwift Pro.
                    </p>

                    <h2 id="local-first">2. LOCAL-FIRST STORAGE</h2>
                    <p>
                        TradeSwift is built so your core business content stays local on your device.
                        This includes invoices, clients, items, notes, and receipt records.
                    </p>
                    <p>
                        TradeSwift is not an ad network or a data broker and does not build advertising
                        profiles from your business information.
                    </p>

                    <h2 id="connected-services">3. CONNECTED SERVICES YOU CHOOSE</h2>
                    <p>
                        Some features only work when you connect external services. In those cases,
                        data is processed by that provider under its own terms and privacy policy.
                    </p>

                    <h3>3.1 APPLE (SIGN IN, ICLOUD, APP STORE)</h3>
                    <p>
                        If you use Sign in with Apple, iCloud sync/restore, or App Store billing,
                        Apple processes those parts.
                    </p>
                    <ul>
                        <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a></li>
                    </ul>

                    <h3>3.2 STRIPE (CUSTOMER CARD PAYMENTS)</h3>
                    <p>
                        If you connect Stripe to accept card payments from your clients, Stripe
                        processes payment data, onboarding/compliance data, and payout data.
                    </p>
                    <ul>
                        <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                    </ul>

                    <h3>3.3 OTHER OPTIONAL FEATURE PROVIDERS</h3>
                    <p>
                        For specific features (for example receipt scanning, email delivery, or push
                        notifications), relevant data is processed only to provide that feature.
                    </p>

                    <h2 id="minimal-processing">4. MINIMAL OPERATIONAL PROCESSING</h2>
                    <p>
                        To run the service reliably, TradeSwift may process limited technical metadata such
                        as authentication state, usage counters, or payment/email event status.
                    </p>
                    <p>
                        The goal is to keep this processing minimal and avoid storing your core business
                        documents on TradeSwift servers.
                    </p>

                    <h2 id="no-ads">5. NO ADS, NO SALE OF DATA</h2>
                    <ul>
                        <li>TradeSwift does not show third-party ads in TradeSwift Pro</li>
                        <li>TradeSwift does not sell your personal data</li>
                        <li>TradeSwift does not trade your business data for ad targeting</li>
                    </ul>

                    <h2 id="controls">6. YOUR CONTROLS AND DELETION</h2>
                    <p>
                        You can delete invoices, clients, and other records inside the app whenever
                        you want. You can also remove the app to remove local data from your device.
                    </p>
                    <p>
                        If you use connected services, you can disconnect those services (for example
                        Stripe) and manage related data directly with that provider.
                    </p>
                    <p>
                        For privacy requests, contact{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>

                    <h2 id="security">7. SECURITY</h2>
                    <p>
                        TradeSwift uses appropriate safeguards such as encrypted transport (TLS) for network
                        requests. Connected providers apply their own security controls under their
                        own terms.
                    </p>

                    <h2 id="changes">8. CHANGES TO THIS POLICY</h2>
                    <p>
                        This policy may be updated as the app evolves. Material updates may be shown
                        in-app or on the website.
                    </p>

                    <h2 id="contact">9. CONTACT</h2>
                    <p>
                        Questions about privacy can be sent to{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function PrivacySv() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Integritetspolicy</h1>
                    <p className="legal-meta">Senast uppdaterad: Februari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift är local-first: dina fakturor, kunder och kvitton ligger på din
                        enhet om du inte själv väljer att koppla externa tjänster.<br />
                        Om du ansluter tjänster som Apple iCloud eller Stripe behandlar de uppgifter
                        enligt sina egna villkor och policys.<br />
                        Du kan radera data när du vill. TradeSwift visar inga annonser och säljer aldrig
                        personuppgifter.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#intro">Inledning</a></li>
                        <li><a href="#local-first">Local-first lagring</a></li>
                        <li><a href="#connected-services">Anslutna tjänster</a></li>
                        <li><a href="#minimal-processing">Minimal driftbehandling</a></li>
                        <li><a href="#no-ads">Inga annonser, ingen försäljning av data</a></li>
                        <li><a href="#controls">Dina val och radering</a></li>
                        <li><a href="#security">Säkerhet</a></li>
                        <li><a href="#changes">Ändringar</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="intro">1. INLEDNING</h2>
                    <p>
                        TradeSwift skapas och drivs av Mikail Yenigün ("TradeSwift", "jag", "mig")
                        och värnar om din integritet.
                        Denna policy förklarar hur uppgifter hanteras när du använder TradeSwift Pro.
                    </p>

                    <h2 id="local-first">2. LOCAL-FIRST LAGRING</h2>
                    <p>
                        TradeSwift är byggt så att ditt huvudsakliga affärsinnehåll lagras lokalt på
                        din enhet. Det gäller till exempel fakturor, kunder, artiklar, anteckningar
                        och kvittouppgifter.
                    </p>
                    <p>
                        TradeSwift är inte ett annonsnätverk och inte en databroker, och bygger inte
                        annonsprofiler baserat på dina företagsuppgifter.
                    </p>

                    <h2 id="connected-services">3. ANSLUTNA TJÄNSTER SOM DU VÄLJER</h2>
                    <p>
                        Vissa funktioner fungerar bara när du kopplar externa tjänster. I de fallen
                        behandlas uppgifter av respektive leverantör enligt deras egna villkor och
                        integritetspolicy.
                    </p>

                    <h3>3.1 APPLE (INLOGGNING, ICLOUD, APP STORE)</h3>
                    <p>
                        Om du använder Logga in med Apple, iCloud-synk/återställning eller App
                        Store-betalning hanteras den delen av Apple.
                    </p>
                    <ul>
                        <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a></li>
                    </ul>

                    <h3>3.2 STRIPE (KUNDBETALNINGAR MED KORT)</h3>
                    <p>
                        Om du kopplar Stripe för att ta betalt med kort behandlar Stripe
                        betalningsdata, onboarding/compliance-data och utbetalningsdata.
                    </p>
                    <ul>
                        <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                    </ul>

                    <h3>3.3 ANDRA VALFRIA FUNKTIONSLEVERANTÖRER</h3>
                    <p>
                        För vissa funktioner (till exempel kvittoskanning, e-postleverans eller
                        pushnotiser) behandlas relevanta uppgifter bara för att leverera funktionen.
                    </p>

                    <h2 id="minimal-processing">4. MINIMAL DRIFTBEHANDLING</h2>
                    <p>
                        För att tjänsten ska fungera stabilt kan TradeSwift behandla begränsad teknisk
                        metadata, till exempel autentiseringsstatus, användningsräknare eller
                        status för betalning/e-posthändelser.
                    </p>
                    <p>
                        Målet är att hålla denna behandling minimal och undvika att lagra dina
                        kärndokument för verksamheten på TradeSwifts servrar.
                    </p>

                    <h2 id="no-ads">5. INGA ANNONSER, INGEN FÖRSÄLJNING AV DATA</h2>
                    <ul>
                        <li>TradeSwift visar inga tredjepartsannonser i TradeSwift Pro</li>
                        <li>TradeSwift säljer inte dina personuppgifter</li>
                        <li>TradeSwift handlar inte med din företagsdata för annonsmålgrupper</li>
                    </ul>

                    <h2 id="controls">6. DINA VAL OCH RADERING</h2>
                    <p>
                        Du kan radera fakturor, kunder och andra poster i appen när du vill. Du kan
                        också ta bort appen för att radera lokal data från enheten.
                    </p>
                    <p>
                        Om du använder anslutna tjänster kan du koppla bort dem (till exempel
                        Stripe) och hantera relaterad data direkt hos leverantören.
                    </p>
                    <p>
                        För integritetsfrågor eller begäran, kontakta{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>

                    <h2 id="security">7. SÄKERHET</h2>
                    <p>
                        TradeSwift använder lämpliga skydd, till exempel krypterad överföring (TLS) för
                        nätverkstrafik. Anslutna leverantörer tillämpar sina egna säkerhetskontroller
                        enligt sina villkor.
                    </p>

                    <h2 id="changes">8. ÄNDRINGAR I DENNA POLICY</h2>
                    <p>
                        Policyn kan uppdateras när appen utvecklas. Väsentliga ändringar kan visas
                        i appen eller på webbplatsen.
                    </p>

                    <h2 id="contact">9. KONTAKT</h2>
                    <p>
                        Frågor om integritet skickas till{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
