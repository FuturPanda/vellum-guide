export const en = {
  label: 'English',
  lang: 'en',
  title: 'Vellum Guide',
  description: 'The Vellum user guide. Written by the Vellum community.',
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: 'Vellum Guide',
        items: [
          { text: 'Overview', link: '/' }
        ]
      },
      {
        text: 'About this guide',
        items: [
          { text: 'Contributors', link: '/contributors' },
          { text: 'Contribute', link: '/contribute' }
        ]
      }
    ],
    footer: {
      message: 'Written by the <a href="/contributors">Vellum community</a>. Licensed CC BY 4.0.'
    },
    editLink: {
      pattern: 'https://github.com/gacharles23/vellum-guide/edit/main/docs/:path',
      text: 'Suggest an edit to this page'
    },
    byline: {
      prefix: 'Written by the',
      community: 'Vellum community',
      contributorsLink: '/contributors',
      checkedAgainst: 'checked against'
    }
  }
}
