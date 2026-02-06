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
            q: 'Can I work without internet?',
            a: 'Yes for core workflow. Creating and editing invoices, clients, and items works on-device. Internet is needed for connected features like AI receipt scanning, email sending/tracking, Stripe payments, and address lookup.'
        },
        {
            q: 'How do subscriptions and billing work?',
            a: 'TradeSwift PRO plans are managed through Apple App Store billing. You can restore purchases and manage or cancel subscriptions from TradeSwift PRO or iOS subscription settings.'
        },
        {
            q: 'How do client card payments work?',
            a: 'Card payments run through Stripe Connect. Your client pays via Stripe checkout and payouts go to your connected Stripe account. The service agreement remains between you and your client.'
        },
        {
            q: 'Can I send and track invoice emails?',
            a: 'Yes. You can send invoice emails directly in the app and view delivery/open status for sent emails.'
        },
        {
            q: 'What if I reach a monthly usage limit?',
            a: 'You can always check remaining usage in the subscription screen. When a limit is reached, the app shows options to add credits or upgrade your plan.'
        }
    ],
    sv: [
        {
            q: 'Var lagras min data?',
            a: 'TradeSwift PRO är local-first. Fakturor, kunder, artiklar och kvittodata ligger på din enhet. Om du aktiverar iCloud-synk lagras synkade kopior i ditt iCloud-konto hos Apple. Om du kopplar Stripe hanterar Stripe betalnings- och utbetalningsdata för dessa transaktioner.'
        },
        {
            q: 'Kan jag arbeta utan internet?',
            a: 'Ja för kärnflödet. Att skapa och redigera fakturor, kunder och artiklar fungerar lokalt på enheten. Internet krävs för anslutna funktioner som AI-kvittoskanning, e-postutskick/spårning, Stripe-betalningar och adressökning.'
        },
        {
            q: 'Hur fungerar prenumeration och debitering?',
            a: 'TradeSwift PRO-planer hanteras via Apple App Store-debitering. Du kan återställa köp samt hantera eller avsluta prenumeration i TradeSwift PRO eller i iOS prenumerationsinställningar.'
        },
        {
            q: 'Hur fungerar kunders kortbetalningar?',
            a: 'Kortbetalningar går via Stripe Connect. Din kund betalar via Stripe Checkout och utbetalningar går till ditt anslutna Stripe-konto. Själva tjänsteavtalet är mellan dig och din kund.'
        },
        {
            q: 'Kan jag skicka och spåra fakturamejl?',
            a: 'Ja. Du kan skicka fakturamejl direkt i appen och se leverans- och öppningsstatus för skickade mejl.'
        },
        {
            q: 'Vad händer om jag når en månadsgräns?',
            a: 'Du kan alltid se kvarvarande användning i prenumerationsvyn. När en gräns nås visar appen alternativ för att lägga till krediter eller uppgradera planen.'
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
            intro: 'Updated answers based on the current TradeSwift PRO app.'
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
            intro: 'Uppdaterade svar utifrån nuvarande funktioner i TradeSwift PRO.'
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
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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

                    <div className="contact-faq-list">
                        {faqItems.map((item, index) => {
                            const isOpen = openFaqIndex === index;
                            return (
                                <div key={item.q} className={`contact-faq-item ${isOpen ? 'open' : ''}`}>
                                    <button
                                        type="button"
                                        className="contact-faq-question"
                                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span>{item.q}</span>
                                        <span className="contact-faq-toggle">{isOpen ? '−' : '+'}</span>
                                    </button>
                                    {isOpen && (
                                        <div className="contact-faq-answer">
                                            <p>{item.a}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
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
