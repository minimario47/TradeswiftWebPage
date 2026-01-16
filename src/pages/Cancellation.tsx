import { useLanguage } from '../i18n/LanguageContext';
import './Legal.css';

export function Cancellation() {
    const { language } = useLanguage();
    return language === 'sv' ? <CancellationSv /> : <CancellationEn />;
}

function CancellationEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Cancellation Policy</h1>
                    <p className="legal-meta">Last updated: January 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        Cancel App Store subscriptions in iOS settings (if applicable).<br />
                        Disconnect Stripe in the app to stop card payments.<br />
                        Invoices and client data are stored locally; delete the app or contact support
                        if you want account deletion.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#cancel-app-store">Cancel App Store subscription</a></li>
                        <li><a href="#disconnect-stripe">Disconnect Stripe</a></li>
                        <li><a href="#what-happens">What happens after you cancel</a></li>
                        <li><a href="#pause-account">Pause account</a></li>
                        <li><a href="#delete-account">Delete account and data</a></li>
                        <li><a href="#reactivation">Reactivation</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. OVERVIEW</h2>
                    <p>
                        You can close your account at any time, cancel an App Store subscription
                        (if applicable), or disconnect your Stripe account. This policy explains
                        how and what happens afterward.
                    </p>

                    <h2 id="cancel-app-store">2. CANCEL APP STORE SUBSCRIPTION (IF APPLICABLE)</h2>
                    <p>If you subscribe via Apple App Store, cancel like this:</p>
                    <ol>
                        <li>Open <strong>Settings</strong> on your iPhone or iPad</li>
                        <li>Tap your name at the top (Apple ID)</li>
                        <li>Select <strong>Subscriptions</strong></li>
                        <li>Find <strong>TradeSwift Pro</strong> and tap it</li>
                        <li>Tap <strong>Cancel Subscription</strong></li>
                    </ol>
                    <p>
                        Your subscription continues until the end of the current billing period,
                        then ends automatically.
                    </p>

                    <h2 id="disconnect-stripe">3. DISCONNECT STRIPE CONNECT</h2>
                    <p>
                        If you want to stop receiving payments via TradeSwift, you can disconnect
                        your Stripe account:
                    </p>
                    <ol>
                        <li>Sign in to the TradeSwift Pro app</li>
                        <li>Go to <strong>Settings</strong> → <strong>Payments</strong></li>
                        <li>Select <strong>Manage Stripe account</strong></li>
                        <li>Select <strong>Disconnect</strong> and confirm</li>
                    </ol>
                    <p>
                        Alternatively, contact us at{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> and we
                        will help you disconnect the account.
                    </p>

                    <h2 id="what-happens">4. WHAT HAPPENS AFTER YOU CANCEL?</h2>
                    <ul>
                        <li>
                            <strong>Access remains:</strong> If you have an App Store subscription,
                            you keep access to premium features until the end of your paid period.
                        </li>
                        <li>
                            <strong>Data is retained:</strong> Your invoices, customers, and receipts
                            are stored locally on your device. They remain unless you delete them
                            or remove the app.
                        </li>
                        <li>
                            <strong>Payments stop:</strong> New customer payments cannot be received
                            once Stripe is disconnected.
                        </li>
                    </ul>

                    <h2 id="pause-account">5. PAUSE ACCOUNT</h2>
                    <p>
                        We currently do not offer the option to pause accounts. If you need a break,
                        we recommend cancelling and reactivating when you are ready.
                    </p>

                    <h2 id="delete-account">6. DELETE ACCOUNT AND DATA</h2>
                    <div className="legal-info-box">
                        <h4>Your right to be deleted</h4>
                        <p>
                            You have the right to request full deletion of your account and all
                            associated data under GDPR and Apple guidelines.
                        </p>
                    </div>

                    <h3>6.1 REQUEST DELETION BY EMAIL</h3>
                    <p>
                        Send an email to{' '}
                        <a href="mailto:support@tradeswift.se?subject=Account%20deletion%20request">
                            support@tradeswift.se
                        </a>{' '}
                        with the subject "Account deletion request" and include:
                    </p>
                    <ul>
                        <li>Your registered email address (Apple Sign-In email)</li>
                        <li>Company name (if applicable)</li>
                    </ul>

                    <h3>6.2 LOCAL DATA ON YOUR DEVICE</h3>
                    <p>
                        Invoices, clients, receipts, and settings are stored locally on your device.
                        You can delete items inside the app or remove the app to clear local data.
                    </p>

                    <h3>6.3 PROCESSING TIME</h3>
                    <p>
                        We process your request within <strong>30 days</strong>. You will receive
                        confirmation when deletion is complete.
                    </p>

                    <h3>6.4 WHAT IS DELETED?</h3>
                    <ul>
                        <li>Your backend account identifier used for authentication</li>
                        <li>Usage records for scans/emails where legally possible</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Note</h4>
                        <p>
                            Stripe may retain payment records as required by law. These records are
                            controlled by Stripe.
                        </p>
                    </div>

                    <h2 id="reactivation">7. REACTIVATION</h2>
                    <p>
                        You can keep using the app at any time. If you disconnected Stripe, reconnect
                        it in Settings → Payments to accept card payments again.
                    </p>

                    <h2 id="contact">8. CONTACT</h2>
                    <p>
                        Need help closing your account or disconnecting Stripe? Contact us:
                    </p>
                    <ul>
                        <li>Email: <a href="mailto:support@tradeswift.se">support@tradeswift.se</a></li>
                        <li>Phone: <a href="tel:+46812345678">08-123 456 78</a> (weekdays 09:00-17:00)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function CancellationSv() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Avbeställningspolicy</h1>
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        Avsluta App Store-prenumerationer i iOS-inställningar (om tillämpligt).<br />
                        Koppla bort Stripe i appen för att stoppa kortbetalningar.<br />
                        Fakturor och kunddata lagras lokalt; radera appen eller kontakta support om
                        du vill radera kontot.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#overview">Översikt</a></li>
                        <li><a href="#cancel-app-store">Avsluta App Store-prenumeration</a></li>
                        <li><a href="#disconnect-stripe">Koppla bort Stripe</a></li>
                        <li><a href="#what-happens">Vad händer när du avslutar</a></li>
                        <li><a href="#pause-account">Pausa konto</a></li>
                        <li><a href="#delete-account">Radera konto och data</a></li>
                        <li><a href="#reactivation">Återaktivering</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. ÖVERSIKT</h2>
                    <p>
                        Du kan när som helst avsluta ditt konto, säga upp en App Store-prenumeration
                        (om tillämpligt) eller koppla bort ditt Stripe-konto. Denna policy förklarar
                        hur du gör det och vad som händer efteråt.
                    </p>

                    <h2 id="cancel-app-store">2. AVSLUTA PRENUMERATION VIA APP STORE (OM TILLÄMPLIGT)</h2>
                    <p>Om du prenumererar via Apple App Store, avslutar du så här:</p>
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

                    <h2 id="disconnect-stripe">3. KOPPLA BORT STRIPE CONNECT</h2>
                    <p>
                        Om du vill sluta ta emot betalningar via TradeSwift kan du koppla bort
                        ditt Stripe-konto:
                    </p>
                    <ol>
                        <li>Logga in i TradeSwift Pro-appen</li>
                        <li>Gå till <strong>Inställningar</strong> → <strong>Betalningar</strong></li>
                        <li>Välj <strong>Hantera Stripe-konto</strong></li>
                        <li>Välj <strong>Koppla bort</strong> och bekräfta</li>
                    </ol>
                    <p>
                        Alternativt kan du kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> så hjälper
                        vi dig koppla bort kontot.
                    </p>

                    <h2 id="what-happens">4. VAD HÄNDER NÄR DU AVSLUTAR?</h2>
                    <ul>
                        <li>
                            <strong>Åtkomst kvarstår:</strong> Om du har en App Store-prenumeration
                            behåller du tillgång till premium-funktioner fram till slutet av din betalda period.
                        </li>
                        <li>
                            <strong>Data sparas:</strong> Dina fakturor, kunder och kvitton raderas inte
                            automatiskt. De ligger lokalt på din enhet tills du raderar dem eller tar bort appen.
                        </li>
                        <li>
                            <strong>Betalningar stoppas:</strong> Nya kundbetalningar kan inte tas emot
                            när Stripe-kontot är bortkopplat.
                        </li>
                    </ul>

                    <h2 id="pause-account">5. PAUSA KONTO</h2>
                    <p>
                        Vi erbjuder för närvarande inte möjlighet att pausa konton.
                        Om du behöver ta en paus rekommenderar vi att du avslutar och sedan
                        återaktiverar när du är redo.
                    </p>

                    <h2 id="delete-account">6. RADERA KONTO OCH DATA</h2>
                    <div className="legal-info-box">
                        <h4>Din rätt att bli raderad</h4>
                        <p>
                            Du har rätt att begära fullständig radering av ditt konto och all
                            associerad data enligt GDPR och Apples riktlinjer.
                        </p>
                    </div>

                    <h3>6.1 BEGÄR RADERING VIA E-POST</h3>
                    <p>
                        Skicka ett e-postmeddelande till{' '}
                        <a href="mailto:support@tradeswift.se?subject=Beg%C3%A4ran%20om%20kontoradering">
                            support@tradeswift.se
                        </a>{' '}
                        med ämnet "Begäran om kontoradering" och inkludera:
                    </p>
                    <ul>
                        <li>Din registrerade e-postadress (Apple-inloggning)</li>
                        <li>Företagsnamn (om tillämpligt)</li>
                    </ul>

                    <h3>6.2 LOKAL DATA PÅ DIN ENHET</h3>
                    <p>
                        Fakturor, kunder, kvitton och inställningar lagras lokalt på din enhet.
                        Du kan radera poster i appen eller ta bort appen för att rensa lokal data.
                    </p>

                    <h3>6.3 BEHANDLINGSTID</h3>
                    <p>
                        Vi behandlar din begäran inom <strong>30 dagar</strong>. Du får en
                        bekräftelse när raderingen är slutförd.
                    </p>

                    <h3>6.4 VAD RADERAS?</h3>
                    <ul>
                        <li>Ditt backendkonto som används för autentisering</li>
                        <li>Användningsloggar för skanning/e-post där det är möjligt</li>
                    </ul>

                    <div className="legal-highlight">
                        <h4>Observera</h4>
                        <p>
                            Stripe kan spara betalningsuppgifter enligt lag. Dessa uppgifter
                            kontrolleras av Stripe.
                        </p>
                    </div>

                    <h2 id="reactivation">7. ÅTERAKTIVERING</h2>
                    <p>
                        Du kan fortsätta använda appen när som helst. Om du har kopplat bort Stripe
                        kan du ansluta igen via Inställningar → Betalningar.
                    </p>

                    <h2 id="contact">8. KONTAKT</h2>
                    <p>
                        Har du problem med att avsluta ditt konto eller koppla bort Stripe? Kontakta oss:
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
