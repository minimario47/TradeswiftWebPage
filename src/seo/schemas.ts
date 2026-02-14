export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TradeSwift',
    url: 'https://tradeswift.se',
    logo: 'https://tradeswift.se/logo.svg',
    founder: {
      '@type': 'Person',
      name: 'Mikail Yenigün',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@tradeswift.se',
      contactType: 'customer service',
      availableLanguage: ['Swedish', 'English'],
    },
  };
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TradeSwift Pro',
    operatingSystem: 'iOS',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'SEK',
    },
    featureList: [
      'Fakturering',
      'Kvittoskanning med AI',
      'Kortbetalningar via Stripe',
      'iCloud-synk',
      'PDF-export',
      'E-postspårning',
    ],
  };
}

export function faqPageSchema(
  items: Array<{ q: string; a: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function personSchema(
  name: string,
  jobTitle: string,
  image: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    image,
    url: 'https://tradeswift.se/om-oss',
    worksFor: {
      '@type': 'Organization',
      name: 'TradeSwift',
      url: 'https://tradeswift.se',
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TradeSwift Pro',
    url: 'https://tradeswift.se',
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
