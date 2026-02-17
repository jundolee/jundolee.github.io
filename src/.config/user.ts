import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: '준의 빌드 로그',
    subtitle: 'Product · AI · Execution',
    description: '제품, AI, 운영에서 얻은 실전 인사이트를 기록합니다.',
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/jundolee',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    footer: [
      '© %year <a target="_blank" rel="noopener noreferrer" href="%website">%author</a>',
      'Built with <a target="_blank" rel="noopener noreferrer" href="https://astro.build/">Astro</a>',
    ],
  },
  seo: {
    twitter: '',
  },
}
