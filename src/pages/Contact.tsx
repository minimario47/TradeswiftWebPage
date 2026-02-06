import { useState, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

const API_BASE = 'https://tradeswift-backend.xaco47.workers.dev';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const FAQ_ITEMS = {
    en: [
        {
            q: 'Where is my data stored?',
            a: 'TradeSwift PRO is local-first. Invoices, clients, items, and receipt records stay on your device. If you enable iCloud sync, Apple stores synced copies in your iCloud account. If you connect Stripe, Stripe processes payment and payout data for those transactions.'
        },
        {
            q: 'Does TradeSwift PRO work offline?',
            a: 'Yes for core workflow. You can create and edit invoices, clients, and items directly on your device without internet.'
        },
        {
            q: 'Which features require internet?',
            a: 'Internet is required for connected features such as AI receipt scanning, sending/tracking invoice emails, Stripe card payments, address lookup, and iCloud sync.'
        },
        {
            q: 'How does iCloud sync work?',
            a: 'If iCloud is enabled on your device, you can sync data across devices in TradeSwift PRO settings. You can sync now, and you can choose to get data from iCloud or save your current device data to iCloud.'
        },
        {
            q: 'I changed iPhone. How do I keep my data?',
            a: 'Use iCloud sync or an iOS device backup before switching. That is the safest way to bring your TradeSwift PRO data to your new phone.'
        },
        {
            q: 'How do subscriptions and billing work?',
            a: 'TradeSwift PRO subscriptions are billed and managed by Apple App Store. You can manage, cancel, or restore purchases from iOS subscription settings or through the app’s subscription management flow.'
        },
        {
            q: 'What plans are available?',
            a: 'The app supports a free tier plus TradeSwift PRO options like monthly, yearly, and lifetime plans. Credits packs may also be offered inside the subscription screen.'
        },
        {
            q: 'Where can I check email and scan usage?',
            a: 'Open the subscription screen to see monthly usage meters for invoice emails and receipt scans, including remaining quota and reset timing.'
        },
        {
            q: 'What happens if I hit a monthly usage limit?',
            a: 'The app stops that specific action until reset or until you add credits/upgrade. In-app prompts guide you to the available options.'
        },
        {
            q: 'How do client card payments work?',
            a: 'Card payments run through Stripe Connect. Your client pays in Stripe Checkout and payouts go to your connected Stripe account. The service relationship remains between you and your client.'
        },
        {
            q: 'Can I send and track invoice emails?',
            a: 'Yes. You can send invoice emails from the app and track delivery events such as sent, delivered, opened, and clicked.'
        },
        {
            q: 'Can I export or share invoices as PDF?',
            a: 'Yes. TradeSwift PRO can generate invoice PDFs so you can share or print them directly from your device.'
        },
        {
            q: 'Does TradeSwift PRO show ads or sell data?',
            a: 'No third-party ads and no sale of your personal data.'
        },
        {
            q: 'How do I contact support?',
            a: 'Use the support form on this page or email support@tradeswift.se.'
        }
    ],
    sv: [
        {
            q: 'Var lagras min data?',
            a: 'TradeSwift PRO är local-first. Fakturor, kunder, artiklar och kvittodata ligger på din enhet. Om du aktiverar iCloud-synk lagras synkade kopior i ditt iCloud-konto hos Apple. Om du kopplar Stripe hanterar Stripe betalnings- och utbetalningsdata för dessa transaktioner.'
        },
        {
            q: 'Fungerar TradeSwift PRO offline?',
            a: 'Ja för kärnflödet. Du kan skapa och redigera fakturor, kunder och artiklar direkt på enheten utan internet.'
        },
        {
            q: 'Vilka funktioner kräver internet?',
            a: 'Internet krävs för anslutna funktioner som AI-kvittoskanning, e-postutskick och spårning, Stripe-kortbetalningar, adressökning och iCloud-synk.'
        },
        {
            q: 'Hur fungerar iCloud-synk?',
            a: 'Om iCloud är aktiverat på enheten kan du synka mellan enheter i TradeSwift PRO:s inställningar. Du kan synka direkt och även välja att hämta data från iCloud eller spara denna enhets data till iCloud.'
        },
        {
            q: 'Jag har bytt iPhone. Hur behåller jag min data?',
            a: 'Använd iCloud-synk eller en iOS-enhetsbackup innan du byter telefon. Det är säkraste sättet att flytta TradeSwift PRO-data till ny enhet.'
        },
        {
            q: 'Hur fungerar prenumeration och debitering?',
            a: 'TradeSwift PRO-prenumerationer hanteras och debiteras av Apple App Store. Du kan hantera, avsluta och återställa köp via iOS prenumerationsinställningar eller appens prenumerationsflöde.'
        },
        {
            q: 'Vilka planer finns?',
            a: 'Appen har en gratisnivå samt TradeSwift PRO-alternativ som månads-, års- och livstidsplan. Kreditpaket kan också erbjudas i prenumerationsvyn.'
        },
        {
            q: 'Var ser jag användning för mejl och skanningar?',
            a: 'Öppna prenumerationsvyn för att se månatliga usage-mätare för fakturamejl och kvittoskanningar, inklusive kvarvarande kvot och reset-tid.'
        },
        {
            q: 'Vad händer om jag når en månadsgräns?',
            a: 'Appen stoppar den funktionen tills reset eller tills du lägger till krediter/uppgraderar. Du får tydliga alternativ direkt i appen.'
        },
        {
            q: 'Hur fungerar kunders kortbetalningar?',
            a: 'Kortbetalningar går via Stripe Connect. Din kund betalar i Stripe Checkout och utbetalningar går till ditt anslutna Stripe-konto. Själva kundrelationen är mellan dig och kunden.'
        },
        {
            q: 'Kan jag skicka och spåra fakturamejl?',
            a: 'Ja. Du kan skicka fakturamejl från appen och spåra status som skickad, levererad, öppnad och klickad.'
        },
        {
            q: 'Kan jag exportera eller dela fakturor som PDF?',
            a: 'Ja. TradeSwift PRO kan skapa faktura-PDF så du kan dela eller skriva ut direkt från enheten.'
        },
        {
            q: 'Visar TradeSwift PRO annonser eller säljer data?',
            a: 'Nej, inga tredjepartsannonser och ingen försäljning av personuppgifter.'
        },
        {
            q: 'Hur kontaktar jag support?',
            a: 'Använd supportformuläret på sidan eller mejla support@tradeswift.se.'
        }
    ]
};

const CONTENT = {
    en: {
        sectionLabel: 'SUPPORT',
        title: 'Customer Support',
        intro: 'Have questions or need help? You can contact me directly.',
        faq: {
            label: 'QUICK ANSWERS',
            title: 'Most asked questions',
            intro: 'Updated answers based on the current TradeSwift PRO app.',
            scrollHint: 'Scroll inside this panel to read all questions.'
        },
        cards: {
            email: {
                label: 'Email',
                description: 'Write to me for support, billing, or technical questions.'
            },
            creator: {
                label: 'Developer',
                description: 'Mikail Yenigün'
            },
            response: {
                label: 'Response time',
                description: 'Usually within 1–2 business days'
            }
        },
        form: {
            title: 'SEND A MESSAGE',
            success: "Thanks for your message! I'll get back to you soon.",
            error: 'Something went wrong. Please try again.',
            name: 'Name',
            email: 'Email',
            subject: 'Subject',
            message: 'Message',
            submit: 'SEND MESSAGE',
            submitting: 'SENDING...'
        }
    },
    sv: {
        sectionLabel: 'SUPPORT',
        title: 'Kundtjänst',
        intro: 'Har du frågor eller behöver hjälp? Du kan kontakta mig direkt.',
        faq: {
            label: 'SNABBA SVAR',
            title: 'Vanliga frågor',
            intro: 'Uppdaterade svar utifrån nuvarande funktioner i TradeSwift PRO.',
            scrollHint: 'Skrolla i rutan för att läsa alla frågor.'
        },
        cards: {
            email: {
                label: 'E-post',
                description: 'Skriv till mig för support, fakturafrågor eller tekniska frågor.'
            },
            creator: {
                label: 'Utvecklare',
                description: 'Mikail Yenigün'
            },
            response: {
                label: 'Svarstid',
                description: 'Vanligtvis inom 1–2 arbetsdagar'
            }
        },
        form: {
            title: 'SKICKA ETT MEDDELANDE',
            success: 'Tack för ditt meddelande! Jag återkommer så snart som möjligt.',
            error: 'Något gick fel. Försök igen.',
            name: 'Namn',
            email: 'E-post',
            subject: 'Ärende',
            message: 'Meddelande',
            submit: 'SKICKA MEDDELANDE',
            submitting: 'SKICKAR...'
        }
    }
};

export function Contact() {
    const { language } = useLanguage();
    const content = CONTENT[language];
    const faqItems = FAQ_ITEMS[language];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch(`${API_BASE}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (err: unknown) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-header">
                    <p className="section-label">{content.sectionLabel}</p>
                    <h1>{content.title}</h1>
                    <p>{content.intro}</p>
                </div>

                <div className="contact-divider" />

                <section className="contact-faq-section">
                    <div className="contact-faq-header">
                        <p className="section-label">{content.faq.label}</p>
                        <h2>{content.faq.title}</h2>
                        <p>{content.faq.intro}</p>
                    </div>

                    <div className="contact-faq-scroll">
                        <div className="contact-faq-list">
                            {faqItems.map((item) => (
                                <article key={item.q} className="contact-faq-item">
                                    <h3 className="contact-faq-question">{item.q}</h3>
                                    <div className="contact-faq-answer">
                                        <p>{item.a}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <p className="contact-faq-scroll-hint">{content.faq.scrollHint}</p>
                </section>

                <div className="contact-divider contact-divider-thin" />

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.email.label}</div>
                            <p>{content.cards.email.description}</p>
                            <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.creator.label}</div>
                            <p>{content.cards.creator.description}</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.response.label}</div>
                            <p>{content.cards.response.description}</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>{content.form.title}</h3>

                            {status === 'success' && (
                                <div className="form-success">
                                    {content.form.success}
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-error">
                                    {errorMessage || content.form.error}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">{content.form.name}</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{content.form.email}</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">{content.form.subject}</label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">{content.form.message}</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    disabled={status === 'submitting'}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? content.form.submitting : content.form.submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
