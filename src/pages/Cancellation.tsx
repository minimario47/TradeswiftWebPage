import { useLanguage } from '../i18n/LanguageContext';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import './Legal.css';

export function Cancellation() {
    const { language } = useLanguage();
    return (
        <>
            <SEO
                path="/avbestallning"
                noindex
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'TradeSwift Pro', url: 'https://tradeswift.se/' },
                        { name: language === 'sv' ? 'Avbeställningspolicy' : 'Cancellation Policy', url: 'https://tradeswift.se/avbestallning' },
                    ]),
                ]}
            />
            {language === 'sv' ? <CancellationSv /> : <CancellationEn />}
        </>
    );
}

function CancellationEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Cancellation Policy</h1>
                    <p className="legal-meta">Last updated: February 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        No lock-in: you can cancel recurring TradeSwift PRO subscriptions anytime in
                        app settings or Apple subscription settings.<br />
                        Stripe payments are still between you and your client, and you can disconnect
                        Stripe in-app to stop new card payments through TradeSwift PRO.<br />
                        Your core records stay on your device, and you can delete your data whenever
                        you want.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#app-subscriptions">App subscriptions and billing</a></li>
                        <li><a href="#how-to-cancel">How to cancel subscriptions</a></li>
                        <li><a href="#one-time">Lifetime and credits purchases</a></li>
                        <li><a href="#stripe">Stripe payments and disconnecting</a></li>
                        <li><a href="#after-cancel">What happens after cancellation</a></li>
                        <li><a href="#delete">Delete account and data</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. OVERVIEW</h2>
                    <p>
                        This policy explains how to cancel recurring subscriptions, how Stripe
                        payments are affected, and what happens to your data afterward.
                    </p>

                    <h2 id="app-subscriptions">2. APP SUBSCRIPTIONS AND BILLING</h2>
                    <p>
                        TradeSwift PRO subscriptions (for example monthly or yearly plans) are billed
                        by Apple when purchased through iOS. Apple handles billing dates, renewals,
                        and App Store refund decisions.
                    </p>
                    <ul>
                        <li><a href="https://support.apple.com/118428" target="_blank" rel="noopener noreferrer">Apple: How to cancel a subscription</a></li>
                        <li><a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com (App Store refund requests)</a></li>
                    </ul>

                    <h2 id="how-to-cancel">3. HOW TO CANCEL SUBSCRIPTIONS</h2>
                    <p>You can cancel in either of these ways:</p>
                    <ol>
                        <li>In TradeSwift PRO: open Subscription settings and tap <strong>Manage Subscription</strong></li>
                        <li>In iOS: <strong>Settings</strong> → your Apple ID → <strong>Subscriptions</strong> → <strong>TradeSwift PRO</strong> → <strong>Cancel Subscription</strong></li>
                    </ol>
                    <p>
                        After cancellation, access continues until the end of the already paid period.
                        There is no additional charge after that unless you subscribe again.
                    </p>

                    <h2 id="one-time">4. LIFETIME AND CREDITS PURCHASES</h2>
                    <p>
                        Lifetime access and credits packs are one-time purchases, not recurring
                        subscriptions, so there is nothing to cancel for renewal.
                    </p>

                    <h2 id="stripe">5. STRIPE PAYMENTS AND DISCONNECTING</h2>
                    <p>
                        Customer payments collected via Stripe Connect are between you and your
                        client. TradeSwift provides the software layer and does not become the seller
                        in your underlying customer contract.
                    </p>
                    <p>
                        If you want to stop new card payments through TradeSwift, disconnect Stripe
                        in app settings (Settings → Payments → Disconnect Stripe).
                    </p>
                    <p>
                        Disconnecting Stripe stops new payment links in TradeSwift, but existing
                        payment/refund/dispute obligations remain between you, your client, and
                        Stripe under Stripe's terms.
                    </p>

                    <h2 id="after-cancel">6. WHAT HAPPENS AFTER CANCELLATION</h2>
                    <ul>
                        <li><strong>Subscription:</strong> premium access stays active until your current paid period ends</li>
                        <li><strong>Data:</strong> your invoices, clients, and receipts remain on your device unless you delete them</li>
                        <li><strong>Stripe:</strong> card payments in TradeSwift stop after Stripe is disconnected</li>
                    </ul>

                    <h2 id="delete">7. DELETE ACCOUNT AND DATA</h2>
                    <p>
                        You can delete records inside the app whenever you want, and you can remove
                        the app to remove local data from your device.
                    </p>
                    <p>
                        To request account-related deletion help, contact{' '}
                        <a href="mailto:support@tradeswift.se?subject=Account%20deletion%20request">
                            support@tradeswift.se
                        </a>.
                    </p>

                    <h2 id="contact">8. CONTACT</h2>
                    <p>
                        Need help with cancellation or Stripe disconnect? Email{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
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
                    <p className="legal-meta">Senast uppdaterad: Februari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        Ingen bindningstid: du kan när som helst avsluta löpande TradeSwift PRO-
                        prenumerationer via appens inställningar eller Apples prenumerations-
                        inställningar.<br />
                        Stripe-betalningar är fortsatt ett avtal mellan dig och din kund; du kan
                        koppla bort Stripe i appen för att stoppa nya kortbetalningar via TradeSwift PRO.<br />
                        Din kärndata ligger kvar på enheten, och du kan radera den när du vill.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#overview">Översikt</a></li>
                        <li><a href="#app-subscriptions">Appprenumerationer och debitering</a></li>
                        <li><a href="#how-to-cancel">Så avslutar du prenumeration</a></li>
                        <li><a href="#one-time">Livstid och kreditpaket</a></li>
                        <li><a href="#stripe">Stripe-betalningar och bortkoppling</a></li>
                        <li><a href="#after-cancel">Vad händer efter avbeställning</a></li>
                        <li><a href="#delete">Radera konto och data</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. ÖVERSIKT</h2>
                    <p>
                        Denna policy förklarar hur du avslutar löpande prenumerationer, hur Stripe-
                        betalningar påverkas och vad som händer med dina uppgifter efteråt.
                    </p>

                    <h2 id="app-subscriptions">2. APPPRENUMERATIONER OCH DEBITERING</h2>
                    <p>
                        TradeSwift PRO-prenumerationer (till exempel månads- eller årsplaner)
                        debiteras av Apple när köpet görs i iOS. Apple hanterar faktureringsdatum,
                        förnyelser och beslut om App Store-återbetalning.
                    </p>
                    <ul>
                        <li><a href="https://support.apple.com/118428" target="_blank" rel="noopener noreferrer">Apple: How to cancel a subscription</a></li>
                        <li><a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com (begäran om App Store-återbetalning)</a></li>
                    </ul>

                    <h2 id="how-to-cancel">3. SÅ AVSLUTAR DU PRENUMERATION</h2>
                    <p>Du kan avsluta på något av följande sätt:</p>
                    <ol>
                        <li>I TradeSwift PRO: öppna prenumerationsinställningar och tryck <strong>Manage Subscription</strong></li>
                        <li>I iOS: <strong>Inställningar</strong> → ditt Apple-ID → <strong>Prenumerationer</strong> → <strong>TradeSwift PRO</strong> → <strong>Avsluta prenumeration</strong></li>
                    </ol>
                    <p>
                        Efter uppsägning fortsätter åtkomsten till slutet av redan betald period.
                        Därefter sker ingen ny debitering om du inte startar prenumerationen igen.
                    </p>

                    <h2 id="one-time">4. LIVSTID OCH KREDITPAKET</h2>
                    <p>
                        Livstidsåtkomst och kreditpaket är engångsköp, inte löpande prenumerationer,
                        så det finns ingen automatisk förnyelse att avsluta.
                    </p>

                    <h2 id="stripe">5. STRIPE-BETALNINGAR OCH BORTKOPPLING</h2>
                    <p>
                        Kundbetalningar via Stripe Connect är ett avtal mellan dig och din kund.
                        TradeSwift tillhandahåller mjukvaran men blir inte säljare i den
                        underliggande kundaffären.
                    </p>
                    <p>
                        Om du vill stoppa nya kortbetalningar via TradeSwift kan du koppla bort
                        Stripe i appens inställningar (Inställningar → Betalningar → Koppla bort Stripe).
                    </p>
                    <p>
                        När Stripe kopplas bort stoppas nya betalningslänkar i TradeSwift, men redan
                        uppkomna skyldigheter kring betalning/återbetalning/tvist ligger kvar mellan
                        dig, din kund och Stripe enligt Stripes villkor.
                    </p>

                    <h2 id="after-cancel">6. VAD HÄNDER EFTER AVBESTÄLLNING</h2>
                    <ul>
                        <li><strong>Prenumeration:</strong> premiumåtkomst är aktiv till slutet av nuvarande betalperiod</li>
                        <li><strong>Data:</strong> dina fakturor, kunder och kvitton ligger kvar lokalt tills du raderar dem</li>
                        <li><strong>Stripe:</strong> kortbetalningar i TradeSwift upphör efter att Stripe kopplats bort</li>
                    </ul>

                    <h2 id="delete">7. RADERA KONTO OCH DATA</h2>
                    <p>
                        Du kan radera poster i appen när du vill, och du kan ta bort appen för att
                        radera lokal data från enheten.
                    </p>
                    <p>
                        För hjälp med kontorelaterad radering, kontakta{' '}
                        <a href="mailto:support@tradeswift.se?subject=Beg%C3%A4ran%20om%20kontoradering">
                            support@tradeswift.se
                        </a>.
                    </p>

                    <h2 id="contact">8. KONTAKT</h2>
                    <p>
                        Behöver du hjälp med avbeställning eller Stripe-bortkoppling? Mejla{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
