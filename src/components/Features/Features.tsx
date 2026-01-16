import { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { FEATURES_CONTENT, type FeatureStep } from './FeaturesContent';
import './Features.css';

interface FeaturesProps {
    outstanding: number;
    overdue: number;
}

export function Features({ outstanding, overdue }: FeaturesProps) {
    const { language } = useLanguage();
    const content = FEATURES_CONTENT[language];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(max-width: 900px)').matches;
    });
    const [scrollProgress, setScrollProgress] = useState(0);

    const sectionRef = useRef<HTMLElement | null>(null);
    const filmstripRef = useRef<HTMLDivElement | null>(null);
    const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
    const desktopStepsRef = useRef<HTMLDivElement | null>(null);

    const steps = content.steps;
    const activeStep = steps[activeIndex];

    const appCurrency = language === 'sv'
        ? { code: 'SEK', symbol: 'kr', locale: 'sv-SE' }
        : { code: 'USD', symbol: '$', locale: 'en-US' };

    const formatAppMoney = useCallback((amount: number) =>
        `${amount.toLocaleString(appCurrency.locale)} ${appCurrency.code}`,
        [appCurrency.locale, appCurrency.code]
    );

    const formatAppNumber = useCallback((amount: number) =>
        amount.toLocaleString(appCurrency.locale),
        [appCurrency.locale]
    );

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduceMotion(media.matches);
        const handler = () => setReduceMotion(media.matches);
        media.addEventListener?.('change', handler) ?? media.addListener?.(handler);
        return () => media.removeEventListener?.('change', handler) ?? media.removeListener?.(handler);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const media = window.matchMedia('(max-width: 900px)');
        const handler = () => setIsMobile(media.matches);
        media.addEventListener?.('change', handler) ?? media.addListener?.(handler);
        return () => media.removeEventListener?.('change', handler) ?? media.removeListener?.(handler);
    }, []);

    useEffect(() => {
        setActiveIndex(0);
    }, [language]);

    useEffect(() => {
        if (reduceMotion || isPaused || isMobile || steps.length === 0) return;
        const interval = window.setInterval(() => {
            setActiveIndex(prev => (prev + 1) % steps.length);
        }, 9000);
        return () => window.clearInterval(interval);
    }, [reduceMotion, isPaused, isMobile, steps.length]);

    useEffect(() => {
        if (!isMobile) return;
        const filmstrip = filmstripRef.current;
        if (!filmstrip) return;

        const handleScroll = () => {
            const frames = frameRefs.current.filter(Boolean);
            if (frames.length === 0) return;

            const viewportCenter = window.innerHeight / 2;
            let closestIndex = 0;
            let closestDistance = Infinity;

            frames.forEach((frame, i) => {
                if (!frame) return;
                const rect = frame.getBoundingClientRect();
                const frameCenter = rect.top + rect.height / 2;
                const distance = Math.abs(frameCenter - viewportCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = i;
                }
            });

            setActiveIndex(closestIndex);
            setScrollProgress((closestIndex + 1) / steps.length);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile, steps.length]);

    const setFrameRef = (index: number) => (el: HTMLDivElement | null) => {
        frameRefs.current[index] = el;
    };

    const invoiceItems = content.showcase.invoice.items;
    const invoiceSubtotal = invoiceItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    const invoiceVat = invoiceItems.reduce((sum, item) => sum + (item.qty * item.price * item.vatRate) / 100, 0);
    const invoiceRot = invoiceItems.reduce((sum, item) => sum + (item.isRot ? item.qty * item.price * 0.3 : 0), 0);
    const invoiceGrandTotal = invoiceSubtotal + invoiceVat - invoiceRot;

    const delivery = content.showcase.delivery;
    const stripe = content.showcase.stripe;
    const clientsShowcase = content.showcase.clients;
    const activeTab = activeStep?.tab ?? 'home';

    const renderMockupScreen = (step: FeatureStep) => {
        switch (step.id) {
            case 'dashboard':
                return (
                    <div className="app-screen app-dashboard">
                        <div className="app-header">
                            <div className="app-logo">{content.showcase.dashboard.appName}</div>
                            <div className="app-greeting">{content.showcase.dashboard.greeting}</div>
                            <div className="app-company">{content.showcase.dashboard.company}</div>
                            <div className="app-divider" />
                        </div>
                        <div className="app-section">
                            <div className="app-section-label">{content.showcase.dashboard.outstanding}</div>
                            <div className="app-card app-card-dashed">
                                <div className="app-money">{formatAppMoney(outstanding)}</div>
                            </div>
                        </div>
                        <div className="app-section app-section-dark">
                            <div className="app-section-label app-section-label-danger">{content.showcase.dashboard.overdue}</div>
                            <div className="app-card app-card-dark">
                                <div className="app-money app-money-light">{formatAppMoney(overdue)}</div>
                            </div>
                        </div>
                        <div className="app-section">
                            <div className="app-section-label">{content.showcase.dashboard.quickActions}</div>
                            <div className="app-action-list">
                                {content.showcase.dashboard.actions.map(action => (
                                    <div className="app-action-row" key={action}>
                                        <span>{action}</span>
                                        <span className="app-action-arrow">&gt;</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="app-section app-activity">
                            <div className="app-section-label">{content.showcase.dashboard.recentActivity}</div>
                            <div className="app-activity-card">
                                <div>
                                    <div className="app-activity-title">{content.showcase.dashboard.activityClient}</div>
                                    <div className="app-activity-meta">{content.showcase.dashboard.activityMeta}</div>
                                </div>
                                <div className="app-activity-amount">{formatAppMoney(8200)}</div>
                            </div>
                        </div>
                    </div>
                );

            case 'invoice':
                return (
                    <div className="app-screen app-invoice">
                        <div className="app-header-row">
                            <div className="app-header-action">{content.showcase.invoice.cancel}</div>
                            <div className="app-header-title">{content.showcase.invoice.title}</div>
                            <div className="app-header-spacer" />
                        </div>
                        <div className="app-section">
                            <div className="app-field">
                                <span className="app-field-label">{content.showcase.invoice.selectClient}</span>
                                <span className="app-field-value">{content.showcase.invoice.clientName}</span>
                            </div>
                        </div>
                        <div className="app-date-row">
                            <div className="app-field">
                                <span className="app-field-label">{content.showcase.invoice.issueDate}</span>
                                <span className="app-field-value">{content.showcase.invoice.issueValue}</span>
                            </div>
                            <div className="app-field">
                                <span className="app-field-label">{content.showcase.invoice.dueDate}</span>
                                <span className="app-field-value">{content.showcase.invoice.dueValue}</span>
                            </div>
                        </div>
                        <div className="app-section">
                            <div className="app-section-header">
                                <div className="app-section-label">{content.showcase.invoice.lineItems}</div>
                                <div className="app-section-action">+ {content.showcase.invoice.addItem}</div>
                            </div>
                            <div className="app-item-list">
                                {invoiceItems.map(item => (
                                    <div className="app-item-row" key={item.description}>
                                        <div className="app-item-info">
                                            <div className="app-item-title">{item.description}</div>
                                            <div className="app-item-meta">
                                                {item.qty} x {formatAppNumber(item.price)}
                                                {item.isRot && (
                                                    <span className="app-rot-badge">{content.showcase.invoice.rotLabel}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="app-item-total">{formatAppMoney(item.qty * item.price)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="app-totals">
                            <div className="app-total-row">
                                <span>{content.showcase.invoice.totals.subtotal}</span>
                                <span>{formatAppMoney(invoiceSubtotal)}</span>
                            </div>
                            <div className="app-total-row">
                                <span>{content.showcase.invoice.totals.vatAmount}</span>
                                <span>{formatAppMoney(invoiceVat)}</span>
                            </div>
                            <div className="app-total-row app-total-rot">
                                <span>{content.showcase.invoice.totals.rotDeduction}</span>
                                <span>-{formatAppMoney(invoiceRot)}</span>
                            </div>
                            <div className="app-total-row app-total-grand">
                                <span>{content.showcase.invoice.totals.grandTotal}</span>
                                <span>{formatAppMoney(invoiceGrandTotal)}</span>
                            </div>
                        </div>
                        <div className="app-section">
                            <div className="app-section-label">{content.showcase.invoice.notes}</div>
                            <div className="app-notes">{content.showcase.invoice.notesValue}</div>
                        </div>
                        <div className="app-actions">
                            <div className="app-button">{content.showcase.invoice.saveDraft}</div>
                            <div className="app-button app-button-primary">{content.showcase.invoice.saveAndSend}</div>
                        </div>
                    </div>
                );

            case 'delivery':
                return (
                    <div className="app-screen app-delivery">
                        <div className="app-header-row app-header-simple">
                            <div className="app-header-action">{delivery.back}</div>
                            <div className="app-header-title">{delivery.title}</div>
                            <div className="app-header-action">{delivery.edit}</div>
                        </div>
                        <div className="app-notification-stack" aria-hidden="true">
                            {delivery.notifications.map(note => (
                                <div key={note.title} className={`app-notification is-${note.tone}`}>
                                    <span className="app-notification-dot" />
                                    <div className="app-notification-content">
                                        <div className="app-notification-title">{note.title}</div>
                                        <div className="app-notification-meta">{note.meta}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="app-status-row">
                            <span className={`app-status-badge is-${delivery.status.tone}`}>{delivery.status.label}</span>
                            <span className="app-status-id">{delivery.invoiceNumber}</span>
                        </div>
                        <div className="app-field">
                            <span className="app-field-label">{delivery.clientLabel}</span>
                            <span className="app-field-value">{delivery.clientName}</span>
                        </div>
                        <div className="app-date-row">
                            <div className="app-field">
                                <span className="app-field-label">{delivery.issueLabel}</span>
                                <span className="app-field-value">{delivery.issueValue}</span>
                            </div>
                            <div className="app-field">
                                <span className="app-field-label">{delivery.dueLabel}</span>
                                <span className="app-field-value">{delivery.dueValue}</span>
                            </div>
                        </div>
                        <div className="app-delivery-story">
                            <div className="app-delivery-story-header">
                                <div>
                                    <div className="app-delivery-story-title">{delivery.story.title}</div>
                                    <div className="app-delivery-story-meta">{delivery.story.meta}</div>
                                </div>
                                <div className="app-delivery-story-chip">{delivery.story.chip}</div>
                            </div>
                            <div className="app-delivery-story-row">
                                <span className="app-delivery-story-label">{delivery.story.toLabel}</span>
                                <span className="app-delivery-story-value">{delivery.story.toValue}</span>
                            </div>
                            <div className="app-delivery-story-row">
                                <span className="app-delivery-story-label">{delivery.story.subjectLabel}</span>
                                <span className="app-delivery-story-value">{delivery.story.subjectValue}</span>
                            </div>
                            <div className="app-delivery-story-preview">{delivery.story.preview}</div>
                            <div className="app-delivery-story-cta">{delivery.story.cta}</div>
                            <div className="app-delivery-story-helper">{delivery.story.helper}</div>
                        </div>
                        <div className="app-delivery-insights">
                            {delivery.insights.map(insight => (
                                <div className={`app-delivery-insight is-${insight.tone}`} key={insight.label}>
                                    <span className="app-delivery-insight-label">{insight.label}</span>
                                    <span className="app-delivery-insight-value">{insight.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="app-delivery-card">
                            <div className="app-delivery-title">{delivery.sendTitle}</div>
                            <div className="app-delivery-sub">{delivery.sendDescription}</div>
                            <div className="app-delivery-options">
                                {delivery.options.map(option => (
                                    <div className={`app-delivery-option is-${option.tone}`} key={option.label}>
                                        <span>{option.label}</span>
                                        <span className="app-action-arrow">&gt;</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="app-tracking">
                            <div className="app-tracking-title">{delivery.trackingTitle}</div>
                            <div className="app-tracking-bar" aria-hidden="true" />
                            {delivery.tracking.map(item => (
                                <div className="app-tracking-row" key={item.label}>
                                    <div className="app-tracking-state">
                                        <span className={`app-tracking-dot is-${item.state}`} />
                                        <span>{item.label}</span>
                                    </div>
                                    <span className="app-tracking-meta">{item.meta}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'stripe':
                return (
                    <div className="app-screen app-stripe">
                        <div className="app-header-row app-header-simple">
                            <div className="app-header-title">{stripe.title}</div>
                            <div className="stripe-status">{stripe.status}</div>
                        </div>
                        <p className="app-stripe-description">{stripe.description}</p>
                        <div className="stripe-flow-card">
                            <div className="stripe-flow-title">{stripe.flowTitle}</div>
                            <div className="stripe-flow">
                                {stripe.flow.map(flowStep => (
                                    <div className={`stripe-flow-step is-${flowStep.state}`} key={flowStep.label}>
                                        <div className="stripe-flow-label">{flowStep.label}</div>
                                        <div className="stripe-flow-value">{flowStep.value}</div>
                                        <div className="stripe-flow-meta">{flowStep.meta}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="stripe-balance">
                            <div>
                                <div className="stripe-balance-label">{stripe.balance.label}</div>
                                <div className="stripe-balance-meta">{stripe.balance.meta}</div>
                            </div>
                            <div className="stripe-balance-value">{stripe.balance.value}</div>
                        </div>
                        <div className="stripe-info-card">
                            {stripe.info.map(row => (
                                <div className="stripe-info-row" key={row.label}>
                                    <span className="stripe-info-label">{row.label}</span>
                                    <span className="stripe-info-value">{row.value}</span>
                                </div>
                            ))}
                            <div className="stripe-capabilities">
                                {stripe.capabilities.map(cap => (
                                    <div className="stripe-capability" key={cap.label}>
                                        <span className={`stripe-dot ${cap.active ? 'is-active' : 'is-inactive'}`} />
                                        <span className="stripe-capability-text">{cap.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="stripe-button">{stripe.button}</div>
                    </div>
                );

            case 'clients':
                return (
                    <div className="app-screen app-clients">
                        <div className="app-header-row app-header-simple">
                            <div className="app-header-title">{clientsShowcase.title}</div>
                            <div className="app-header-action app-header-add">+</div>
                        </div>
                        <div className="app-search">{clientsShowcase.searchPlaceholder}</div>
                        <div className="client-list">
                            {clientsShowcase.list.map(client => (
                                <div className={`client-row ${client.focus ? 'is-focus' : ''}`} key={client.name}>
                                    <div>
                                        <div className="client-name">{client.name}</div>
                                        <div className="client-meta">{client.city}</div>
                                    </div>
                                    <div className="client-balance">
                                        <span className={`client-status is-${client.tone}`}>{client.status}</span>
                                        <span className="client-amount">{formatAppMoney(client.balance)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="client-memory-card">
                            <div className="client-memory-header">
                                <div className="client-memory-title">{clientsShowcase.memory.title}</div>
                                <div className="client-memory-sub">{clientsShowcase.memory.subtitle}</div>
                            </div>
                            <div className="client-memory-grid">
                                {clientsShowcase.memory.items.map(item => (
                                    <div className="client-memory-item" key={item.label}>
                                        <span className="client-memory-label">{item.label}</span>
                                        <span className="client-memory-value">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="client-memory-note">{clientsShowcase.memory.note}</div>
                            <div className="client-memory-tags">
                                {clientsShowcase.memory.tags.map(tag => (
                                    <span className="client-memory-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="client-autofill-card">
                            <div className="client-autofill-title">{clientsShowcase.autofill.title}</div>
                            <div className="client-autofill-rows">
                                {clientsShowcase.autofill.items.map(item => (
                                    <div className="client-autofill-row" key={item.label}>
                                        <span>{item.label}</span>
                                        <span>{item.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="client-autofill-footer">{clientsShowcase.autofill.footer}</div>
                        </div>
                        <div className="client-summary">
                            <span className="client-summary-label">{clientsShowcase.summaryLabel}</span>
                            <span className="client-summary-value">{formatAppMoney(clientsShowcase.summaryValue)}</span>
                            <span className="client-summary-meta">{clientsShowcase.summaryMeta}</span>
                        </div>
                    </div>
                );

            case 'receipts':
                return (
                    <div className="app-screen app-receipts">
                        <div className="app-header-row app-header-simple">
                            <div className="app-header-title">{content.showcase.receipts.title}</div>
                            <div className="app-header-action app-header-add">+</div>
                        </div>
                        <div className="app-search">{content.showcase.receipts.searchPlaceholder}</div>
                        <div className="receipt-scan-card">
                            <div className="receipt-scan-text">
                                <div className="receipt-scan-title">{content.showcase.receipts.scanButton}</div>
                                <div className="receipt-scan-sub">{content.showcase.receipts.scanSublabel}</div>
                            </div>
                            <div className="receipt-scan-preview">
                                <div className="receipt-scan-lines">
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                        <div className="receipt-list">
                            {content.showcase.receipts.list.map(receipt => (
                                <div className="receipt-row" key={`${receipt.merchant}-${receipt.date}`}>
                                    <div className="receipt-thumb">[ ]</div>
                                    <div className="receipt-info">
                                        <div className="receipt-merchant">{receipt.merchant}</div>
                                        <div className="receipt-meta">
                                            {receipt.date} · {receipt.lines} {content.showcase.receipts.lineItemsLabel}
                                        </div>
                                    </div>
                                    <div className="receipt-total">{formatAppMoney(receipt.total)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    if (isMobile) {
        return (
            <section id="features" className="features-section features-section--mobile" ref={sectionRef}>
                <div className="features-container">
                    <div className="features-header">
                        <p className="section-label">{content.label}</p>
                        <h2>{content.title}</h2>
                        <p>{content.description}</p>
                    </div>
                </div>

                <div className="filmstrip-progress">
                    <div className="filmstrip-progress-bar" style={{ width: `${scrollProgress * 100}%` }} />
                    <span className="filmstrip-progress-text">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                    </span>
                </div>

                <div className="filmstrip" ref={filmstripRef}>
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`filmstrip-frame ${activeIndex === index ? 'is-active' : ''}`}
                            ref={setFrameRef(index)}
                        >
                            <div className="filmstrip-mockup">
                                <div className="filmstrip-device">
                                    <div className="filmstrip-screen">
                                        {renderMockupScreen(step)}
                                    </div>
                                    <div className="filmstrip-tabbar" data-active={step.tab}>
                                        <div className="filmstrip-tab" data-tab="home">{content.showcase.tabs.home}</div>
                                        <div className="filmstrip-tab" data-tab="invoices">{content.showcase.tabs.invoices}</div>
                                        <div className="filmstrip-tab" data-tab="clients">{content.showcase.tabs.clients}</div>
                                        <div className="filmstrip-tab" data-tab="more">{content.showcase.tabs.more}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="filmstrip-card">
                                <div className="filmstrip-card-header">
                                    <span className="filmstrip-card-number">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="filmstrip-card-stat">{step.stat}</span>
                                </div>
                                <span className="filmstrip-card-kicker">{step.kicker}</span>
                                <h3 className="filmstrip-card-title">{step.title}</h3>
                                <p className="filmstrip-card-description">{step.description}</p>
                                <ul className="filmstrip-card-bullets">
                                    {step.bullets.map(bullet => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                                <div className="filmstrip-card-outcome">→ {step.outcome}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section id="features" className="features-section" ref={sectionRef}>
            <div className="features-container">
                <div className="features-header">
                    <p className="section-label">{content.label}</p>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                </div>

                <div
                    className="showcase-grid"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="showcase-steps" ref={desktopStepsRef}>
                        {steps.map((step, index) => (
                            <button
                                key={step.id}
                                type="button"
                                className={`showcase-step ${activeIndex === index ? 'is-active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                                aria-pressed={activeIndex === index}
                            >
                                <div className="showcase-step-index">
                                    <span className="showcase-step-number">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="showcase-step-stat">{step.stat}</span>
                                </div>
                                <div className="showcase-step-content">
                                    <span className="showcase-step-kicker">{step.kicker}</span>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    <ul className="showcase-step-bullets">
                                        {step.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                                    </ul>
                                    <div className="showcase-step-outcome">{step.outcome}</div>
                                </div>
                                <span className="showcase-step-bar" />
                            </button>
                        ))}
                    </div>

                    <div className="showcase-visual">
                        <div className="showcase-device">
                            <div className="showcase-screen-stack">
                                {steps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className={`showcase-screen ${activeIndex === index ? 'is-active' : ''}`}
                                        data-screen={step.id}
                                    >
                                        {renderMockupScreen(step)}
                                    </div>
                                ))}
                            </div>
                            <div className="showcase-tabbar" data-active={activeTab}>
                                <div className="showcase-tab" data-tab="home">{content.showcase.tabs.home}</div>
                                <div className="showcase-tab" data-tab="invoices">{content.showcase.tabs.invoices}</div>
                                <div className="showcase-tab" data-tab="clients">{content.showcase.tabs.clients}</div>
                                <div className="showcase-tab" data-tab="more">{content.showcase.tabs.more}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
