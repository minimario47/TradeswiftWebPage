import { useLanguage } from '../i18n/LanguageContext';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import './Legal.css';

export function Privacy() {
    const { language } = useLanguage();
    return (
        <>
            <SEO
                path="/integritetspolicy"
                noindex
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'TradeSwift Pro', url: 'https://tradeswift.se/' },
                        { name: language === 'sv' ? 'Integritetspolicy' : 'Privacy Policy', url: 'https://tradeswift.se/integritetspolicy' },
                    ]),
                ]}
            />
            {language === 'sv' ? <PrivacySv /> : <PrivacyEn />}
        </>
    );
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
                        TradeSwift PRO is local-first: your invoices, clients, and receipts stay on
                        your device.<br />
                        TradeSwift does not store your core business data. If you connect external
                        services like Apple iCloud or Stripe, those providers store/process data
                        under their own privacy terms.<br />
                        You can delete your data whenever you want. No ads, and never any sale of
                        personal data.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#intro">Introduction</a></li>
                        <li><a href="#storage">How storage works</a></li>
                        <li><a href="#connected">Connected services you choose</a></li>
                        <li><a href="#no-ads">No ads and no data sale</a></li>
                        <li><a href="#deletion">Delete your data anytime</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#changes">Changes</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="intro">1. INTRODUCTION</h2>
                    <p>
                        TradeSwift PRO is created and operated by Mikail Yenigün ("TradeSwift",
                        "I", "me"). This policy explains how privacy works in the app.
                    </p>

                    <h2 id="storage">2. HOW STORAGE WORKS</h2>
                    <p>
                        TradeSwift PRO is designed so your core business data stays on your device.
                        This includes invoices, clients, items, notes, and receipt records.
                    </p>
                    <p>
                        TradeSwift does not store this core business data on its own servers.
                    </p>

                    <h2 id="connected">3. CONNECTED SERVICES YOU CHOOSE</h2>
                    <p>
                        If you connect external services, those providers handle storage/processing
                        for the relevant feature under their own terms and privacy policies.
                    </p>

                    <h3>3.1 APPLE (SIGN IN, ICLOUD, APP STORE)</h3>
                    <ul>
                        <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a></li>
                    </ul>

                    <h3>3.2 STRIPE (CARD PAYMENTS)</h3>
                    <ul>
                        <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                    </ul>

                    <h2 id="no-ads">4. NO ADS AND NO DATA SALE</h2>
                    <ul>
                        <li>TradeSwift PRO does not show third-party ads</li>
                        <li>TradeSwift does not sell your personal data</li>
                    </ul>

                    <h2 id="deletion">5. DELETE YOUR DATA ANYTIME</h2>
                    <p>
                        You can delete records inside TradeSwift PRO whenever you want, and you can
                        remove the app to remove local data from your device.
                    </p>
                    <p>
                        If you connected Apple or Stripe, you can also manage related data directly
                        with those providers.
                    </p>

                    <h2 id="security">6. SECURITY</h2>
                    <p>
                        TradeSwift uses standard transport security (TLS) for network requests.
                        Connected providers apply their own security controls.
                    </p>

                    <h2 id="changes">7. CHANGES TO THIS POLICY</h2>
                    <p>
                        This policy may be updated as TradeSwift PRO evolves. Material updates may be
                        shown in-app or on the website.
                    </p>

                    <h2 id="contact">8. CONTACT</h2>
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
                        TradeSwift PRO är local-first: dina fakturor, kunder och kvitton ligger på
                        din enhet.<br />
                        TradeSwift lagrar inte din kärndata för verksamheten. Om du kopplar externa
                        tjänster som Apple iCloud eller Stripe är det de leverantörerna som
                        lagrar/behandlar uppgifter enligt sina villkor.<br />
                        Du kan radera data när du vill. Inga annonser och ingen försäljning av
                        personuppgifter.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#intro">Inledning</a></li>
                        <li><a href="#storage">Hur lagring fungerar</a></li>
                        <li><a href="#connected">Anslutna tjänster som du väljer</a></li>
                        <li><a href="#no-ads">Inga annonser och ingen försäljning av data</a></li>
                        <li><a href="#deletion">Radera data när du vill</a></li>
                        <li><a href="#security">Säkerhet</a></li>
                        <li><a href="#changes">Ändringar</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="intro">1. INLEDNING</h2>
                    <p>
                        TradeSwift PRO skapas och drivs av Mikail Yenigün ("TradeSwift", "jag",
                        "mig"). Denna policy förklarar hur integritet fungerar i appen.
                    </p>

                    <h2 id="storage">2. HUR LAGRING FUNGERAR</h2>
                    <p>
                        TradeSwift PRO är byggd så att kärndata för verksamheten ligger kvar på din
                        enhet. Det gäller till exempel fakturor, kunder, artiklar, anteckningar och
                        kvittouppgifter.
                    </p>
                    <p>
                        TradeSwift lagrar inte den här kärndatan på egna servrar.
                    </p>

                    <h2 id="connected">3. ANSLUTNA TJÄNSTER SOM DU VÄLJER</h2>
                    <p>
                        Om du ansluter externa tjänster är det de leverantörerna som hanterar
                        lagring/behandling för den funktionen enligt sina egna villkor och policys.
                    </p>

                    <h3>3.1 APPLE (INLOGGNING, ICLOUD, APP STORE)</h3>
                    <ul>
                        <li><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">apple.com/legal/privacy</a></li>
                    </ul>

                    <h3>3.2 STRIPE (KORTBETALNINGAR)</h3>
                    <ul>
                        <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                    </ul>

                    <h2 id="no-ads">4. INGA ANNONSER OCH INGEN FÖRSÄLJNING AV DATA</h2>
                    <ul>
                        <li>TradeSwift PRO visar inga tredjepartsannonser</li>
                        <li>TradeSwift säljer inte dina personuppgifter</li>
                    </ul>

                    <h2 id="deletion">5. RADERA DATA NÄR DU VILL</h2>
                    <p>
                        Du kan radera poster i TradeSwift PRO när du vill, och du kan ta bort appen
                        för att radera lokal data från enheten.
                    </p>
                    <p>
                        Om du kopplat Apple eller Stripe kan du även hantera relaterad data direkt
                        hos de leverantörerna.
                    </p>

                    <h2 id="security">6. SÄKERHET</h2>
                    <p>
                        TradeSwift använder standardskydd för överföring (TLS) i nätverksanrop.
                        Anslutna leverantörer tillämpar sina egna säkerhetskontroller.
                    </p>

                    <h2 id="changes">7. ÄNDRINGAR I DENNA POLICY</h2>
                    <p>
                        Policyn kan uppdateras när TradeSwift PRO utvecklas. Väsentliga ändringar
                        kan visas i appen eller på webbplatsen.
                    </p>

                    <h2 id="contact">8. KONTAKT</h2>
                    <p>
                        Frågor om integritet skickas till{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
