export interface FeatureItem {
    id: string;
    kicker: string;
    stat: string;
    title: string;
    shortTitle: string;
    description: string;
    bullets: string[];
    outcome: string;
    tab: 'home' | 'invoices' | 'clients' | 'more';
}

export interface FeatureReelContent {
    home: {
        label: string;
        title: string;
        subtitle: string;
        tapHint: string;
        exploreAll: string;
    };
    page: {
        label: string;
        title: string;
        subtitle: string;
        swipeHint: string;
        backToHome: string;
    };
    features: FeatureItem[];
    showcase: {
        dashboard: {
            appName: string;
            greeting: string;
            company: string;
            outstanding: string;
            overdue: string;
            quickActions: string;
            actions: string[];
            recentActivity: string;
            activityClient: string;
            activityMeta: string;
        };
        invoice: {
            cancel: string;
            title: string;
            selectClient: string;
            issueDate: string;
            dueDate: string;
            lineItems: string;
            addItem: string;
            notes: string;
            saveDraft: string;
            saveAndSend: string;
            clientName: string;
            issueValue: string;
            dueValue: string;
            notesValue: string;
            totals: {
                subtotal: string;
                vatAmount: string;
                rotDeduction: string;
                grandTotal: string;
            };
            rotLabel: string;
            items: { description: string; qty: number; price: number; vatRate: number; isRot: boolean }[];
        };
        delivery: {
            back: string;
            edit: string;
            title: string;
            status: { label: string; tone: string };
            invoiceNumber: string;
            clientLabel: string;
            clientName: string;
            issueLabel: string;
            issueValue: string;
            dueLabel: string;
            dueValue: string;
            story: {
                title: string;
                meta: string;
                chip: string;
                toLabel: string;
                toValue: string;
                subjectLabel: string;
                subjectValue: string;
                preview: string;
                cta: string;
                helper: string;
            };
            sendTitle: string;
            sendDescription: string;
            options: { label: string; tone: string }[];
            insights: { label: string; value: string; tone: string }[];
            trackingTitle: string;
            tracking: { label: string; meta: string; state: string }[];
        };
        stripe: {
            title: string;
            description: string;
            status: string;
            flowTitle: string;
            flow: { label: string; value: string; meta: string; state: string }[];
            balance: { label: string; value: string; meta: string };
            info: { label: string; value: string }[];
            capabilities: { label: string; active: boolean }[];
            button: string;
        };
        clients: {
            title: string;
            searchPlaceholder: string;
            list: { name: string; city: string; status: string; balance: number; tone: string; focus?: boolean }[];
            memory: {
                title: string;
                subtitle: string;
                items: { label: string; value: string }[];
                note: string;
                tags: string[];
            };
            autofill: {
                title: string;
                items: { label: string; value: string }[];
                footer: string;
            };
            summaryLabel: string;
            summaryValue: number;
            summaryMeta: string;
        };
        receipts: {
            title: string;
            searchPlaceholder: string;
            scanButton: string;
            scanSublabel: string;
            lineItemsLabel: string;
            list: { merchant: string; date: string; total: number; lines: number }[];
        };
        tabs: {
            home: string;
            invoices: string;
            clients: string;
            more: string;
        };
    };
}

