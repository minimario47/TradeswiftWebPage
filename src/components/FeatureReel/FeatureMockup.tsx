import { useCallback } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { FEATURE_REEL_CONTENT } from './FeatureReelContent';
import './FeatureMockup.css';

interface FeatureMockupProps {
    featureId: string;
    outstanding?: number;
    overdue?: number;
    isActive?: boolean;
}

export function FeatureMockup({ featureId, outstanding = 36450, overdue = 15200, isActive = true }: FeatureMockupProps) {
    const { language } = useLanguage();
    const content = FEATURE_REEL_CONTENT[language];
    const showcase = content.showcase;

    const appCurrency = language === 'sv'
        ? { code: 'SEK', symbol: 'kr', locale: 'sv-SE' }
        : { code: 'USD', symbol: '$', locale: 'en-US' };

    const formatMoney = useCallback((amount: number) =>
        `${amount.toLocaleString(appCurrency.locale)} ${appCurrency.code}`,
        [appCurrency.locale, appCurrency.code]
    );

    const formatNumber = useCallback((amount: number) =>
        amount.toLocaleString(appCurrency.locale),
        [appCurrency.locale]
    );

    const invoiceItems = showcase.invoice.items;
    const invoiceSubtotal = invoiceItems.reduce((sum, item) => sum + item.qty * item.price, 0);
    const invoiceVat = invoiceItems.reduce((sum, item) => sum + (item.qty * item.price * item.vatRate) / 100, 0);
    const invoiceRot = invoiceItems.reduce((sum, item) => sum + (item.isRot ? item.qty * item.price * 0.3 : 0), 0);
    const invoiceGrandTotal = invoiceSubtotal + invoiceVat - invoiceRot;

    const renderScreen = () => {
        switch (featureId) {
            case 'dashboard':
                return (
                    <div className="mockup-screen mockup-dashboard">
                        <div className="mockup-header">
                            <div className="mockup-logo">{showcase.dashboard.appName}</div>
                            <div className="mockup-greeting">{showcase.dashboard.greeting}</div>
                            <div className="mockup-company">{showcase.dashboard.company}</div>
                            <div className="mockup-divider" />
                        </div>
                        <div className="mockup-section">
                            <div className="mockup-section-label">{showcase.dashboard.outstanding}</div>
                            <div className="mockup-card mockup-card-dashed">
                                <div className={`mockup-money ${isActive ? 'is-animated' : ''}`}>{formatMoney(outstanding)}</div>
                            </div>
                        </div>
                        <div className="mockup-section mockup-section-dark">
                            <div className="mockup-section-label mockup-section-label-danger">{showcase.dashboard.overdue}</div>
                            <div className="mockup-card mockup-card-dark">
                                <div className="mockup-money mockup-money-light">{formatMoney(overdue)}</div>
                            </div>
                        </div>
                        <div className="mockup-section">
                            <div className="mockup-section-label">{showcase.dashboard.quickActions}</div>
                            <div className="mockup-action-list">
                                {showcase.dashboard.actions.map(action => (
                                    <div className="mockup-action-row" key={action}>
                                        <span>{action}</span>
                                        <span className="mockup-action-arrow">&gt;</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mockup-section mockup-activity">
                            <div className="mockup-section-label">{showcase.dashboard.recentActivity}</div>
                            <div className="mockup-activity-card">
                                <div>
                                    <div className="mockup-activity-title">{showcase.dashboard.activityClient}</div>
                                    <div className="mockup-activity-meta">{showcase.dashboard.activityMeta}</div>
                                </div>
                                <div className="mockup-activity-amount">{formatMoney(8200)}</div>
                            </div>
                        </div>
                    </div>
                );

            case 'invoice':
                return (
                    <div className="mockup-screen mockup-invoice">
                        <div className="mockup-header-row">
                            <div className="mockup-header-action">{showcase.invoice.cancel}</div>
                            <div className="mockup-header-title">{showcase.invoice.title}</div>
                            <div className="mockup-header-spacer" />
                        </div>
                        <div className="mockup-section">
                            <div className="mockup-field">
                                <span className="mockup-field-label">{showcase.invoice.selectClient}</span>
                                <span className="mockup-field-value">{showcase.invoice.clientName}</span>
                            </div>
                        </div>
                        <div className="mockup-date-row">
                            <div className="mockup-field">
                                <span className="mockup-field-label">{showcase.invoice.issueDate}</span>
                                <span className="mockup-field-value">{showcase.invoice.issueValue}</span>
                            </div>
                            <div className="mockup-field">
                                <span className="mockup-field-label">{showcase.invoice.dueDate}</span>
                                <span className="mockup-field-value">{showcase.invoice.dueValue}</span>
                            </div>
                        </div>
                        <div className="mockup-section">
                            <div className="mockup-section-header">
                                <div className="mockup-section-label">{showcase.invoice.lineItems}</div>
                                <div className="mockup-section-action">+ {showcase.invoice.addItem}</div>
                            </div>
                            <div className="mockup-item-list">
                                {invoiceItems.map(item => (
                                    <div className="mockup-item-row" key={item.description}>
                                        <div className="mockup-item-info">
                                            <div className="mockup-item-title">{item.description}</div>
                                            <div className="mockup-item-meta">
                                                {item.qty} x {formatNumber(item.price)}
                                                {item.isRot && (
                                                    <span className="mockup-rot-badge">{showcase.invoice.rotLabel}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mockup-item-total">{formatMoney(item.qty * item.price)}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mockup-totals">
                            <div className="mockup-total-row">
                                <span>{showcase.invoice.totals.subtotal}</span>
                                <span>{formatMoney(invoiceSubtotal)}</span>
                            </div>
                            <div className="mockup-total-row">
                                <span>{showcase.invoice.totals.vatAmount}</span>
                                <span>{formatMoney(invoiceVat)}</span>
                            </div>
                            <div className="mockup-total-row mockup-total-rot">
                                <span>{showcase.invoice.totals.rotDeduction}</span>
                                <span>-{formatMoney(invoiceRot)}</span>
                            </div>
                            <div className="mockup-total-row mockup-total-grand">
                                <span>{showcase.invoice.totals.grandTotal}</span>
                                <span>{formatMoney(invoiceGrandTotal)}</span>
                            </div>
                        </div>
                        <div className="mockup-actions">
                            <div className="mockup-button">{showcase.invoice.saveDraft}</div>
                            <div className="mockup-button mockup-button-primary">{showcase.invoice.saveAndSend}</div>
                        </div>
                    </div>
                );

            case 'delivery':
                return (
                    <div className="mockup-screen mockup-delivery">
                        <div className="mockup-header-row mockup-header-simple">
                            <div className="mockup-header-action">{showcase.delivery.back}</div>
                            <div className="mockup-header-title">{showcase.delivery.title}</div>
                            <div className="mockup-header-action">{showcase.delivery.edit}</div>
                        </div>
                        <div className="mockup-status-row">
                            <span className={`mockup-status-badge is-${showcase.delivery.status.tone}`}>{showcase.delivery.status.label}</span>
                            <span className="mockup-status-id">{showcase.delivery.invoiceNumber}</span>
                        </div>
                        <div className="mockup-field">
                            <span className="mockup-field-label">{showcase.delivery.clientLabel}</span>
                            <span className="mockup-field-value">{showcase.delivery.clientName}</span>
                        </div>
                        <div className="mockup-delivery-story">
                            <div className="mockup-delivery-story-header">
                                <div>
                                    <div className="mockup-delivery-story-title">{showcase.delivery.story.title}</div>
                                    <div className="mockup-delivery-story-meta">{showcase.delivery.story.meta}</div>
                                </div>
                                <div className="mockup-delivery-story-chip">{showcase.delivery.story.chip}</div>
                            </div>
                            <div className={`mockup-delivery-story-cta ${isActive ? 'is-animated' : ''}`}>{showcase.delivery.story.cta}</div>
                            <div className="mockup-delivery-story-helper">{showcase.delivery.story.helper}</div>
                        </div>
                        <div className="mockup-delivery-insights">
                            {showcase.delivery.insights.map(insight => (
                                <div className={`mockup-delivery-insight is-${insight.tone}`} key={insight.label}>
                                    <span className="mockup-delivery-insight-label">{insight.label}</span>
                                    <span className="mockup-delivery-insight-value">{insight.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mockup-tracking">
                            <div className="mockup-tracking-title">{showcase.delivery.trackingTitle}</div>
                            <div className={`mockup-tracking-bar ${isActive ? 'is-animated' : ''}`} />
                            {showcase.delivery.tracking.map(item => (
                                <div className="mockup-tracking-row" key={item.label}>
                                    <div className="mockup-tracking-state">
                                        <span className={`mockup-tracking-dot is-${item.state}`} />
                                        <span>{item.label}</span>
                                    </div>
                                    <span className="mockup-tracking-meta">{item.meta}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'stripe':
                return (
                    <div className="mockup-screen mockup-stripe">
                        <div className="mockup-header-row mockup-header-simple">
                            <div className="mockup-header-title">{showcase.stripe.title}</div>
                            <div className="mockup-stripe-status">{showcase.stripe.status}</div>
                        </div>
                        <p className="mockup-stripe-description">{showcase.stripe.description}</p>
                        <div className="mockup-stripe-flow-card">
                            <div className="mockup-stripe-flow-title">{showcase.stripe.flowTitle}</div>
                            <div className="mockup-stripe-flow">
                                {showcase.stripe.flow.map(flowStep => (
                                    <div className={`mockup-stripe-flow-step is-${flowStep.state}`} key={flowStep.label}>
                                        <div className="mockup-stripe-flow-label">{flowStep.label}</div>
                                        <div className="mockup-stripe-flow-value">{flowStep.value}</div>
                                        <div className="mockup-stripe-flow-meta">{flowStep.meta}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mockup-stripe-balance">
                            <div>
                                <div className="mockup-stripe-balance-label">{showcase.stripe.balance.label}</div>
                                <div className="mockup-stripe-balance-meta">{showcase.stripe.balance.meta}</div>
                            </div>
                            <div className={`mockup-stripe-balance-value ${isActive ? 'is-animated' : ''}`}>{showcase.stripe.balance.value}</div>
                        </div>
                        <div className="mockup-stripe-button">{showcase.stripe.button}</div>
                    </div>
                );

            case 'clients':
                return (
                    <div className="mockup-screen mockup-clients">
                        <div className="mockup-header-row mockup-header-simple">
                            <div className="mockup-header-title">{showcase.clients.title}</div>
                            <div className="mockup-header-action mockup-header-add">+</div>
                        </div>
                        <div className="mockup-search">{showcase.clients.searchPlaceholder}</div>
                        <div className="mockup-client-list">
                            {showcase.clients.list.map(client => (
                                <div className={`mockup-client-row ${client.focus ? 'is-focus' : ''}`} key={client.name}>
                                    <div>
                                        <div className="mockup-client-name">{client.name}</div>
                                        <div className="mockup-client-meta">{client.city}</div>
                                    </div>
                                    <div className="mockup-client-balance">
                                        <span className={`mockup-client-status is-${client.tone}`}>{client.status}</span>
                                        <span className="mockup-client-amount">{formatMoney(client.balance)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mockup-client-memory-card">
                            <div className="mockup-client-memory-header">
                                <div className="mockup-client-memory-title">{showcase.clients.memory.title}</div>
                                <div className="mockup-client-memory-sub">{showcase.clients.memory.subtitle}</div>
                            </div>
                            <div className="mockup-client-memory-tags">
                                {showcase.clients.memory.tags.map(tag => (
                                    <span className="mockup-client-memory-tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 'receipts':
                return (
                    <div className="mockup-screen mockup-receipts">
                        <div className="mockup-header-row mockup-header-simple">
                            <div className="mockup-header-title">{showcase.receipts.title}</div>
                            <div className="mockup-header-action mockup-header-add">+</div>
                        </div>
                        <div className="mockup-search">{showcase.receipts.searchPlaceholder}</div>
                        <div className={`mockup-receipt-scan-card ${isActive ? 'is-animated' : ''}`}>
                            <div className="mockup-receipt-scan-text">
                                <div className="mockup-receipt-scan-title">{showcase.receipts.scanButton}</div>
                                <div className="mockup-receipt-scan-sub">{showcase.receipts.scanSublabel}</div>
                            </div>
                            <div className="mockup-receipt-scan-preview">
                                <div className="mockup-receipt-scan-lines">
                                    <span /><span /><span />
                                </div>
                            </div>
                        </div>
                        <div className="mockup-receipt-list">
                            {showcase.receipts.list.map(receipt => (
                                <div className="mockup-receipt-row" key={`${receipt.merchant}-${receipt.date}`}>
                                    <div className="mockup-receipt-thumb">[ ]</div>
                                    <div className="mockup-receipt-info">
                                        <div className="mockup-receipt-merchant">{receipt.merchant}</div>
                                        <div className="mockup-receipt-meta">
                                            {receipt.date} · {receipt.lines} {showcase.receipts.lineItemsLabel}
                                        </div>
                                    </div>
                                    <div className="mockup-receipt-total">{formatMoney(receipt.total)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    const feature = content.features.find(f => f.id === featureId);
    const activeTab = feature?.tab ?? 'home';

    return (
        <div className="feature-mockup-device">
            <div className="feature-mockup-notch" />
            <div className="feature-mockup-screen">
                {renderScreen()}
            </div>
            <div className="feature-mockup-tabbar" data-active={activeTab}>
                <div className="feature-mockup-tab" data-tab="home">{showcase.tabs.home}</div>
                <div className="feature-mockup-tab" data-tab="invoices">{showcase.tabs.invoices}</div>
                <div className="feature-mockup-tab" data-tab="clients">{showcase.tabs.clients}</div>
                <div className="feature-mockup-tab" data-tab="more">{showcase.tabs.more}</div>
            </div>
        </div>
    );
}
