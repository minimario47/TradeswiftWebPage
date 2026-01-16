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
                    <p className="legal-meta">Last updated: January 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        Most data (company profile, clients, invoices, receipts, settings) stays on your device.<br />
                        We only send data when you use features like Apple Sign-In, Stripe payments,
                        receipt scanning (OpenAI), email sending, or address lookup.<br />
                        We never sell your data and run no ads.<br />
                        You can delete local data at any time.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#introduction">Introduction</a></li>
                        <li><a href="#data-controller">Data controller</a></li>
                        <li><a href="#data-collection">What data we collect</a></li>
                        <li><a href="#data-use">How we use data</a></li>
                        <li><a href="#legal-basis">Legal basis</a></li>
                        <li><a href="#data-sharing">Sharing of data</a></li>
                        <li><a href="#retention">Retention period</a></li>
                        <li><a href="#rights">Your rights</a></li>
                        <li><a href="#security">Security</a></li>
                        <li><a href="#changes">Changes</a></li>
                        <li><a href="#contact">Contact and complaints</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="introduction">1. INTRODUCTION</h2>
                    <p>
                        TradeSwift AB ("we", "us" or "TradeSwift") values your privacy. This privacy
                        policy explains how we collect, use, store, and protect your personal data
                        when you use the TradeSwift Pro app and our services.
                    </p>

                    <h2 id="data-controller">2. DATA CONTROLLER</h2>
                    <p>
                        TradeSwift AB is the data controller for the processing of your personal data.
                    </p>
                    <div className="legal-info-box">
                        <h4>Contact details</h4>
                        <p>
                            TradeSwift AB<br />
                            Exempelgatan 123<br />
                            123 45 Stockholm<br />
                            Email: support@tradeswift.se
                        </p>
                    </div>

                    <h2 id="data-collection">3. WHAT DATA DO WE COLLECT?</h2>
                    <p>Most data is created by you and stored locally on your device. Depending on the features you use, we may process:</p>
                    <ul>
                        <li><strong>Account and authentication:</strong> Apple Sign-In ID, name, and email (if provided by Apple)</li>
                        <li><strong>Company profile and settings:</strong> company name, organization number, address, phone, email, VAT/ROT settings, language, theme</li>
                        <li><strong>Clients and invoices:</strong> client contact details, invoices, line items, totals, notes (including optional contact import)</li>
                        <li><strong>Receipts:</strong> receipt images and extracted data when you scan receipts</li>
                        <li><strong>Bank details:</strong> bank name and account/IBAN/BIC for invoice footer</li>
                        <li><strong>Email sending:</strong> recipients and message content when you choose to send invoices by email</li>
                        <li><strong>Usage data (minimal):</strong> scan/email usage counts for limits and abuse prevention</li>
                    </ul>

                    <h2 id="data-use">4. HOW DO WE USE YOUR DATA?</h2>
                    <p>We process your personal data to:</p>
                    <ul>
                        <li>Create and manage invoices, clients, items, and receipts on your device</li>
                        <li>Authenticate you with Apple Sign-In when required</li>
                        <li>Process card payments and payout setup via Stripe Connect</li>
                        <li>Scan receipts with AI when you choose to use the scanner</li>
                        <li>Send invoice emails on your request</li>
                        <li>Provide address autocomplete</li>
                        <li>Enforce usage limits and prevent abuse</li>
                    </ul>

                    <h2 id="legal-basis">5. LEGAL BASIS FOR PROCESSING</h2>
                    <p>We process your data based on the following legal grounds:</p>
                    <ul>
                        <li><strong>Contract:</strong> To provide the service you signed up for</li>
                        <li><strong>Legal obligation:</strong> To meet legal requirements</li>
                        <li><strong>Legitimate interest:</strong> To improve and secure our services</li>
                        <li><strong>Consent:</strong> For marketing (when applicable)</li>
                    </ul>

                    <h2 id="data-sharing">6. SHARING OF DATA</h2>
                    <p>We share your data with the following third-party services:</p>

                    <h3>6.1 STRIPE</h3>
                    <p>
                        Stripe, Inc. is our payment service provider. When you use Stripe Connect
                        to receive payments, we share the following data with Stripe:
                    </p>
                    <ul>
                        <li>Name and contact details</li>
                        <li>Email address</li>
                        <li>Company information (organization number, address)</li>
                        <li>Bank account details for payouts</li>
                        <li>Transaction history</li>
                    </ul>
                    <p>
                        Stripe processes this data according to its own privacy policy:{' '}
                        <a
                            href="https://stripe.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            stripe.com/privacy
                        </a>
                    </p>

                    <h3>6.2 OTHER SERVICES</h3>
                    <ul>
                        <li><strong>Apple:</strong> For authentication via Sign in with Apple</li>
                        <li><strong>OpenAI:</strong> For receipt image analysis when you use the scanner</li>
                        <li><strong>OpenStreetMap (Nominatim):</strong> For address search and autocomplete</li>
                        <li><strong>Email delivery:</strong> For sending invoice emails you initiate</li>
                        <li><strong>Cloudflare:</strong> For hosting and security of our backend</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Important</h4>
                        <p>We never sell your personal data to third parties.</p>
                    </div>

                    <h2 id="retention">7. RETENTION PERIOD</h2>
                    <p>
                        Most data is stored locally on your device and remains until you delete it or
                        remove the app. Data processed by Stripe, Apple, OpenAI, or email providers is
                        retained according to their policies. We may retain limited backend logs or
                        usage records as needed for security, abuse prevention, and legal compliance.
                    </p>

                    <h2 id="rights">8. YOUR RIGHTS</h2>
                    <p>Under GDPR you have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Request restriction of processing</li>
                        <li>Object to processing</li>
                        <li>Receive your data in a portable format</li>
                    </ul>
                    <p>
                        Contact us at <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> to
                        exercise your rights.
                    </p>

                    <h2 id="security">9. SECURITY</h2>
                    <p>
                        We use TLS for traffic to our services. Most data stays on your device and is
                        protected by your device security. Third-party processors (Stripe, Apple,
                        OpenAI, email providers) apply their own security measures.
                    </p>

                    <h2 id="changes">10. CHANGES TO THIS POLICY</h2>
                    <p>
                        We may update this policy as needed. Material changes will be communicated
                        via the app or email.
                    </p>

                    <h2 id="contact">11. CONTACT AND COMPLAINTS</h2>
                    <p>
                        If you have questions or complaints, contact us at{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                    <p>
                        You also have the right to submit a complaint to the Swedish Authority for
                        Privacy Protection (IMY).
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
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        Det mesta (företagsprofil, kunder, fakturor, kvitton, inställningar) stannar på din enhet.<br />
                        Vi skickar bara uppgifter när du använder funktioner som Apple-inloggning,
                        Stripe-betalningar, kvittoskanning (OpenAI), e-postutskick eller adressökning.<br />
                        Vi säljer aldrig dina uppgifter och har inga annonser.<br />
                        Du kan radera lokal data när som helst.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#introduction">Inledning</a></li>
                        <li><a href="#data-controller">Personuppgiftsansvarig</a></li>
                        <li><a href="#data-collection">Vilka uppgifter vi samlar in</a></li>
                        <li><a href="#data-use">Hur vi använder uppgifter</a></li>
                        <li><a href="#legal-basis">Rättslig grund</a></li>
                        <li><a href="#data-sharing">Delning av uppgifter</a></li>
                        <li><a href="#retention">Lagringstid</a></li>
                        <li><a href="#rights">Dina rättigheter</a></li>
                        <li><a href="#security">Säkerhet</a></li>
                        <li><a href="#changes">Ändringar</a></li>
                        <li><a href="#contact">Kontakt och klagomål</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="introduction">1. INLEDNING</h2>
                    <p>
                        TradeSwift AB ("vi", "oss" eller "TradeSwift") värnar om din personliga
                        integritet. Denna integritetspolicy förklarar hur vi samlar in, använder,
                        lagrar och skyddar dina personuppgifter när du använder TradeSwift Pro-appen
                        och våra tjänster.
                    </p>

                    <h2 id="data-controller">2. PERSONUPPGIFTSANSVARIG</h2>
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

                    <h2 id="data-collection">3. VILKA UPPGIFTER SAMLAR VI IN?</h2>
                    <p>Det mesta skapas av dig och lagras lokalt på din enhet. Beroende på vilka funktioner du använder kan vi behandla:</p>
                    <ul>
                        <li><strong>Konto och autentisering:</strong> Apple-ID, namn och e-post (om Apple delar)</li>
                        <li><strong>Företagsprofil och inställningar:</strong> företagsnamn, organisationsnummer, adress, telefon, e-post, moms/ROT-inställningar, språk, tema</li>
                        <li><strong>Kunder och fakturor:</strong> kunduppgifter, fakturor, rader, totalsummor, anteckningar (inklusive valfri kontaktimport)</li>
                        <li><strong>Kvitton:</strong> kvittobilder och extraherad data när du skannar</li>
                        <li><strong>Bankuppgifter:</strong> banknamn och konto/IBAN/BIC för fakturafot</li>
                        <li><strong>E-postutskick:</strong> mottagare och innehåll när du väljer att skicka fakturor via e-post</li>
                        <li><strong>Användningsdata (minimal):</strong> antal skanningar/e-post för begränsningar och missbruksskydd</li>
                    </ul>

                    <h2 id="data-use">4. HUR ANVÄNDER VI DINA UPPGIFTER?</h2>
                    <p>Vi behandlar dina personuppgifter för att:</p>
                    <ul>
                        <li>Skapa och hantera fakturor, kunder, artiklar och kvitton på din enhet</li>
                        <li>Autentisera dig via Sign in with Apple när det krävs</li>
                        <li>Hantera kortbetalningar och utbetalningar via Stripe Connect</li>
                        <li>Skanna kvitton med AI när du väljer att använda skannern</li>
                        <li>Skicka fakturor via e-post på din begäran</li>
                        <li>Erbjuda adressautokomplettering</li>
                        <li>Sätta begränsningar och förhindra missbruk</li>
                    </ul>

                    <h2 id="legal-basis">5. RÄTTSLIG GRUND FÖR BEHANDLING</h2>
                    <p>Vi behandlar dina uppgifter baserat på följande rättsliga grunder:</p>
                    <ul>
                        <li><strong>Avtalsfullgörelse:</strong> För att tillhandahålla den tjänst du har registrerat dig för</li>
                        <li><strong>Rättslig förpliktelse:</strong> För att uppfylla lagkrav</li>
                        <li><strong>Berättigat intresse:</strong> För att förbättra och säkra våra tjänster</li>
                        <li><strong>Samtycke:</strong> För marknadsföring (när tillämpligt)</li>
                    </ul>

                    <h2 id="data-sharing">6. DELNING AV UPPGIFTER</h2>
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
                        <li><strong>Apple:</strong> För inloggning via Sign in with Apple</li>
                        <li><strong>OpenAI:</strong> För analys av kvittobilder när du använder skannern</li>
                        <li><strong>OpenStreetMap (Nominatim):</strong> För adressökning och autokomplettering</li>
                        <li><strong>E-postleverans:</strong> För att skicka fakturor du initierar</li>
                        <li><strong>Cloudflare:</strong> För hosting och säkerhet av vår backend</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Viktig information</h4>
                        <p>Vi säljer aldrig dina personuppgifter till tredje part.</p>
                    </div>

                    <h2 id="retention">7. LAGRINGSTID</h2>
                    <p>
                        Det mesta lagras lokalt på din enhet och ligger kvar tills du raderar det
                        eller tar bort appen. Uppgifter som behandlas av Stripe, Apple, OpenAI eller
                        e-postleverantörer sparas enligt deras policys. Vi kan spara begränsade
                        backend-loggar eller användningsdata för säkerhet, missbruksskydd och lagkrav.
                    </p>

                    <h2 id="rights">8. DINA RÄTTIGHETER</h2>
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

                    <h2 id="security">9. SÄKERHET</h2>
                    <p>
                        Vi använder TLS för trafik till våra tjänster. Det mesta ligger på din enhet
                        och skyddas av enhetens säkerhet. Tredjepartsbehandlare (Stripe, Apple,
                        OpenAI, e-postleverantörer) har egna säkerhetsåtgärder.
                    </p>

                    <h2 id="changes">10. ÄNDRINGAR I POLICYN</h2>
                    <p>
                        Vi kan uppdatera denna policy vid behov. Väsentliga ändringar meddelas
                        via appen eller e-post.
                    </p>

                    <h2 id="contact">11. KONTAKT OCH KLAGOMÅL</h2>
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
