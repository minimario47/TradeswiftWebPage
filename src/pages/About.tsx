import { useLanguage } from '../i18n/LanguageContext';
import './About.css';

const CONTENT = {
    en: {
        sectionLabel: 'ABOUT',
        title: 'We build tools for the people who build the world',
        intro:
            'TradeSwift was created by and for tradespeople who want to focus on their craft — not paperwork.',
        missionTitle: 'WHY WE EXIST',
        missionParagraphs: [
            'Every day, thousands of tradespeople lose valuable time to administrative work. Invoices to write. Receipts to sort. Payments to chase.',
            'We believe expertise deserves respect. Your time is worth more than sitting at a desk. TradeSwift Pro handles the paperwork so you can do what you do best.',
            'No unnecessary complexity. No bloated features. Only what actually helps you get paid faster.'
        ],
        teamTitle: 'TEAM',
        teamIntro: 'Three friends since childhood building TradeSwift together.',
        teamMembers: [
            { name: 'MIKAIL YENIGÜN', role: 'Founder & Developer' },
            { name: 'HIEN NGUYEN', role: 'Developer & Support & Engineer' },
            { name: 'WAEL HABOUSH', role: 'Developer & Support & Engineer' }
        ],
        details: {
            companyLabel: 'Company',
            companyValue: 'TradeSwift',
            registeredLabel: 'Registered',
            registeredValue: 'Global',
            contactLabel: 'Contact',
            contactValue: 'support@tradeswift.se'
        },
        philosophyTitle: 'DESIGN PHILOSOPHY',
        philosophyParagraphs: [
            'TradeSwift is built around brutal simplicity. No unnecessary decoration. No distracting animation. Every element exists because it is needed — nothing else.',
            'Professional tools should look like professional tools. We build for users who value function over entertainment.'
        ]
    },
    sv: {
        sectionLabel: 'OM OSS',
        title: 'Vi bygger verktyg för de som bygger Sverige',
        intro:
            'TradeSwift skapades av och för hantverkare som vill fokusera på sitt hantverk — inte pappersarbete.',
        missionTitle: 'VARFÖR VI FINNS',
        missionParagraphs: [
            'Varje dag förlorar tusentals hantverkare värdefull tid på administrativt arbete. Fakturor som ska skrivas. Kvitton som ska sorteras. Betalningar som ska jagas.',
            'Vi tror att expertis förtjänar respekt. Din tid är värd mer än att sitta vid ett skrivbord. TradeSwift Pro hanterar pappersarbetet så att du kan göra det du är bäst på.',
            'Ingen onödig komplexitet. Inga överflödiga funktioner. Bara det som faktiskt hjälper dig att få betalt snabbare.'
        ],
        teamTitle: 'TEAMET',
        teamIntro: 'Tre vänner sedan barndomen som bygger TradeSwift tillsammans.',
        teamMembers: [
            { name: 'MIKAIL YENIGÜN', role: 'Grundare & Utvecklare' },
            { name: 'HIEN NGUYEN', role: 'Utvecklare & Support & Ingenjör' },
            { name: 'WAEL HABOUSH', role: 'Utvecklare & Support & Ingenjör' }
        ],
        details: {
            companyLabel: 'Företag',
            companyValue: 'TradeSwift AB',
            registeredLabel: 'Registrerat',
            registeredValue: 'Sverige',
            contactLabel: 'Kontakt',
            contactValue: 'support@tradeswift.se'
        },
        philosophyTitle: 'DESIGNFILOSOFI',
        philosophyParagraphs: [
            'TradeSwift är byggt kring brutal enkelhet. Ingen onödig dekoration. Ingen distraherande animation. Varje element finns för att det behövs — inget annat.',
            'Professionella verktyg ska se ut som professionella verktyg. Vi bygger för användare som värderar funktion framför underhållning.'
        ]
    }
};

export function About() {
    const { language } = useLanguage();
    const content = CONTENT[language];

    return (
        <div className="about-page">
            <div className="about-container">
                <div className="about-header">
                    <p className="section-label">{content.sectionLabel}</p>
                    <h1>{content.title}</h1>
                    <p>{content.intro}</p>
                </div>

                <div className="about-divider" />

                <div className="about-content">
                    <div className="about-mission">
                        <h2>{content.missionTitle}</h2>
                        {content.missionParagraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="about-team">
                        <h2>{content.teamTitle}</h2>
                        <p className="about-team-intro">{content.teamIntro}</p>
                        {content.teamMembers.map((member) => (
                            <div className="team-member" key={member.name}>
                                <div className="team-member-name">{member.name}</div>
                                <div className="team-member-role">{member.role}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-details">
                    <div className="about-detail">
                        <div className="about-detail-label">{content.details.companyLabel}</div>
                        <div className="about-detail-value">{content.details.companyValue}</div>
                    </div>
                    <div className="about-detail">
                        <div className="about-detail-label">{content.details.registeredLabel}</div>
                        <div className="about-detail-value">{content.details.registeredValue}</div>
                    </div>
                    <div className="about-detail">
                        <div className="about-detail-label">{content.details.contactLabel}</div>
                        <div className="about-detail-value">{content.details.contactValue}</div>
                    </div>
                </div>

                <div className="about-philosophy">
                    <h2>{content.philosophyTitle}</h2>
                    {content.philosophyParagraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
