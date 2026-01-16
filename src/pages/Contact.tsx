import { useState, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

const API_BASE = 'https://tradeswift-backend.xaco47.workers.dev';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const CONTENT = {
    en: {
        sectionLabel: 'SUPPORT',
        title: 'Customer Support',
        intro: 'Have questions or need help? Our team is here to support you.',
        cards: {
            email: {
                label: 'Email',
                description: 'Write to us for general questions or support requests.'
            },
            phone: {
                label: 'Phone',
                description: 'Available weekdays 09:00 – 17:00'
            },
            address: {
                label: 'Address'
            }
        },
        form: {
            title: 'SEND A MESSAGE',
            success: "Thanks for your message! We'll get back to you soon.",
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
        intro: 'Har du frågor eller behöver hjälp? Vårt team finns här för att stötta dig.',
        cards: {
            email: {
                label: 'E-post',
                description: 'Skriv till oss för allmänna frågor eller supportärenden.'
            },
            phone: {
                label: 'Telefon',
                description: 'Tillgänglig vardagar 09:00 – 17:00'
            },
            address: {
                label: 'Adress'
            }
        },
        form: {
            title: 'SKICKA ETT MEDDELANDE',
            success: 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.',
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

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.email.label}</div>
                            <p>{content.cards.email.description}</p>
                            <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.phone.label}</div>
                            <p>{content.cards.phone.description}</p>
                            <a href="tel:+46812345678">08-123 456 78</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">{content.cards.address.label}</div>
                            <p>
                                TradeSwift AB<br />
                                Exempelgatan 123<br />
                                123 45 Stockholm<br />
                                Sverige
                            </p>
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
