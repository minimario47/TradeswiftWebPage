import { useLanguage } from '../i18n/LanguageContext';
import { SEO } from '../components/SEO';
import { breadcrumbSchema } from '../seo/schemas';
import './Legal.css';

export function Refund() {
    const { language } = useLanguage();
    return (
        <>
            <SEO
                path="/aterbetalning"
                noindex
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'TradeSwift Pro', url: 'https://tradeswift.se/' },
                        { name: language === 'sv' ? 'Återbetalningspolicy' : 'Refund Policy', url: 'https://tradeswift.se/aterbetalning' },
                    ]),
                ]}
            />
            {language === 'sv' ? <RefundSv /> : <RefundEn />}
        </>
    );
}

function RefundEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Refund Policy</h1>
                    <p className="legal-meta">Last updated: February 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift PRO does not hold customer funds and is not the seller in your
                        transaction with your client.<br />
                        Stripe Connect handles card payments and refunds. You decide customer refunds,
                        and Stripe manages the payment rails and dispute process.<br />
                        App Store purchase refunds are handled by Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#relationship">Payment relationship</a></li>
                        <li><a href="#app-store">App Store purchases</a></li>
                        <li><a href="#stripe-payments">Customer refunds via Stripe</a></li>
                        <li><a href="#disputes">Disputes, chargebacks, and negative balance</a></li>
                        <li><a href="#platform-fees">TradeSwift platform fees</a></li>
                        <li><a href="#fee-refund">How to request fee review</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. OVERVIEW</h2>
                    <p>
                        This policy describes how refunds and payment disputes are handled for
                        TradeSwift PRO, including Stripe-powered customer payments and any
                        TradeSwift platform fees.
                    </p>

                    <h2 id="relationship">2. PAYMENT RELATIONSHIP</h2>
                    <p>
                        The underlying payment contract is between you and your client. TradeSwift
                        provides software and Stripe Connect integration but is not a party to the
                        sale of goods/services between you and your client.
                    </p>
                    <p>
                        This means you decide and communicate customer refund decisions, and you are
                        responsible for your commercial terms, invoicing, delivery, and customer support.
                    </p>

                    <h2 id="app-store">3. APP STORE PURCHASES (IF APPLICABLE)</h2>
                    <p>
                        If you purchase app subscription/access through Apple App Store, Apple
                        controls billing and refunds under Apple policies:
                    </p>
                    <ul>
                        <li><a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Apple makes the final refund decision for App Store charges</li>
                    </ul>

                    <h2 id="stripe-payments">4. CUSTOMER REFUNDS VIA STRIPE CONNECT</h2>
                    <p>
                        You are responsible for refunds to your customers for payments collected to
                        your Stripe connected account. Refunds can be initiated in TradeSwift tools
                        (if available) or directly in Stripe.
                    </p>
                    <p>
                        Stripe processes the refund to the original payment method. Timing depends
                        on card network and issuing bank.
                    </p>
                    <p>
                        Stripe resources:
                    </p>
                    <ul>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                        <li><a href="https://stripe.com/docs/refunds" target="_blank" rel="noopener noreferrer">Stripe Refund Docs</a></li>
                    </ul>

                    <h2 id="disputes">5. DISPUTES, CHARGEBACKS, AND NEGATIVE BALANCE</h2>
                    <p>
                        In case of a dispute/chargeback, Stripe may debit the disputed amount,
                        dispute fee, and related adjustments from your Stripe balance. You are
                        responsible for providing evidence within Stripe deadlines.
                    </p>
                    <p>
                        You are also responsible for any negative Stripe balance, reserves, losses,
                        and fraud-related debits that apply to your connected account under Stripe
                        rules.
                    </p>

                    <h2 id="platform-fees">6. TRADESWIFT PLATFORM FEES</h2>
                    <p>
                        Where a TradeSwift platform fee is charged, that fee is separate from your
                        customer's payment to you. Platform fees are generally non-refundable after
                        successful payment processing unless mandatory law requires otherwise.
                    </p>

                    <h2 id="fee-refund">7. HOW TO REQUEST PLATFORM FEE REVIEW</h2>
                    <p>
                        If you believe a platform fee was charged incorrectly, email
                        <a href="mailto:support@tradeswift.se"> support@tradeswift.se</a> with:
                    </p>
                    <ol>
                        <li>Your account email</li>
                        <li>Invoice ID and transaction date</li>
                        <li>Reason for the request</li>
                        <li>Any relevant supporting details</li>
                    </ol>
                    <p>
                        We will review and respond as soon as reasonably possible.
                    </p>

                    <h2 id="contact">8. CONTACT</h2>
                    <p>
                        Questions about this policy can be sent to{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

function RefundSv() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOKUMENT</p>
                    <h1>Återbetalningspolicy</h1>
                    <p className="legal-meta">Senast uppdaterad: Februari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift PRO håller inte kundmedel och är inte säljare i transaktionen
                        mellan dig och din kund.<br />
                        Stripe Connect hanterar kortbetalningar och återbetalningar. Du beslutar om
                        kundåterbetalningar, och Stripe hanterar betalflöden och tvistprocessen.<br />
                        App Store-återbetalningar hanteras av Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#overview">Översikt</a></li>
                        <li><a href="#relationship">Betalningsrelation</a></li>
                        <li><a href="#app-store">App Store-köp</a></li>
                        <li><a href="#stripe-payments">Kundåterbetalningar via Stripe</a></li>
                        <li><a href="#disputes">Tvister, chargebacks och negativt saldo</a></li>
                        <li><a href="#platform-fees">TradeSwift-plattformsavgifter</a></li>
                        <li><a href="#fee-refund">Hur du begär avgiftsgranskning</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. ÖVERSIKT</h2>
                    <p>
                        Denna policy beskriver hur återbetalningar och betalningstvister hanteras i
                        TradeSwift PRO, inklusive Stripe-baserade kundbetalningar och eventuella
                        TradeSwift-plattformsavgifter.
                    </p>

                    <h2 id="relationship">2. BETALNINGSRELATION</h2>
                    <p>
                        Det underliggande betalningsavtalet är mellan dig och din kund. TradeSwift
                        tillhandahåller mjukvara och Stripe Connect-integration men är inte part i
                        försäljningen av varor/tjänster mellan dig och din kund.
                    </p>
                    <p>
                        Det innebär att du beslutar om och kommunicerar kundåterbetalningar, och att
                        du ansvarar för kommersiella villkor, fakturering, leverans och kundsupport.
                    </p>

                    <h2 id="app-store">3. APP STORE-KÖP (OM TILLÄMPLIGT)</h2>
                    <p>
                        Om du köper appprenumeration/åtkomst via Apple App Store hanterar Apple
                        debitering och återbetalningar enligt Apples policy:
                    </p>
                    <ul>
                        <li><a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Apple fattar det slutliga beslutet om återbetalning av App Store-köp</li>
                    </ul>

                    <h2 id="stripe-payments">4. KUNDÅTERBETALNINGAR VIA STRIPE CONNECT</h2>
                    <p>
                        Du ansvarar för återbetalningar till kunder för betalningar som tagits emot
                        till ditt Stripe-konto. Återbetalningar kan initieras i TradeSwift-verktyg
                        (om tillgängligt) eller direkt i Stripe.
                    </p>
                    <p>
                        Stripe behandlar återbetalningen till ursprunglig betalmetod. Tidsåtgången
                        beror på kortnätverk och utgivande bank.
                    </p>
                    <p>Stripe-resurser:</p>
                    <ul>
                        <li><a href="https://stripe.com/connect-account/legal" target="_blank" rel="noopener noreferrer">Stripe Connected Account Agreement</a></li>
                        <li><a href="https://stripe.com/docs/refunds" target="_blank" rel="noopener noreferrer">Stripe Refund Docs</a></li>
                    </ul>

                    <h2 id="disputes">5. TVISTER, CHARGEBACKS OCH NEGATIVT SALDO</h2>
                    <p>
                        Vid tvist/chargeback kan Stripe debitera omtvistat belopp, tvistavgift och
                        relaterade justeringar från ditt Stripe-saldo. Du ansvarar för att lämna
                        bevisning inom Stripes tidsfrister.
                    </p>
                    <p>
                        Du ansvarar även för negativt Stripe-saldo, reserver, förluster och
                        bedrägerirelaterade debiteringar som gäller ditt anslutna konto enligt
                        Stripes regler.
                    </p>

                    <h2 id="platform-fees">6. TRADESWIFT-PLATTFORMSAVGIFTER</h2>
                    <p>
                        Om TradeSwift-plattformsavgift tas ut är den separat från kundens betalning
                        till dig. Plattformsavgifter återbetalas normalt inte efter lyckad
                        betalningshantering, om inte tvingande lag kräver annat.
                    </p>

                    <h2 id="fee-refund">7. HUR DU BEGÄR AVGIFTSGRANSKNING</h2>
                    <p>
                        Om du anser att en plattformsavgift debiterats fel, mejla
                        <a href="mailto:support@tradeswift.se"> support@tradeswift.se</a> med:
                    </p>
                    <ol>
                        <li>Ditt konto-mejl</li>
                        <li>Faktura-ID och transaktionsdatum</li>
                        <li>Orsak till begäran</li>
                        <li>Relevanta underlag</li>
                    </ol>
                    <p>
                        Vi granskar ärendet och återkommer så snart som rimligen möjligt.
                    </p>

                    <h2 id="contact">8. KONTAKT</h2>
                    <p>
                        Frågor om policyn skickas till{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
