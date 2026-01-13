import { useEffect, useState, useRef, type FormEvent } from 'react';
import './Home.css';

const FAQ_ITEMS = [
    {
        q: 'Är mina fakturor giltiga för Skatteverket?',
        a: 'Ja. Fakturorna följer svensk lag och innehåller alla obligatoriska uppgifter: organisationsnummer, momsredovisning, betalningsvillkor och fakturanummer.'
    },
    {
        q: 'Fungerar det utan internet?',
        a: 'Ja. TradeSwift Pro sparar allt lokalt på din enhet. Du kan skapa fakturor och skanna kvitton offline. Data synkas automatiskt när du är online igen.'
    },
    {
        q: 'Vad händer om jag byter telefon?',
        a: 'Logga in med samma Apple-ID på din nya telefon. All data synkas automatiskt från molnet. Ingenting förloras.'
    },
    {
        q: 'Hur säkert är det?',
        a: 'Alla betalningar hanteras av Stripe, världsledande inom betalningssäkerhet. Din data krypteras både i transit och i vila. Vi säljer aldrig dina uppgifter.'
    },
    {
        q: 'Kan jag exportera mina fakturor?',
        a: 'Ja. Exportera fakturor som PDF för bokföring eller skicka direkt via e-post. All fakturadata kan exporteras när som helst.'
    }
];

