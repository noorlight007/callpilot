// config/site.ts
// Single source of truth for site-wide URL and route constants.

export const SITE_URL = 'https://callpilot.pro';
export const SITE_NAME = 'CallPilot';

// Permanent logo used in NewsArticle schema.
export const SITE_LOGO = `${SITE_URL}/og-image.png`;

export const ROUTES = {
  home: '/',
  news: '/news',
  contact: '/get-started',
  integrations: '/integrations',
  jobadder: '/integrations/jobadder',
  ashby: '/integrations/ashby',
  recruitCrm: '/integrations/recruit-crm',
} as const;
