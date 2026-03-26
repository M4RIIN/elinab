export const DEFAULT_SITE_URL = 'https://m4riin.github.io/elinab';

export const siteConfig = {
  brandName: 'Elodie Mignot',
  legalName: 'Elodie Mignot',
  businessType: 'BeautySalon',
  siteName: 'Elodie Mignot - Prestations et formations esthetiques',
  titleSuffix: 'Elodie Mignot',
  defaultTitle: 'Prestations et formations esthetiques a Saint-Orens-de-Gameville | Elodie Mignot',
  defaultDescription:
    "Prestations esthetiques sur-mesure et formations professionnelles a Saint-Orens-de-Gameville, pres de Toulouse.",
  defaultKeywords: [
    'prestations esthetiques saint-orens-de-gameville',
    'formations esthetiques toulouse',
    'beaute du regard',
    'soins du visage',
    'maquillage semi-permanent',
    'drainage bresilien',
    'maderotherapie',
    'rehaussement de cils',
  ],
  email: 'elinabesthetique@gmail.com',
  phone: '+33754763722',
  displayPhone: '07 54 76 37 22',
  city: 'Saint-Orens-de-Gameville',
  region: 'Occitanie',
  postalCode: '',
  country: 'FR',
  areaServed: ['Saint-Orens-de-Gameville', 'Toulouse', 'Balma', 'Labège', 'Ramonville-Saint-Agne'],
  instagram: 'https://www.instagram.com/elinabesthetiqueetformations/',
  facebook: 'https://www.facebook.com/profile.php?id=61586676360257',
};

export const siteUrl = process.env.SITE_URL || DEFAULT_SITE_URL;

export const staticRoutes = [
  '/',
  '/prestations',
  '/formations',
  '/contact',
  '/mentions-legales',
  '/politique-de-confidentialite',
];

export const getAbsoluteUrl = (path = '/') => new URL(path, siteUrl).toString();

export const getBaseSchema = () => ({
  '@context': 'https://schema.org',
  '@type': siteConfig.businessType,
  '@id': `${getAbsoluteUrl('/') }#localbusiness`,
  name: siteConfig.brandName,
  legalName: siteConfig.legalName,
  url: getAbsoluteUrl('/'),
  image: getAbsoluteUrl('/elodie-mignot-logo.png'),
  logo: getAbsoluteUrl('/elodie-mignot-logo.png'),
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country,
  },
  areaServed: siteConfig.areaServed.map((city) => ({
    '@type': 'City',
    name: city,
  })),
  priceRange: '€€',
  sameAs: [siteConfig.instagram, siteConfig.facebook],
});

export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${getAbsoluteUrl('/')}#website`,
  url: getAbsoluteUrl('/'),
  name: siteConfig.siteName,
  publisher: {
    '@id': `${getAbsoluteUrl('/')}#localbusiness`,
  },
  inLanguage: 'fr-FR',
});
