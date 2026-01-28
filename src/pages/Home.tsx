import { useEffect, useState, useRef, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { FeatureStack } from '../components/FeatureReel';
import './Home.css';

const FAQ_ITEMS = {
    en: [
        {
            q: 'Are my invoices compliant for tax reporting?',
            a: 'Yes. Invoices include required fields like company details, VAT/tax info, payment terms, and invoice number.'
        },
        {
            q: 'Does it work without internet?',
            a: 'Yes for core invoicing. Your data is stored on your device, so you can create invoices offline. Internet is required for receipt scanning (AI), Stripe payments, address lookup, and sending emails.'
        },
        {
            q: 'What happens if I change phones?',
            a: 'Your data lives on the device. There is no account-based cloud sync right now, so use an iOS device backup or export PDFs before switching.'
        },
        {
            q: 'How secure is it?',
            a: 'Stripe handles card payments. Data you send to our services uses TLS, and most data stays on your device. We never sell your data.'
        },
        {
            q: 'Can I export my invoices?',
            a: 'Yes. Export invoices as PDF for accounting or send directly by email.'
        }
    ],
    sv: [
        {
            q: 'Är mina fakturor giltiga för Skatteverket?',
            a: 'Ja. Fakturorna följer svensk lag och innehåller alla obligatoriska uppgifter: organisationsnummer, momsredovisning, betalningsvillkor och fakturanummer.'
        },
        {
            q: 'Fungerar det utan internet?',
            a: 'Ja, för själva faktureringen. Din data lagras på enheten, så du kan skapa fakturor offline. Internet krävs för kvittoskanning (AI), Stripe-betalningar, adressökning och e-postutskick.'
        },
        {
            q: 'Vad händer om jag byter telefon?',
            a: 'Din data ligger på enheten. Det finns ingen kontobaserad molnsynk just nu, så använd iOS-enhetsbackup eller exportera PDF:er innan du byter.'
        },
        {
            q: 'Hur säkert är det?',
            a: 'Stripe hanterar kortbetalningar. Data som skickas till våra tjänster går via TLS och det mesta ligger på din enhet. Vi säljer aldrig dina uppgifter.'
        },
        {
            q: 'Kan jag exportera mina fakturor?',
            a: 'Ja. Exportera fakturor som PDF för bokföring eller skicka direkt via e-post.'
        }
    ]
};

const CONTENT = {
    en: {
        hero: {
            appName: 'TRADESWIFT PRO',
            label: 'Welcome back,',
            titleLine1: 'Work smarter.',
            titleLine2: 'Get paid faster.',
            subtitle:
                'Create professional invoices, scan receipts, and manage payments — all in an app built for hands-on professionals.',
            primaryCta: 'DOWNLOAD FOR IOS',
            secondaryCta: 'SEE FEATURES'
        },
        phone: {
            label: 'TRADESWIFT PRO',
            greeting: 'Welcome back,',
            company: 'YOUR COMPANY LTD',
            outstanding: 'OUTSTANDING',
            overdue: 'OVERDUE',
            actions: ['New invoice', 'Scan receipt', 'Start job']
        },
        problem: {
            stat: '15 MIN',
            label: 'THE PROBLEM',
            title: 'Each invoice takes 15 minutes',
            description:
                'You should be out working, not stuck in paperwork. Every hour at the desk is an hour you are not billing.'
        },
        trust: [
            { label: 'STRIPE', description: 'Secure payments' },
            { label: 'GDPR', description: 'Data protection' },
            { label: 'GLOBAL', description: 'Built for pros' }
        ],
        faq: {
            label: 'COMMON QUESTIONS',
            title: 'Quick answers'
        },
        newsletter: {
            label: 'STAY UPDATED',
            title: 'Tips for smarter invoicing',
            description: 'Practical advice on deductions, accounting, and working more efficiently. No spam.',
            success: "THANKS. YOU'RE IN.",
            placeholder: 'Your email address',
            button: 'SUBSCRIBE'
        },
        cta: {
            title: 'Ready to stop chasing payments?',
            description: 'Download for free. Create your first invoice in under a minute.',
            button: 'GET STARTED FREE'
        }
    },
    sv: {
        hero: {
            appName: 'TRADESWIFT PRO',
            label: 'Välkommen tillbaka,',
            titleLine1: 'Arbeta smartare.',
            titleLine2: 'Få betalt snabbare.',
            subtitle:
                'Skapa professionella fakturor, skanna kvitton och hantera betalningar – allt i en app byggd för dig som arbetar med händerna.',
            primaryCta: 'LADDA NER FÖR IOS',
            secondaryCta: 'SE FUNKTIONER'
        },
        phone: {
            label: 'TRADESWIFT PRO',
            greeting: 'Välkommen tillbaka,',
            company: 'DITT FÖRETAG AB',
            outstanding: 'UTESTÅENDE',
            overdue: 'FÖRFALLET',
            actions: ['Ny faktura', 'Skanna kvitto', 'Starta jobb']
        },
        problem: {
            stat: '15 MIN',
            label: 'PROBLEMET',
            title: 'Varje faktura tar 15 minuter',
            description:
                'Du borde vara ute och jobba. Inte sitta med pappersarbete. Varje timme framför datorn är en timme du inte fakturerar.'
        },
        trust: [
            { label: 'STRIPE', description: 'Säker betalning' },
            { label: 'GDPR', description: 'Dataskydd' },
            { label: 'SVENSKT', description: 'Utvecklat i Sverige' }
        ],
        faq: {
            label: 'VANLIGA FRÅGOR',
            title: 'Snabba svar'
        },
        newsletter: {
            label: 'HÅLL DIG UPPDATERAD',
            title: 'Tips för smartare fakturering',
            description: 'Praktiska råd om ROT-avdrag, bokföring och effektivare arbete. Inga spam.',
            success: 'TACK. DU ÄR TILLAGD.',
            placeholder: 'Din e-postadress',
            button: 'PRENUMERERA'
        },
        cta: {
            title: 'Redo att sluta jaga betalningar?',
            description: 'Ladda ner gratis. Skapa din första faktura på under en minut.',
            button: 'KOM IGÅNG GRATIS'
        }
    }
};

export function Home() {
    const { language } = useLanguage();
    const content = CONTENT[language];
    const faqItems = FAQ_ITEMS[language];

    const [outstanding] = useState(36450);
    const [overdue] = useState(15200);


    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
    const [email, setEmail] = useState('');
    const [emailStatus, setEmailStatus] = useState<'idle' | 'success'>('idle');

    const revealRefs = useRef<(HTMLDivElement | null)[]>([]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const appCurrency = language === 'sv'
        ? { code: 'SEK', symbol: 'kr', locale: 'sv-SE' }
        : { code: 'USD', symbol: '$', locale: 'en-US' };

    const formatMoney = (amount: number) => {
        const formatted = amount.toLocaleString(appCurrency.locale);
        return appCurrency.symbol === '$' ? `${appCurrency.symbol}${formatted}` : `${formatted} ${appCurrency.symbol}`;
    };

    const handleEmailSubmit = (e: FormEvent) => {
        e.preventDefault();
        setEmailStatus('success');
        setEmail('');
    };

    const setRevealRef = (index: number) => (el: HTMLDivElement | null) => {
        revealRefs.current[index] = el;
    };
    return (
        <>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="hero-app-name">{content.hero.appName}</span>
                        <span className="hero-label">{content.hero.label}</span>
                        <h1 className="hero-title">
                            {content.hero.titleLine1}<br />
                            {content.hero.titleLine2}
                        </h1>
                        <div className="hero-divider" />
                        <p className="hero-subtitle">{content.hero.subtitle}</p>
                        <div className="hero-actions">
                            <a
                                href="https://apps.apple.com"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {content.hero.primaryCta}
                            </a>
                            <a href="#features" className="btn btn-secondary">
                                {content.hero.secondaryCta}
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-phone">
                            <div className="hero-phone-header">
                                <div className="hero-phone-label">{content.phone.label}</div>
                                <div className="hero-phone-greeting">{content.phone.greeting}</div>
                                <div className="hero-phone-company">{content.phone.company}</div>
                            </div>
                            <div className="hero-phone-content">
                                <div className="money-section">
                                    <div className="money-label">{content.phone.outstanding}</div>
                                    <div className="money-card">
                                        <div className="money-amount">{formatMoney(outstanding)}</div>
                                    </div>
                                </div>
                                <div className="money-section-dark">
                                    <div className="money-label">{content.phone.overdue}</div>
                                    <div className="money-card">
                                        <div className="money-amount">{formatMoney(overdue)}</div>
                                    </div>
                                </div>
                                <div className="quick-actions">
                                    {content.phone.actions.map((action) => (
                                        <div className="quick-action" key={action}>
                                            <span className="quick-action-text">{action}</span>
                                            <span className="quick-action-arrow">›</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="problem-section">
                <div className="problem-container" ref={setRevealRef(0)}>
                    <div className="problem-stat">{content.problem.stat}</div>
                    <div className="problem-text">
                        <p className="section-label">{content.problem.label}</p>
                        <h2>{content.problem.title}</h2>
                        <p>{content.problem.description}</p>
                    </div>
                </div>
            </section>

            <FeatureStack />

            <section className="trust-section">
                <div className="trust-container" ref={setRevealRef(4)}>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="6" width="20" height="4" fill="currentColor" />
                            <rect x="2" y="14" width="20" height="4" fill="currentColor" />
                        </svg>
                        <span>{content.trust[0].label}</span>
                        <p>{content.trust[0].description}</p>
                    </div>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" />
                            <rect x="9" y="9" width="6" height="6" fill="currentColor" />
                        </svg>
                        <span>{content.trust[1].label}</span>
                        <p>{content.trust[1].description}</p>
                    </div>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                            <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        <span>{content.trust[2].label}</span>
                        <p>{content.trust[2].description}</p>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-container">
                    <div className="faq-header" ref={setRevealRef(5)}>
                        <p className="section-label">{content.faq.label}</p>
                        <h2>{content.faq.title}</h2>
                    </div>
                    <div className="faq-list">
                        {faqItems.map((item, index) => (
                            <div
                                key={item.q}
                                className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            >
                                <div className="faq-question">
                                    <span>{item.q}</span>
                                    <span className="faq-toggle">{openFaqIndex === index ? '−' : '+'}</span>
                                </div>
                                {openFaqIndex === index && (
                                    <div className="faq-answer">{item.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="newsletter-section">
                <div className="newsletter-container" ref={setRevealRef(6)}>
                    <div className="newsletter-content">
                        <p className="section-label">{content.newsletter.label}</p>
                        <h2>{content.newsletter.title}</h2>
                        <p>{content.newsletter.description}</p>
                    </div>
                    {emailStatus === 'success' ? (
                        <div className="newsletter-success">
                            {content.newsletter.success}
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleEmailSubmit}>
                            <input
                                type="email"
                                placeholder={content.newsletter.placeholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                {content.newsletter.button}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-container">
                    <h2>{content.cta.title}</h2>
                    <p>{content.cta.description}</p>
                    <a
                        href="https://apps.apple.com"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {content.cta.button}
                    </a>
                </div>
            </section>
        </>
    );
}
