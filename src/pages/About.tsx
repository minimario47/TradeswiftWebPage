import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { SEO } from '../components/SEO';
import { organizationSchema, breadcrumbSchema, personSchema } from '../seo/schemas';
import './About.css';

const mikailImg = '/team/mikail.png';
const hienImg = '/team/hien.png';
const waelImg = '/team/wael.png';

type TeamMemberId = 'mikail' | 'hien' | 'wael';

const CONTENT = {
    en: {
        sectionLabel: 'ABOUT',
        title: 'TradeSwift is built by Mikail, with help from friends',
        intro: 'I built TradeSwift to help tradespeople spend less time on admin and more time on paid work. Hien and Wael help me run and improve the app.',
        missionTitle: 'WHY I BUILT THIS',
        missionParagraphs: [
            'I watched friends lose time and money because generic invoicing tools did not fit how real trade work happens day to day.',
            'TradeSwift focuses on speed, clarity, and getting paid. The goal is simple: less paperwork, fewer payment delays, and more control.',
            'No bloated workflows. No feature clutter. Just the tools that actually help independent professionals move faster.'
        ],
        teamTitle: 'THE CREW',
        teamIntro: 'TradeSwift is creator-led by Mikail, with hands-on help from Hien and Wael.',
        members: {
            mikail: {
                id: 'mikail',
                name: 'MIKAIL YENIGÜN',
                role: 'Creator & Developer',
                image: mikailImg,
                bio: [
                    "I hold a Bachelor of Science, but my real education came from working directly with people and seeing how much time gets lost to unnecessary admin.",
                    "I built TradeSwift because hard work should not be punished with paperwork. My focus is building a fast, reliable app that helps you invoice better and get paid sooner."
                ]
            },
            hien: {
                id: 'hien',
                name: 'HIEN NGUYEN',
                role: 'Helper · Support & QA',
                image: hienImg,
                bio: [
                    "I'm one of Mikail's childhood friends, and I'm a mechanical engineer. I help TradeSwift with product feedback, testing, and support quality so real users get clear answers and stable releases.",
                    "I'm focused on practical details, workflow clarity, and catching friction points before they become problems."
                ]
            },
            wael: {
                id: 'wael',
                name: 'WAEL HABOUSH',
                role: 'Helper · Product & Ops',
                image: waelImg,
                bio: [
                    "I'm one of Mikail's childhood friends, and I'm a mechanical engineer. I help with day-to-day app operations, feature feedback, and release checks so TradeSwift stays useful in real work situations.",
                    'My focus is reliability, better execution, and keeping the app practical for contractors under pressure.'
                ]
            }
        },
        buttons: {
            backToMission: '← Back to Mission'
        },
        realityTitle: 'HOW I WORK',
        realityList: [
            { title: 'LATE NIGHTS', text: 'Most features ship after regular hours. I test edge cases until they break, then fix them properly.' },
            { title: 'REAL PRESSURE', text: 'Payment flow and invoice clarity are always prioritized. If it slows you down, it gets redesigned.' },
            { title: 'HANDCRAFTED', text: 'Core UI and behavior are hand-built to stay sharp, fast, and maintainable.' },
            { title: 'CHAOS TEST', text: 'I test with realistic invoice scenarios, difficult client timelines, and messy edge cases before release.' },
            { title: 'ITERATION', text: 'I ship improvements continuously based on real usage and feedback, not guesswork.' }
        ],
        philosophy: {
            title: 'DESIGN PHILOSOPHY',
            text: [
                'I reject the idea that business software must be boring to feel professional.',
                'TradeSwift is a tool, not a toy. Every pixel should help you understand status faster and take action quicker.',
                'Good product design for this category is clarity under pressure.'
            ],
            principles: [
                '// CLARITY OVER NOISE',
                '// DATA FIRST, ALWAYS',
                '// STATUS MUST BE IMMEDIATELY READABLE',
                '// EVERY PIXEL MUST EARN ITS PLACE',
                '// IF IT SLOWS YOU DOWN, IT GOES',
                '// RELIABILITY OVER HYPE'
            ]
        },
        details: {
            companyLabel: 'Creator',
            companyValue: 'Mikail Yenigün',
            contactLabel2: 'Helpers',
            contactValue2: 'Hien Nguyen · Wael Haboush',
            contactLabel: 'Contact',
            contactValue: 'support@tradeswift.se'
        }
    },
    sv: {
        sectionLabel: 'OM',
        title: 'TradeSwift byggs av Mikail, med hjälp av vänner',
        intro: 'Jag byggde TradeSwift för att hjälpa hantverkare lägga mindre tid på administration och mer tid på betalt arbete. Hien och Wael hjälper mig att driva och förbättra appen.',
        missionTitle: 'VARFÖR JAG BYGGDE DETTA',
        missionParagraphs: [
            'Jag såg vänner förlora tid och pengar eftersom generiska fakturaverktyg inte passade hur hantverksjobb faktiskt fungerar i vardagen.',
            'TradeSwift fokuserar på snabbhet, tydlighet och att du får betalt. Målet är enkelt: mindre pappersjobb, färre betalningsförseningar och mer kontroll.',
            'Ingen onödig komplexitet. Ingen funktionsstök. Bara verktyg som faktiskt hjälper egenföretagare att jobba snabbare.'
        ],
        teamTitle: 'TEAMET',
        teamIntro: 'TradeSwift leds av Mikail som skapare, med praktisk hjälp av Hien och Wael.',
        members: {
            mikail: {
                id: 'mikail',
                name: 'MIKAIL YENIGÜN',
                role: 'Skapare & Utvecklare',
                image: mikailImg,
                bio: [
                    'Jag är teknologie kandidat, men min verkliga utbildning kom från arbete nära människor och att se hur mycket tid som försvinner i onödig administration.',
                    'Jag byggde TradeSwift eftersom hårt arbete inte ska straffas med pappersarbete. Mitt fokus är en snabb och pålitlig app som hjälper dig fakturera bättre och få betalt snabbare.'
                ]
            },
            hien: {
                id: 'hien',
                name: 'HIEN NGUYEN',
                role: 'Hjälper till · Support & QA',
                image: hienImg,
                bio: [
                    'Jag är en av Mikails barndomsvänner och är maskiningenjör. Jag hjälper TradeSwift med produktfeedback, testning och supportkvalitet så användare får tydliga svar och stabila releaser.',
                    'Mitt fokus är praktiska detaljer, tydliga flöden och att hitta friktion innan det blir problem.'
                ]
            },
            wael: {
                id: 'wael',
                name: 'WAEL HABOUSH',
                role: 'Hjälper till · Produkt & Drift',
                image: waelImg,
                bio: [
                    'Jag är en av Mikails barndomsvänner och är maskiningenjör. Jag hjälper till med daglig appdrift, feature-feedback och releasekontroller så TradeSwift fungerar i verkliga arbetssituationer.',
                    'Mitt fokus är stabilitet, bättre genomförande och att appen känns praktisk för entreprenörer under press.'
                ]
            }
        },
        buttons: {
            backToMission: '← Tillbaka'
        },
        realityTitle: 'SÅ JOBBAR JAG',
        realityList: [
            { title: 'SENA KVÄLLAR', text: 'De flesta funktioner skeppas efter ordinarie arbetstid. Jag testar edge cases tills de går sönder och fixar dem ordentligt.' },
            { title: 'RÄTT PRIORITERING', text: 'Betalningsflöde och tydliga fakturor går alltid först. Om något sinkar dig görs det om.' },
            { title: 'HANDKODAT', text: 'Kärn-UI och beteenden byggs för hand för att hålla hög hastighet och kvalitet.' },
            { title: 'KAOSTEST', text: 'Jag testar med realistiska fakturafall, svåra tidslinjer och stökiga edge cases innan release.' },
            { title: 'ITERATION', text: 'Jag förbättrar löpande utifrån verklig användning och feedback, inte gissningar.' }
        ],
        philosophy: {
            title: 'DESIGNFILOSOFI',
            text: [
                'Jag avvisar idén att affärsprogram måste vara tråkiga för att uppfattas som professionella.',
                'TradeSwift är ett verktyg, inte en leksak. Varje pixel ska hjälpa dig förstå status snabbare och agera direkt.',
                'Bra design i den här typen av produkt är tydlighet under press.'
            ],
            principles: [
                '// TYDLIGHET FÖRE BRUS',
                '// DATA FÖRST, ALLTID',
                '// STATUS SKA LÄSAS DIREKT',
                '// VARJE PIXEL MÅSTE FÖRTJÄNAS',
                '// OM DET SINKAR DIG, TAS DET BORT',
                '// PÅLITLIGHET FÖRE HYPE'
            ]
        },
        details: {
            companyLabel: 'Skapare',
            companyValue: 'Mikail Yenigün',
            contactLabel2: 'Hjälper till',
            contactValue2: 'Hien Nguyen · Wael Haboush',
            contactLabel: 'Kontakt',
            contactValue: 'support@tradeswift.se'
        }
    }
};

