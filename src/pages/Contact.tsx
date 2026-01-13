import { useState, type FormEvent } from 'react';
import './Contact.css';

const API_BASE = 'https://tradeswift-backend.xaco47.workers.dev';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
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
                    <p className="section-label">SUPPORT</p>
                    <h1>Kundtjänst</h1>
                    <p>
                        Har du frågor eller behöver hjälp? Vårt team finns här för att stötta dig.
                    </p>
                </div>

                <div className="contact-divider" />

                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-label">E-post</div>
                            <p>Skriv till oss för allmänna frågor eller supportärenden.</p>
                            <a href="mailto:support@tradeswift.se">support@tradeswift.se</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">Telefon</div>
                            <p>Tillgänglig vardagar 09:00 – 17:00</p>
                            <a href="tel:+46812345678">08-123 456 78</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-label">Adress</div>
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
                            <h3>SKICKA ETT MEDDELANDE</h3>

                            {status === 'success' && (
                                <div className="form-success">
                                    Tack för ditt meddelande! Vi återkommer så snart som möjligt.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="form-error">
                                    {errorMessage || 'Något gick fel. Försök igen.'}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Namn</label>
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
                                <label htmlFor="email">E-post</label>
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
                                <label htmlFor="subject">Ärende</label>
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
                                <label htmlFor="message">Meddelande</label>
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
                                {status === 'submitting' ? 'SKICKAR...' : 'SKICKA MEDDELANDE'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

