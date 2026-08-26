import type { UserConfig } from '~/types'
import siteSettings from '../content/site-settings.json'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: siteSettings.title,
    subtitle: '',
    description: siteSettings.description,
    navLinks: siteSettings.navLinks,
    socialLinks: siteSettings.socialLinks,
    footer: [
      '© %year <a target="_blank" rel="noopener noreferrer" href="%website">%author</a>',
      'Built with <a target="_blank" rel="noopener noreferrer" href="https://astro.build/">Astro</a>',
    ],
  },
  seo: {
    twitter: '',
  },
  analytics: {
    googleAnalyticsId: 'G-XZSFNTLMN3',
    googleTagManagerId: 'GTM-MWTLKV3Q',
  },
}