export function About() {
    const { language } = useLanguage();
    const content = CONTENT[language];
    const [selectedMemberId, setSelectedMemberId] = useState<TeamMemberId | null>(null);

    const membersList = Object.values(content.members) as Array<typeof content.members.mikail>;
    const selectedMember = selectedMemberId ? content.members[selectedMemberId] : null;

    return (
        <div className="about-page">
            <SEO
                path="/om-oss"
                jsonLd={[
                    organizationSchema(),
                    personSchema('Mikail Yenigün', 'Creator & Developer', 'https://www.tradeswift.se/team/mikail.png'),
                    personSchema('Hien Nguyen', 'Support & QA', 'https://www.tradeswift.se/team/hien.png'),
                    personSchema('Wael Haboush', 'Product & Ops', 'https://www.tradeswift.se/team/wael.png'),
                    breadcrumbSchema([
                        { name: 'TradeSwift Pro', url: 'https://www.tradeswift.se/' },
                        { name: language === 'sv' ? 'Om oss' : 'About', url: 'https://www.tradeswift.se/om-oss/' },
                    ]),
                ]}
            />
            <div className="about-container">
                <div className="about-header animate-fade-in">
                    <p className="section-label">{content.sectionLabel}</p>
                    <h1>{content.title}</h1>
                    <p className="about-intro-text">{content.intro}</p>
                </div>

                <div className="about-divider" />

                <div className="about-layout">
                    <div className="about-dynamic-content">
                        {selectedMember ? (
                            <div className="member-bio-container animate-slide-in">
                                <button
                                    className="btn-back-mobile"
                                    onClick={() => setSelectedMemberId(null)}
                                >
                                    {content.buttons.backToMission}
                                </button>

                                <div className="member-bio-header">
                                    <div className="member-portrait">
                                        <img src={selectedMember.image} alt={`${selectedMember.name} - ${selectedMember.role} at TradeSwift`} />
                                    </div>
                                    <div className="member-info-header">
                                        <h2>{selectedMember.name}</h2>
                                        <span className="member-role-badge">{selectedMember.role}</span>
                                    </div>
                                </div>

                                <div className="member-bio-text">
                                    {selectedMember.bio.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="mission-container animate-fade-in">
                                <h2>{content.missionTitle}</h2>
                                {content.missionParagraphs.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="about-team-nav">
                        <div className="team-nav-header">
                            <h3>{content.teamTitle}</h3>
                            {!selectedMember && <p>{content.teamIntro}</p>}
                        </div>

                        <div className="team-list">
                            {membersList.map((member) => (
                                <button
                                    key={member.id}
                                    className={`team-member-btn ${selectedMemberId === member.id ? 'active' : ''}`}
                                    onClick={() => setSelectedMemberId(member.id === selectedMemberId ? null : member.id as TeamMemberId)}
                                >
                                    <span className="member-btn-name">{member.name}</span>
                                    <span className="member-btn-role">{member.role}</span>
                                    {selectedMemberId === member.id && <span className="member-indicator">●</span>}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="reality-section">
                    <h2 className="section-title">{content.realityTitle}</h2>
                    <div className="reality-grid">
                        {content.realityList.map((item, index) => (
                            <div className="reality-card" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="philosophy-section">
                    <div className="philosophy-content">
                        <div className="philosophy-text-column">
                            <h2 className="philosophy-title">{content.philosophy.title}</h2>
                            {content.philosophy.text.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="philosophy-principles-column">
                            {content.philosophy.principles.map((line, index) => (
                                <div className="principle-item" key={index}>
                                    <code>{line}</code>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="about-footer-grid">
                    <div className="about-details">
                        <div className="detail-item">
                            <span className="detail-label">{content.details.companyLabel}</span>
                            <span className="detail-value">{content.details.companyValue}</span>
                        </div>
                        {'contactLabel2' in content.details && 'contactValue2' in content.details && (
                            <div className="detail-item">
                                <span className="detail-label">{content.details.contactLabel2}</span>
                                <span className="detail-value">{content.details.contactValue2}</span>
                            </div>
                        )}
                        <div className="detail-item">
                            <span className="detail-label">{content.details.contactLabel}</span>
                            <a href={`mailto:${content.details.contactValue}`} className="detail-value link">
                                {content.details.contactValue}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
