import { useLanguage } from '../i18n/LanguageContext';
import './Legal.css';

export function Refund() {
    const { language } = useLanguage();
    return language === 'sv' ? <RefundSv /> : <RefundEn />;
}

function RefundEn() {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <div className="legal-header">
                    <p className="section-label">DOCUMENT</p>
                    <h1>Refund Policy</h1>
                    <p className="legal-meta">Last updated: January 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift never handles card details. Stripe Connect processes customer payments
                        and refunds.<br />
                        Any TradeSwift platform fees (if charged) are separate and usually non-refundable.
                        App Store refunds are handled by Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Contents</h4>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#app-store">App Store purchases</a></li>
                        <li><a href="#platform-fees">Platform fees</a></li>
                        <li><a href="#stripe-payments">Customer payments via Stripe</a></li>
                        <li><a href="#disputes">Disputes and chargebacks</a></li>
                        <li><a href="#fee-refund">Platform fee refund requests</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. OVERVIEW</h2>
                    <p>
                        This policy describes how TradeSwift AB handles refunds and disputes related
                        to platform fees, any App Store purchases, and customer payments processed via
                        Stripe Connect.
                    </p>

                    <h2 id="app-store">2. APP STORE PURCHASES (IF APPLICABLE)</h2>
                    <p>
                        If you purchase app access or a subscription via Apple App Store, refunds are
                        handled according to Apple’s policy. For refunds:
                    </p>
                    <ul>
                        <li>Contact Apple support via <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Apple makes the final decision on refunds</li>
                        <li>Refunds can be approved for technical issues or incorrect charges</li>
                    </ul>

                    <h2 id="platform-fees">3. PLATFORM FEES</h2>
                    <p>
                        TradeSwift may charge a platform fee per transaction. This fee is normally
                        not refunded once a payment has been completed. If a customer payment is
                        refunded, TradeSwift may, at its discretion, refund all or part of its fee.
                    </p>

                    <h2 id="stripe-payments">4. CUSTOMER PAYMENTS VIA STRIPE CONNECT</h2>
                    <p>
                        You are responsible for refunds to your customers. Refunds are initiated via
                        the TradeSwift app or directly in Stripe and are handled by Stripe. When a
                        refund is issued, it can take a few banking days before the amount is visible
                        to the customer, depending on card network and bank.
                    </p>

                    <h2 id="disputes">5. DISPUTES AND CHARGEBACKS</h2>
                    <p>
                        In a dispute or chargeback, Stripe usually debits the disputed amount and a
                        dispute fee from your Stripe balance. You are responsible for submitting
                        relevant evidence within the allowed timeframe. Repeated disputes may lead
                        to restrictions or additional risk measures.
                    </p>

                    <h2 id="fee-refund">6. HOW TO REQUEST A PLATFORM FEE REFUND</h2>
                    <p>To request a refund of a platform fee:</p>
                    <ol>
                        <li>Email <a href="mailto:support@tradeswift.se">support@tradeswift.se</a></li>
                        <li>Include your account name and email address</li>
                        <li>Describe the reason for your request</li>
                        <li>Include relevant transaction information if possible</li>
                    </ol>

                    <h2 id="contact">7. CONTACT</h2>
                    <p>
                        For questions about this policy, contact us at{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> or
                        call <a href="tel:+46812345678">08-123 456 78</a> (weekdays 09:00-17:00).
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
                    <p className="legal-meta">Senast uppdaterad: Januari 2026</p>
                </div>

                <div className="legal-divider" />

                <div className="legal-info-box legal-tldr">
                    <h4>TL;DR</h4>
                    <p>
                        TradeSwift hanterar aldrig kortuppgifter. Stripe Connect behandlar kundbetalningar
                        och återbetalningar.<br />
                        Eventuella TradeSwift-plattformsavgifter är separata och återbetalas normalt inte.
                        App Store-återbetalningar hanteras av Apple.
                    </p>
                </div>

                <div className="legal-toc">
                    <h4>Innehåll</h4>
                    <ul>
                        <li><a href="#overview">Översikt</a></li>
                        <li><a href="#app-store">App Store-köp</a></li>
                        <li><a href="#platform-fees">Plattformsavgifter</a></li>
                        <li><a href="#stripe-payments">Kundbetalningar via Stripe</a></li>
                        <li><a href="#disputes">Tvister och chargebacks</a></li>
                        <li><a href="#fee-refund">Begära återbetalning av avgift</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                    </ul>
                </div>

                <div className="legal-content">
                    <h2 id="overview">1. ÖVERSIKT</h2>
                    <p>
                        Denna policy beskriver hur TradeSwift AB hanterar återbetalningar och
                        tvister kopplade till plattformsavgifter, eventuella App Store-köp och
                        kundbetalningar som sker via Stripe Connect.
                    </p>

                    <h2 id="app-store">2. APP STORE-KÖP (OM TILLÄMPLIGT)</h2>
                    <p>
                        Om du köper appåtkomst eller prenumeration via Apple App Store hanteras
                        återbetalningar enligt Apples policy. För återbetalning:
                    </p>
                    <ul>
                        <li>Kontakta Apples support via <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a></li>
                        <li>Apple fattar det slutgiltiga beslutet om återbetalning</li>
                        <li>Återbetalningar kan godkännas vid tekniska problem eller felaktiga debiteringar</li>
                    </ul>

                    <h2 id="platform-fees">3. PLATFORMSAVGIFTER</h2>
                    <p>
                        TradeSwift kan ta ut en plattformsavgift per transaktion. Denna avgift
                        återbetalas normalt inte när en betalning har genomförts. Om en
                        kundbetalning återbetalas kan TradeSwift, efter eget beslut, helt eller
                        delvis återbetala sin avgift.
                    </p>

                    <h2 id="stripe-payments">4. KUNDBETALNINGAR VIA STRIPE CONNECT</h2>
                    <p>
                        Du är ansvarig för återbetalningar till dina kunder. Återbetalningar
                        initieras via TradeSwift-appen eller direkt i Stripe och hanteras av Stripe.
                        När en återbetalning görs kan det ta några bankdagar innan beloppet syns
                        hos kunden, beroende på kortnätverk och bank.
                    </p>

                    <h2 id="disputes">5. TVISTER OCH CHARGEBACKS</h2>
                    <p>
                        Vid en tvist eller chargeback drar Stripe vanligtvis det omtvistade
                        beloppet och en tvistavgift från ditt Stripe-saldo. Du ansvarar för att
                        lämna in relevant bevisning inom angiven tid. Upprepade tvister kan leda
                        till begränsningar eller extra riskåtgärder.
                    </p>

                    <h2 id="fee-refund">6. HUR DU BEGÄR ÅTERBETALNING AV PLATTFORMSAVGIFT</h2>
                    <p>För att begära återbetalning av en plattformsavgift:</p>
                    <ol>
                        <li>Skicka e-post till <a href="mailto:support@tradeswift.se">support@tradeswift.se</a></li>
                        <li>Ange ditt kontonamn och e-postadress</li>
                        <li>Beskriv anledningen till din begäran</li>
                        <li>Inkludera relevant transaktionsinformation om möjligt</li>
                    </ol>

                    <h2 id="contact">7. KONTAKT</h2>
                    <p>
                        Vid frågor om denna policy, kontakta oss på{' '}
                        <a href="mailto:support@tradeswift.se">support@tradeswift.se</a> eller
                        ring <a href="tel:+46812345678">08-123 456 78</a> (vardagar 09:00-17:00).
                    </p>
                </div>
            </div>
        </div>
    );
}
