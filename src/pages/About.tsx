import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import mikailImg from '../assets/team/mikail.png';
import hienImg from '../assets/team/hien.png';
import waelImg from '../assets/team/wael.png';
import './About.css';

type TeamMemberId = 'mikail' | 'hien' | 'wael';

const CONTENT = {
    en: {
        sectionLabel: 'ABOUT',
        title: 'We build tools for the people who build the world',
        intro: 'TradeSwift was created by and for tradespeople who want to focus on their craft — not paperwork.',
        missionTitle: 'WHY WE EXIST',
        missionParagraphs: [
            'We watched friends lose track of invoices in generic apps. Spreadsheets broke. Nothing felt serious enough.',
            'We believe expertise deserves respect. Your time is worth more than sitting at a desk. TradeSwift Pro handles the paperwork so you can do what you do best.',
            'No unnecessary complexity. No bloated features. Only what actually helps you get paid faster.'
        ],
        teamTitle: 'THE BUILDERS',
        teamIntro: 'Select a team member to read their story.',
        members: {
            mikail: {
                id: 'mikail',
                name: 'MIKAIL YENIGÜN',
                role: 'Founder & Developer',
                image: mikailImg,
                bio: [
                    "I hold a Bachelor of Science, but I received my real education working as a train attendant during my studies. Dealing with delays and frustrated travelers taught me that real work involves people, not just calculations.",
                    "I love sci-fi movies, hate arrogance, and I'm currently trying to learn Italian (very slowly). I built TradeSwift because I believe hard work shouldn't be punished with paperwork."
                ]
            },
            hien: {
                id: 'hien',
                name: 'HIEN NGUYEN',
                role: 'Developer & Support',
                image: hienImg,
                bio: [
                    "I am a Mechanical Engineer, big fan of street photography and expensive mechanical keyboards. I worked as an assistant nurse for years, which taught me that technical skills don't mean much without empathy and patience.",
                    "I spend too much time on Reddit and not enough time running. Coding is my way of creating order in a chaotic world. Also, I make the best coffee in the office."
                ]
            },
            wael: {
                id: 'wael',
                name: 'WAEL HABOUSH',
                role: 'Developer & Engineer',
                image: waelImg,
                bio: [
                    "Mechanical engineer by trade, but my life is defined by what I do offline. I'm at the gym seven days a week, but my heart is in volunteering and fighting for women's rights.",
                    "To recharge, I turn to classical music or escape to my summer cottage. Complex systems fascinate me, whether it's an engine, a symphony, or our app."
                ]
            }
        },
        buttons: {
            backToMission: '← Back to Mission'
        },
        realityTitle: 'THE REALITY',
        realityList: [
            { title: 'THE GRIND', text: "Most features ship after 11pm. Coffee goes cold. We test edge cases until they break, then fix them properly." },
            { title: 'PRESSURE', text: "Unpaid invoices decay visually. Colors shift. Borders thicken. The UI makes you uncomfortable on purpose." },
            { title: 'HANDCRAFTED', text: "Every component is hand-coded. We write our own grid systems, build our own physics. Zero libraries for UI." },
            { title: 'CHAOS TEST', text: "We test with fake companies, imaginary deadlines, invented client names. If it works in chaos, it works in reality." },
            { title: 'ITERATION', text: "Deploy fast. Watch metrics. Deploy faster. We don't wait for perfect. We iterate with data, not opinions." }
        ],
        philosophy: {
            title: 'DESIGN PHILOSOPHY',
            text: [
                'We reject the idea that business software must be boring to be "professional". But we also refuse to make it playful just to be liked.',
                'TradeSwift is built differently. It is a tool, not a toy. Every pixel earns its place. If an animation doesn\'t help you understand data faster, it is removed.',
                'True aesthetics in tools come from clarity, not decoration.'
            ],
            principles: [
                "// NO DECORATION WITHOUT MEANING",
                "// DATA FIRST, ALWAYS",
                "// STATUS COLORS ARE SIGNALS NOT STYLE",
                "// EVERY PIXEL EARNS ITS PLACE",
                "// IF IT SLOWS YOU DOWN IT DIES",
                "// ENGINEERING OVER MARKETING"
            ]
        },
        details: { // Kept for footer context if needed
            companyLabel: 'Company',
            companyValue: 'TradeSwift',
            contactLabel: 'Contact',
            contactValue: 'support@tradeswift.se'
        }
    },
    sv: {
        sectionLabel: 'OM OSS',
        title: 'Vi bygger verktyg för de som bygger Sverige',
        intro: 'TradeSwift skapades av och för hantverkare som vill fokusera på sitt hantverk — inte pappersarbete.',
        missionTitle: 'VARFÖR VI FINNS',
        missionParagraphs: [
            'Vi såg vänner tappa bort fakturor i generiska appar. Kalkylark gick sönder. Inget kändes seriöst nog.',
            'Vi tror att expertis förtjänar respekt. Din tid är värd mer än att sitta vid ett skrivbord. TradeSwift Pro hanterar pappersarbetet så att du kan göra det du är bäst på.',
            'Ingen onödig komplexitet. Inga överflödiga funktioner. Bara det som faktiskt hjälper dig att få betalt snabbare.'
        ],
        teamTitle: 'BYGGARNA',
        teamIntro: 'Välj en medlem för att läsa deras historia.',
        members: {
            mikail: {
                id: 'mikail',
                name: 'MIKAIL YENIGÜN',
                role: 'Grundare & Utvecklare',
                image: mikailImg,
                bio: [
                    "Jag är Teknologie kandidat, men fick min verkliga utbildning när jag jobbade som tågvärd under studietiden. Att hantera förseningar och frustrerade resenärer lärde mig att riktigt arbete handlar om människor.",
                    "Jag älskar sci-fi filmer, hatar arrogans och försöker lära mig italienska (väldigt långsamt). TradeSwift finns för att jag anser att hårt arbete inte ska straffas med pappersarbete."
                ]
            },
            hien: {
                id: 'hien',
                name: 'HIEN NGUYEN',
                role: 'Utvecklare & Support',
                image: hienImg,
                bio: [
                    "Jag är maskiningenjör, stor beundrare av gatufoto och dyra mekaniska tangentbord. Jag arbetade som undersköterska i flera år, vilket lärde mig att teknisk kompetens inte betyder mycket utan empati och tålamod.",
                    "Jag spenderar för mycket tid på Reddit och för lite tid i löpspåret. Kodning är mitt sätt att skapa ordning i en kaotisk värld. Dessutom gör jag kontorets bästa kaffe."
                ]
            },
            wael: {
                id: 'wael',
                name: 'WAEL HABOUSH',
                role: 'Utvecklare & Ingenjör',
                image: waelImg,
                bio: [
                    "Maskiningenjör i grunden, men min fritid definierar vem jag är. Jag är på gymmet sju dagar i veckan, men mitt hjärta ligger i volontärarbete och kampen för kvinnors rättigheter.",
                    "För att ladda batterierna vänder jag mig till klassisk musik eller flyr till sommarstugan. Komplexa system fascinerar mig, vare sig det är en motor, en symfoni eller vår app."
                ]
            }
        },
        buttons: {
            backToMission: '← Tillbaka till Mission'
        },
        realityTitle: 'VERKLIGHETEN',
        realityList: [
            { title: 'SLITET', text: "De flesta funktioner skeppas efter 23:00. Kaffet kallnar. Vi testar element tills de går sönder, sen fixar vi dem på riktigt." },
            { title: 'PRESS', text: "Obetalda fakturor förfaller visuellt. Färger skiftar. Kanter tjocknar. UI:t gör dig obekväm med flit." },
            { title: 'HANTVERK', text: "Varje komponent är handkodad. Vi skriver våra egna rutsystem, bygger vår egen fysik. Inga bibliotek för UI." },
            { title: 'KAOS TEST', text: "Vi testar med falska företag, påhittade deadlines, uppdiktade kundnamn. Om det funkar i kaos, funkar det i verkligheten." },
            { title: 'ITERATION', text: "Deploya snabbt. Kolla metrics. Deploya snabbare. Vi väntar inte på perfekt. Vi itererar med data, inte åsikter." }
        ],
        philosophy: {
            title: 'DESIGNFILOSOFI',
            text: [
                'Vi avvisar tanken att affärssystem måste vara tråkiga för att vara "professionella". Men vi vägrar också att göra det lekfullt bara för sakens skull.',
                'TradeSwift är annorlunda. Det är ett verktyg, inte en leksak. Varje pixel förtjänar sin plats. Om en animation inte hjälper dig att förstå data snabbare, tas den bort.',
                'Sann estetik i verktyg kommer från tydlighet, inte dekoration.'
            ],
            principles: [
                "// INGEN DEKORATION UTAN MENING",
                "// DATA FÖRST, ALLTID",
                "// STATUSFÄRGER ÄR SIGNALER INTE STIL",
                "// VARJE PIXEL MÅSTE FÖRTJÄNAS",
                "// OM DET SINKAR DIG DÖR DET",
                "// INGENJÖRSKONST ÖVER MARKNADSFÖRING"
            ]
        },
        details: {
            companyLabel: 'Företag',
            companyValue: 'TradeSwift AB',
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
            <div className="about-container">
                <div className="about-header animate-fade-in">
                    <p className="section-label">{content.sectionLabel}</p>
                    <h1>{content.title}</h1>
                    <p className="about-intro-text">{content.intro}</p>
                </div>

                <div className="about-divider" />

                <div className="about-layout">
                    {/* LEFT COLUMN: DYNAMIC CONTENT (Mission or Member Bio) */}
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
                                        <img src={selectedMember.image} alt={selectedMember.name} />
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

                    {/* RIGHT COLUMN: TEAM NAVIGATION */}
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

                {/* THE REALITY SECTION */}
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

                {/* DESIGN PHILOSOPHY SECTION - BLACK BACKGROUND */}
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
