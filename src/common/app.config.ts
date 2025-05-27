/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'OpenChat',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'OpenChat',
  },
  Meta: {
    Description: '',
    SiteName: '',
    ThemeColor: '#32383E',
    TwitterSite: '@iArunprabhakar',
  },
  URIs: {
    Home: 'https:/arun.im',
    CardImage: 'https://big-agi.com/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/',
    OpenProject: 'https://github.com/',
    SupportInvite: 'https://discord.gg',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https:/arun.im',
    TermsOfService: 'https:/arun.im',
  },
  Docs: {
    Public: (docPage: string) => `https://big-agi.com/docs/${docPage}`,
  }
} as const;