export function Home() {
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

    const formatMoney = (amount: number) => {
        return `${amount.toLocaleString('sv-SE')} kr`;
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
                        <span className="hero-app-name">TRADESWIFT PRO</span>
                        <span className="hero-label">Välkommen tillbaka,</span>
                        <h1 className="hero-title">
                            Arbeta smartare.<br />
                            Få betalt snabbare.
                        </h1>
                        <div className="hero-divider" />
                        <p className="hero-subtitle">
                            Skapa professionella fakturor, skanna kvitton och hantera betalningar
                            – allt i en app byggd för dig som arbetar med händerna.
                        </p>
                        <div className="hero-actions">
                            <a
                                href="https://apps.apple.com"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LADDA NER FÖR IOS
                            </a>
                            <a href="#funktioner" className="btn btn-secondary">
                                SE FUNKTIONER
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-phone">
                            <div className="hero-phone-header">
                                <div className="hero-phone-label">TRADESWIFT PRO</div>
                                <div className="hero-phone-greeting">Välkommen tillbaka,</div>
                                <div className="hero-phone-company">DITT FÖRETAG AB</div>
                            </div>
                            <div className="hero-phone-content">
                                <div className="money-section">
                                    <div className="money-label">UTESTÅENDE</div>
                                    <div className="money-card">
                                        <div className="money-amount">{formatMoney(outstanding)}</div>
                                    </div>
                                </div>
                                <div className="money-section-dark">
                                    <div className="money-label">FÖRFALLET</div>
                                    <div className="money-card">
                                        <div className="money-amount">{formatMoney(overdue)}</div>
                                    </div>
                                </div>
                                <div className="quick-actions">
                                    <div className="quick-action">
                                        <span className="quick-action-text">Ny faktura</span>
                                        <span className="quick-action-arrow">›</span>
                                    </div>
                                    <div className="quick-action">
                                        <span className="quick-action-text">Skanna kvitto</span>
                                        <span className="quick-action-arrow">›</span>
                                    </div>
                                    <div className="quick-action">
                                        <span className="quick-action-text">Starta jobb</span>
                                        <span className="quick-action-arrow">›</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="problem-section">
                <div className="problem-container" ref={setRevealRef(0)}>
                    <div className="problem-stat">15 MIN</div>
                    <div className="problem-text">
                        <p className="section-label">PROBLEMET</p>
                        <h2>Varje faktura tar 15 minuter</h2>
                        <p>
                            Du borde vara ute och jobba. Inte sitta med pappersarbete.
                            Varje timme framför datorn är en timme du inte fakturerar.
                        </p>
                    </div>
                </div>
            </section>

            <section id="funktioner" className="features-section">
                <div className="features-container">
                    <div className="features-header" ref={setRevealRef(1)}>
                        <p className="section-label">LÖSNINGEN</p>
                        <h2>Fakturera från bygget</h2>
                        <p>
                            Skapa fakturan innan du lämnar jobbet. Kunden betalar samma dag.
                        </p>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card" ref={setRevealRef(2)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                </svg>
                            </div>
                            <h3>30 SEKUNDER</h3>
                            <p>
                                3 klick. Under 30 sekunder. Skickad innan du lämnar bygget.
                                Ingen dator krävs.
                            </p>
                        </div>
                        <div className="feature-card" ref={setRevealRef(3)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <rect x="3" y="3" width="18" height="18" />
                                    <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
                                    <path d="M21 15l-5-5L5 21" />
                                </svg>
                            </div>
                            <h3>FOTA → KLART</h3>
                            <p>
                                Fota kvittot. AI läser av. Sparat permanent. Sluta tappa kvitton
                                i fickan.
                            </p>
                        </div>
                        <div className="feature-card" ref={setRevealRef(4)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <rect x="1" y="4" width="22" height="16" />
                                    <line x1="1" y1="10" x2="23" y2="10" />
                                </svg>
                            </div>
                            <h3>BETALT INOM 48H</h3>
                            <p>
                                Kunden betalar direkt med kort. Pengarna på ditt konto inom 48 timmar.
                                Inga väntetider.
                            </p>
                        </div>
                        <div className="feature-card" ref={setRevealRef(5)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>ETT KLICK</h3>
                            <p>
                                Spara kunder en gång. Välj från listan. Aldrig skriva samma
                                adress två gånger.
                            </p>
                        </div>
                        <div className="feature-card" ref={setRevealRef(6)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <h3>DINA PRISER</h3>
                            <p>
                                Spara timpriser, material, ROT-avdrag. Lägg till med ett tryck.
                                Samma resultat varje gång.
                            </p>
                        </div>
                        <div className="feature-card" ref={setRevealRef(7)}>
                            <div className="feature-card-icon">
                                <svg viewBox="0 0 24 24" strokeLinecap="square">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <h3>OFFLINE</h3>
                            <p>
                                Fungerar utan täckning. Skapa fakturor i källaren. Synkas
                                automatiskt när du är uppe.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trust-section">
                <div className="trust-container" ref={setRevealRef(8)}>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                        <span>STRIPE</span>
                        <p>Säker betalning</p>
                    </div>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>GDPR</span>
                        <p>Dataskydd</p>
                    </div>
                    <div className="trust-badge">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span>SVENSKT</span>
                        <p>Utvecklat i Sverige</p>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="faq-container">
                    <div className="faq-header" ref={setRevealRef(9)}>
                        <p className="section-label">VANLIGA FRÅGOR</p>
                        <h2>Snabba svar</h2>
                    </div>
                    <div className="faq-list">
                        {FAQ_ITEMS.map((item, index) => (
                            <div
                                key={index}
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
                <div className="newsletter-container" ref={setRevealRef(10)}>
                    <div className="newsletter-content">
                        <p className="section-label">HÅLL DIG UPPDATERAD</p>
                        <h2>Tips för smartare fakturering</h2>
                        <p>Praktiska råd om ROT-avdrag, bokföring och effektivare arbete. Inga spam.</p>
                    </div>
                    {emailStatus === 'success' ? (
                        <div className="newsletter-success">
                            TACK. DU ÄR TILLAGD.
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleEmailSubmit}>
                            <input
                                type="email"
                                placeholder="Din e-postadress"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary">
                                PRENUMERERA
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-container">
                    <h2>Redo att sluta jaga betalningar?</h2>
                    <p>
                        Ladda ner gratis. Skapa din första faktura på under en minut.
                    </p>
                    <a
                        href="https://apps.apple.com"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        KOM IGÅNG GRATIS
                    </a>
                </div>
            </section>
        </>
    );
}