export const FEATURE_REEL_CONTENT: Record<'en' | 'sv', FeatureReelContent> = {
    en: {
        home: {
            label: 'THE APP',
            title: 'Everything you need',
            subtitle: 'From invoice to payment — all in one place.',
            tapHint: 'TAP TO EXPLORE',
            exploreAll: 'SEE ALL FEATURES'
        },
        page: {
            label: 'FEATURES',
            title: 'Built for hands-on work',
            subtitle: 'Explore each feature in detail. Tap any card below.',
            swipeHint: 'SWIPE TO NAVIGATE',
            backToHome: 'BACK'
        },
        features: [
            {
                id: 'dashboard',
                kicker: 'HOME',
                stat: 'TODAY',
                title: 'Instant overview',
                shortTitle: 'Overview',
                description: 'Outstanding, overdue, and next actions at a glance.',
                bullets: ['Overdue alerts', 'One-tap reminders', 'Quick actions'],
                outcome: 'Know what to chase first.',
                tab: 'home'
            },
            {
                id: 'invoice',
                kicker: 'INVOICE',
                stat: '60 SEC',
                title: 'Build and send fast',
                shortTitle: 'Invoices',
                description: 'Select a client, add line items, and send in under a minute.',
                bullets: ['Client autofill', 'Tax + VAT auto', 'PDF ready'],
                outcome: 'Send before you leave the job.',
                tab: 'invoices'
            },
            {
                id: 'delivery',
                kicker: 'DELIVERY',
                stat: 'LIVE',
                title: 'Track every step',
                shortTitle: 'Tracking',
                description: 'Auto-generate a payment link, email it, and see opens and payments roll in.',
                bullets: ['Payment link auto-built', 'Opens + clicks timeline', 'Auto-reminders queued'],
                outcome: 'Follow up before they forget.',
                tab: 'invoices'
            },
            {
                id: 'stripe',
                kicker: 'PAYMENTS',
                stat: 'STRIPE',
                title: 'Stripe integration',
                shortTitle: 'Payments',
                description: 'Your invoice becomes a checkout. Card paid, payout scheduled, cash hits your account.',
                bullets: ['Checkout link on invoice', 'Instant payment confirmation', 'Payout ETA shown'],
                outcome: 'From sent to settled.',
                tab: 'more'
            },
            {
                id: 'clients',
                kicker: 'CLIENTS',
                stat: 'CRM',
                title: 'Client memory',
                shortTitle: 'Clients',
                description: 'TradeSwift remembers contacts, rates, and notes so the next invoice is ready fast.',
                bullets: ['Auto-fill contact + address', 'Remembered rates', 'Recent notes + jobs'],
                outcome: 'Your client book becomes a shortcut.',
                tab: 'clients'
            },
            {
                id: 'receipts',
                kicker: 'RECEIPTS',
                stat: 'AI SCAN',
                title: 'Scan & archive',
                shortTitle: 'Receipts',
                description: 'AI-powered scans turn paper into a searchable receipt ledger.',
                bullets: ['OCR extraction', 'Line items', 'Searchable archive'],
                outcome: 'Paper to data in seconds.',
                tab: 'more'
            }
        ],
        showcase: {
            dashboard: {
                appName: 'TRADESWIFT PRO',
                greeting: 'Good afternoon,',
                company: 'YOUR BUSINESS',
                outstanding: 'OUTSTANDING',
                overdue: 'OVERDUE',
                quickActions: 'QUICK ACTIONS',
                actions: ['NEW INVOICE', 'SCAN RECEIPT', 'START JOB'],
                recentActivity: 'RECENT ACTIVITY',
                activityClient: 'Northbridge Plumbing',
                activityMeta: '#2026-014 · PAID TODAY'
            },
            invoice: {
                cancel: 'Cancel',
                title: 'NEW INVOICE',
                selectClient: 'Select Client',
                issueDate: 'Issue Date',
                dueDate: 'Due Date',
                lineItems: 'LINE ITEMS',
                addItem: 'Add Item',
                notes: 'NOTES',
                saveDraft: 'Save as Draft',
                saveAndSend: 'Save & Send',
                clientName: 'Northbridge Plumbing Ltd',
                issueValue: '2026-01-18',
                dueValue: '2026-02-17',
                notesValue: 'Payment within 30 days.',
                totals: {
                    subtotal: 'Subtotal',
                    vatAmount: 'VAT Amount',
                    rotDeduction: 'Tax Deduction',
                    grandTotal: 'Total'
                },
                rotLabel: 'TAX',
                items: [
                    { description: 'Labor - bathroom renovation', qty: 4, price: 850, vatRate: 25, isRot: true },
                    { description: 'Materials - tiles', qty: 24, price: 120, vatRate: 25, isRot: false }
                ]
            },
            delivery: {
                back: 'Back',
                edit: 'Edit',
                title: 'INVOICE DETAILS',
                status: { label: 'PAID', tone: 'paid' },
                invoiceNumber: '#2026-014',
                clientLabel: 'Client',
                clientName: 'Northbridge Plumbing Ltd',
                issueLabel: 'Issue Date',
                issueValue: '2026-01-18',
                dueLabel: 'Due Date',
                dueValue: '2026-02-17',
                story: {
                    title: 'Payment link ready',
                    meta: 'Invoice #2026-014 · 8,200 USD',
                    chip: 'AUTO-EMAIL',
                    toLabel: 'To',
                    toValue: 'billing@northbridgeplumbing.com',
                    subjectLabel: 'Subject',
                    subjectValue: 'Invoice #2026-014 from TradeSwift',
                    preview: 'Here is your invoice with a secure card link. Pay by card or bank transfer.',
                    cta: 'PAY INVOICE',
                    helper: 'Auto-reminder queued in 3 days'
                },
                sendTitle: 'Delivery choices',
                sendDescription: 'Pick a channel. Tracking stays on.',
                options: [
                    { label: 'Send via Email', tone: 'default' },
                    { label: 'Send with Payment Link', tone: 'stripe' },
                    { label: 'Share PDF', tone: 'outline' }
                ],
                insights: [
                    { label: 'Opened', value: '2 min', tone: 'info' },
                    { label: 'Payment link', value: 'Clicked', tone: 'success' },
                    { label: 'Reminder', value: 'Queued', tone: 'neutral' }
                ],
                trackingTitle: 'Live timeline',
                tracking: [
                    { label: 'SENT', meta: 'Today 14:28', state: 'complete' },
                    { label: 'DELIVERED', meta: 'Today 14:28', state: 'complete' },
                    { label: 'OPENED', meta: '14:31', state: 'active' },
                    { label: 'PAID', meta: '15:02', state: 'pending' }
                ]
            },
            stripe: {
                title: 'Online Payments',
                description: 'Connect Stripe and turn invoices into checkout. Card paid, payout scheduled, cash in.',
                status: 'ACTIVE',
                flowTitle: 'Payment flow',
                flow: [
                    { label: 'Payment link', value: 'Sent', meta: 'Invoice #2026-014', state: 'complete' },
                    { label: 'Card paid', value: '8,200 USD', meta: 'Visa • 4242', state: 'active' },
                    { label: 'Payout', value: 'Tomorrow', meta: 'SEB • ****42', state: 'pending' }
                ],
                balance: { label: 'Available balance', value: '12,400 USD', meta: 'After fees' },
                info: [
                    { label: 'Business Name', value: 'Northbridge Plumbing' },
                    { label: 'Email', value: 'invoices@tradeswift.se' },
                    { label: 'Country', value: 'United States' },
                    { label: 'Currency', value: 'USD' }
                ],
                capabilities: [
                    { label: 'PAYMENTS', active: true },
                    { label: 'PAYOUTS', active: true }
                ],
                button: 'OPEN STRIPE DASHBOARD'
            },
            clients: {
                title: 'CLIENTS',
                searchPlaceholder: 'Search clients...',
                list: [
                    { name: 'Northbridge Plumbing Ltd', city: 'New York', status: 'ACTIVE', balance: 12450, tone: 'active', focus: true },
                    { name: 'Horizon Builders', city: 'Austin', status: 'ACTIVE', balance: 2900, tone: 'active' },
                    { name: 'Summit Electric', city: 'Denver', status: 'PAID', balance: 0, tone: 'paid' }
                ],
                memory: {
                    title: 'Memory snapshot',
                    subtitle: 'Auto-fill ready',
                    items: [
                        { label: 'Contact', value: 'billing@northbridgeplumbing.com' },
                        { label: 'Address', value: '24 Market Street, New York' },
                        { label: 'Terms', value: '30 days' },
                        { label: 'Rate', value: '85 /hr' }
                    ],
                    note: 'Last job: Bathroom renovation · Paid in 2 days',
                    tags: ['Repeat client', 'Tax eligible', 'Prefers card link']
                },
                autofill: {
                    title: 'Next invoice draft',
                    items: [
                        { label: 'Labor', value: '4h · 85/hr' },
                        { label: 'Materials', value: 'Tiles · 24 pcs' },
                        { label: 'Travel', value: '28 mi' }
                    ],
                    footer: 'Draft built from last invoice'
                },
                summaryLabel: 'Balance Due',
                summaryValue: 15350,
                summaryMeta: 'Across 4 invoices'
            },
            receipts: {
                title: 'RECEIPT LEDGER',
                searchPlaceholder: 'SEARCH LEDGER...',
                scanButton: 'SCAN NEW RECEIPT',
                scanSublabel: 'AI-POWERED ENTRY',
                lineItemsLabel: 'LINES',
                list: [
                    { merchant: 'Byggmax', date: '2026-01-12', total: 1240, lines: 3 },
                    { merchant: 'Bauhaus', date: '2026-01-05', total: 680, lines: 2 }
                ]
            },
            tabs: {
                home: 'HOME',
                invoices: 'INVOICES',
                clients: 'CLIENTS',
                more: 'MORE'
            }
        }
    },
    sv: {
        home: {
            label: 'APPEN',
            title: 'Allt du behöver',
            subtitle: 'Från faktura till betalning — allt på ett ställe.',
            tapHint: 'TRYCK FÖR ATT UTFORSKA',
            exploreAll: 'SE ALLA FUNKTIONER'
        },
        page: {
            label: 'FUNKTIONER',
            title: 'Byggt för praktiskt arbete',
            subtitle: 'Utforska varje funktion i detalj. Tryck på ett kort nedan.',
            swipeHint: 'SVEP FÖR ATT NAVIGERA',
            backToHome: 'TILLBAKA'
        },
        features: [
            {
                id: 'dashboard',
                kicker: 'HEM',
                stat: 'IDAG',
                title: 'Direkt överblick',
                shortTitle: 'Överblick',
                description: 'Utestående, förfallet och nästa steg i en vy.',
                bullets: ['Förfallolarm', 'Snabba påminnelser', 'Snabbval'],
                outcome: 'Se vad du ska jaga direkt.',
                tab: 'home'
            },
            {
                id: 'invoice',
                kicker: 'FAKTURA',
                stat: '1 MIN',
                title: 'Skapa och skicka snabbt',
                shortTitle: 'Fakturor',
                description: 'Välj kund, lägg till rader och skicka på under en minut.',
                bullets: ['Kund autoifyll', 'ROT + moms', 'PDF klart'],
                outcome: 'Skicka innan du lämnar jobbet.',
                tab: 'invoices'
            },
            {
                id: 'delivery',
                kicker: 'LEVERANS',
                stat: 'LIVE',
                title: 'Spåra varje steg',
                shortTitle: 'Spårning',
                description: 'Skapa en betalningslänk, skicka mejlet och se öppningar och betalningar rulla in.',
                bullets: ['Betalningslänk auto-skapad', 'Öppningar + klick i tidslinje', 'Påminnelser i kö'],
                outcome: 'Följ upp innan de glömmer.',
                tab: 'invoices'
            },
            {
                id: 'stripe',
                kicker: 'BETALNINGAR',
                stat: 'STRIPE',
                title: 'Stripe-integration',
                shortTitle: 'Betalningar',
                description: 'Fakturan blir checkout. Kort betalt, utbetalning planerad, pengar in.',
                bullets: ['Checkout-länk på fakturan', 'Direkta betalnotiser', 'Utbetalnings-ETA'],
                outcome: 'Från skickat till utbetalt.',
                tab: 'more'
            },
            {
                id: 'clients',
                kicker: 'KUNDER',
                stat: 'CRM',
                title: 'Kundminne',
                shortTitle: 'Kunder',
                description: 'TradeSwift minns kontakt, priser och anteckningar så nästa faktura är nästan klar.',
                bullets: ['Autoifyll kontakt + adress', 'Kom ihåg priser', 'Senaste jobb + notiser'],
                outcome: 'Din kundbok blir en genväg.',
                tab: 'clients'
            },
            {
                id: 'receipts',
                kicker: 'KVITTON',
                stat: 'AI-SCAN',
                title: 'Skanna & arkivera',
                shortTitle: 'Kvitton',
                description: 'AI-skanning gör papperskvitton till en sökbar kvittobok.',
                bullets: ['OCR-tolkning', 'Rader automatiskt', 'Sökbart arkiv'],
                outcome: 'Papper blir data på sekunder.',
                tab: 'more'
            }
        ],
        showcase: {
            dashboard: {
                appName: 'TRADESWIFT PRO',
                greeting: 'God eftermiddag,',
                company: 'DITT FÖRETAG',
                outstanding: 'UTESTÅENDE',
                overdue: 'FÖRFALLET',
                quickActions: 'SNABBVAL',
                actions: ['NY FAKTURA', 'SKANNA KVITTO', 'STARTA JOBB'],
                recentActivity: 'SENASTE AKTIVITET',
                activityClient: 'Andersson VVS',
                activityMeta: '#2026-014 · BETALD IDAG'
            },
            invoice: {
                cancel: 'Avbryt',
                title: 'NY FAKTURA',
                selectClient: 'Välj kund',
                issueDate: 'Fakturadatum',
                dueDate: 'Förfallodatum',
                lineItems: 'FAKTURARADER',
                addItem: 'Lägg till',
                notes: 'ANTECKNINGAR',
                saveDraft: 'Spara utkast',
                saveAndSend: 'Spara & Skicka',
                clientName: 'Andersson VVS AB',
                issueValue: '2026-01-18',
                dueValue: '2026-02-17',
                notesValue: 'Betalning inom 30 dagar.',
                totals: {
                    subtotal: 'Delsumma',
                    vatAmount: 'Moms',
                    rotDeduction: 'ROT-avdrag',
                    grandTotal: 'Att betala'
                },
                rotLabel: 'ROT',
                items: [
                    { description: 'Arbete - badrumsrenovering', qty: 4, price: 850, vatRate: 25, isRot: true },
                    { description: 'Material - kakel', qty: 24, price: 120, vatRate: 25, isRot: false }
                ]
            },
            delivery: {
                back: 'Tillbaka',
                edit: 'Redigera',
                title: 'FAKTURADETALJER',
                status: { label: 'BETALD', tone: 'paid' },
                invoiceNumber: '#2026-014',
                clientLabel: 'Kund',
                clientName: 'Andersson VVS AB',
                issueLabel: 'Fakturadatum',
                issueValue: '2026-01-18',
                dueLabel: 'Förfallodatum',
                dueValue: '2026-02-17',
                story: {
                    title: 'Betalningslänk klar',
                    meta: 'Faktura #2026-014 · 8 200 SEK',
                    chip: 'AUTO-MEJL',
                    toLabel: 'Till',
                    toValue: 'faktura@anderssonvvs.se',
                    subjectLabel: 'Ämne',
                    subjectValue: 'Faktura #2026-014 från TradeSwift',
                    preview: 'Hej Andersson-teamet — här är fakturan med säker betalningslänk. Betala med kort eller bank.',
                    cta: 'BETALA FAKTURAN',
                    helper: 'Påminnelse schemalagd om 3 dagar'
                },
                sendTitle: 'Leveransval',
                sendDescription: 'Välj kanal. Spårning ingår.',
                options: [
                    { label: 'Skicka via e-post', tone: 'default' },
                    { label: 'Skicka med betalningslänk', tone: 'stripe' },
                    { label: 'Dela PDF', tone: 'outline' }
                ],
                insights: [
                    { label: 'Öppnad', value: '2 min', tone: 'info' },
                    { label: 'Betalningslänk', value: 'Klickad', tone: 'success' },
                    { label: 'Påminnelse', value: 'I kö', tone: 'neutral' }
                ],
                trackingTitle: 'LIVE-TIDSLINJE',
                tracking: [
                    { label: 'SKICKAD', meta: 'Idag 14:28', state: 'complete' },
                    { label: 'LEVERERAD', meta: 'Idag 14:28', state: 'complete' },
                    { label: 'ÖPPNAD', meta: '14:31', state: 'active' },
                    { label: 'BETALD', meta: '15:02', state: 'pending' }
                ]
            },
            stripe: {
                title: 'Online-betalningar',
                description: 'Anslut Stripe och gör fakturor till checkout. Kort betalt, utbetalning planerad, pengar in.',
                status: 'AKTIV',
                flowTitle: 'BETALNINGSFLÖDE',
                flow: [
                    { label: 'Betalningslänk', value: 'Skickad', meta: 'Faktura #2026-014', state: 'complete' },
                    { label: 'Kortbetalning', value: '8 200 SEK', meta: 'Visa • 4242', state: 'active' },
                    { label: 'Utbetalning', value: 'I morgon', meta: 'SEB • ****42', state: 'pending' }
                ],
                balance: { label: 'Tillgängligt saldo', value: '12 400 SEK', meta: 'Efter avgifter' },
                info: [
                    { label: 'Företagsnamn', value: 'Andersson VVS' },
                    { label: 'E-post', value: 'invoices@tradeswift.se' },
                    { label: 'Land', value: 'Sverige' },
                    { label: 'Valuta', value: 'SEK' }
                ],
                capabilities: [
                    { label: 'BETALNINGAR', active: true },
                    { label: 'UTBETALNINGAR', active: true }
                ],
                button: 'ÖPPNA STRIPE DASHBOARD'
            },
            clients: {
                title: 'KUNDER',
                searchPlaceholder: 'Sök kunder...',
                list: [
                    { name: 'Andersson VVS AB', city: 'Stockholm', status: 'AKTIV', balance: 12450, tone: 'active', focus: true },
                    { name: 'Lindholm Bygg', city: 'Uppsala', status: 'AKTIV', balance: 2900, tone: 'active' },
                    { name: 'Ekman El', city: 'Södertälje', status: 'BETALD', balance: 0, tone: 'paid' }
                ],
                memory: {
                    title: 'Kundminne',
                    subtitle: 'Autoifyllt från tidigare jobb',
                    items: [
                        { label: 'Kontakt', value: 'faktura@anderssonvvs.se' },
                        { label: 'Adress', value: 'Vasagatan 12, Stockholm' },
                        { label: 'Villkor', value: '30 dagar' },
                        { label: 'Timpris', value: '850 SEK/tim' }
                    ],
                    note: 'Senaste jobb: Badrumsrenovering · Betald på 2 dagar',
                    tags: ['Återkommande kund', 'ROT-berättigad', 'Föredrar kortlänk']
                },
                autofill: {
                    title: 'Nästa faktura utkast',
                    items: [
                        { label: 'Arbete', value: '4h · 850 SEK' },
                        { label: 'Material', value: 'Kakel · 24 st' },
                        { label: 'Resa', value: '45 km' }
                    ],
                    footer: 'Utkast byggt från senaste fakturan'
                },
                summaryLabel: 'Att betala',
                summaryValue: 15350,
                summaryMeta: 'På 4 fakturor'
            },
            receipts: {
                title: 'KVITTOBOK',
                searchPlaceholder: 'SÖK I BOKEN...',
                scanButton: 'SKANNA NYTT KVITTO',
                scanSublabel: 'AI-DRIVEN INMATNING',
                lineItemsLabel: 'RADER',
                list: [
                    { merchant: 'Byggmax', date: '2026-01-12', total: 1240, lines: 3 },
                    { merchant: 'Bauhaus', date: '2026-01-05', total: 680, lines: 2 }
                ]
            },
            tabs: {
                home: 'HEM',
                invoices: 'FAKTUROR',
                clients: 'KUNDER',
                more: 'MER'
            }
        }
    }
};
