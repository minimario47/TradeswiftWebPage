import type { Language } from '../i18n/LanguageContext';

type PageSEO = {
  title: string;
  description: string;
  keywords: string;
};

type SEOData = Record<string, Record<Language, PageSEO>>;

export const seoData: SEOData = {
  '/': {
    sv: {
      title: 'TradeSwift Pro \u2013 Faktura App f\u00f6r Hantverkare & Sm\u00e5f\u00f6retagare',
      description:
        'Skapa professionella fakturor, skanna kvitton med AI och ta emot kortbetalningar via Stripe. Gratis att b\u00f6rja.',
      keywords:
        'faktura app, fakturering, hantverkare, sm\u00e5f\u00f6retagare, kvittoskanning, Stripe betalningar, TradeSwift',
    },
    en: {
      title: 'TradeSwift Pro \u2013 Invoice App for Tradespeople & Small Businesses',
      description:
        'Create professional invoices, scan receipts with AI, and accept card payments via Stripe. Free to start.',
      keywords:
        'invoice app, invoicing, tradespeople, small business, receipt scanning, Stripe payments, TradeSwift',
    },
  },
  '/funktioner': {
    sv: {
      title: 'Funktioner \u2013 Fakturering, Kvittoskanning & Betalningar | TradeSwift Pro',
      description:
        'Skapa fakturor p\u00e5 60 sekunder, skanna kvitton med AI, ta emot kortbetalningar via Stripe. Se alla funktioner.',
      keywords:
        'faktura funktioner, kvittoskanning AI, kortbetalningar, Stripe, faktura app funktioner',
    },
    en: {
      title: 'Features \u2013 Invoicing, Receipt Scanning & Payments | TradeSwift Pro',
      description:
        'Create invoices in 60 seconds, scan receipts with AI, accept card payments via Stripe. See all features.',
      keywords:
        'invoice features, receipt scanning AI, card payments, Stripe, invoice app features',
    },
  },
  '/kontakt': {
    sv: {
      title: 'Kundtj\u00e4nst & Vanliga Fr\u00e5gor (FAQ) | TradeSwift Pro',
      description:
        'F\u00e5 svar p\u00e5 vanliga fr\u00e5gor om TradeSwift Pro. Kontakta oss via e-post eller supportformul\u00e4r.',
      keywords:
        'TradeSwift support, kundtj\u00e4nst, FAQ, vanliga fr\u00e5gor, kontakt, hj\u00e4lp',
    },
    en: {
      title: 'Customer Support & FAQ | TradeSwift Pro',
      description:
        'Get answers to common questions about TradeSwift Pro. Contact us via email or support form.',
      keywords: 'TradeSwift support, customer service, FAQ, common questions, contact, help',
    },
  },
  '/om-oss': {
    sv: {
      title: 'Om TradeSwift \u2013 Teamet Bakom Faktura-Appen | TradeSwift Pro',
      description:
        'TradeSwift byggs av Mikail Yenig\u00fcn i Sverige. L\u00e4s mer om varf\u00f6r vi byggde appen och teamet bakom.',
      keywords:
        'om TradeSwift, Mikail Yenig\u00fcn, faktura app Sverige, teamet bakom TradeSwift',
    },
    en: {
      title: 'About TradeSwift \u2013 The Team Behind the Invoice App | TradeSwift Pro',
      description:
        'TradeSwift is built by Mikail Yenig\u00fcn in Sweden. Learn why we built the app and meet the team.',
      keywords: 'about TradeSwift, Mikail Yenig\u00fcn, invoice app Sweden, team behind TradeSwift',
    },
  },
  '/integritetspolicy': {
    sv: {
      title: 'Integritetspolicy | TradeSwift Pro',
      description:
        'L\u00e4s TradeSwift Pro:s integritetspolicy. Local-first: din data stannar p\u00e5 din enhet.',
      keywords: 'integritetspolicy, GDPR, dataskydd, TradeSwift',
    },
    en: {
      title: 'Privacy Policy | TradeSwift Pro',
      description:
        "Read TradeSwift Pro's privacy policy. Local-first: your data stays on your device.",
      keywords: 'privacy policy, GDPR, data protection, TradeSwift',
    },
  },
  '/villkor': {
    sv: {
      title: 'Anv\u00e4ndarvillkor | TradeSwift Pro',
      description: 'L\u00e4s anv\u00e4ndarvillkoren f\u00f6r TradeSwift Pro.',
      keywords: 'anv\u00e4ndarvillkor, villkor, TradeSwift',
    },
    en: {
      title: 'Terms of Service | TradeSwift Pro',
      description: 'Read the terms of service for TradeSwift Pro.',
      keywords: 'terms of service, terms, TradeSwift',
    },
  },
  '/aterbetalning': {
    sv: {
      title: '\u00c5terbetalningspolicy | TradeSwift Pro',
      description:
        'L\u00e4s TradeSwift Pro:s \u00e5terbetalningspolicy f\u00f6r Stripe-betalningar och App Store-k\u00f6p.',
      keywords: '\u00e5terbetalning, refund, Stripe, App Store, TradeSwift',
    },
    en: {
      title: 'Refund Policy | TradeSwift Pro',
      description:
        "Read TradeSwift Pro's refund policy for Stripe payments and App Store purchases.",
      keywords: 'refund policy, Stripe, App Store, TradeSwift',
    },
  },
  '/avbestallning': {
    sv: {
      title: 'Avbest\u00e4llningspolicy | TradeSwift Pro',
      description:
        'L\u00e4s hur du avslutar din TradeSwift Pro-prenumeration och kopplar bort Stripe.',
      keywords: 'avbest\u00e4llning, avsluta prenumeration, TradeSwift',
    },
    en: {
      title: 'Cancellation Policy | TradeSwift Pro',
      description: 'Learn how to cancel your TradeSwift Pro subscription and disconnect Stripe.',
      keywords: 'cancellation, cancel subscription, TradeSwift',
    },
  },
};
