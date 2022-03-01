const nav = require('./nav')
module.exports = {
  title: 'Tovy guides',
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      // options
    }],
  ],
  themeConfig: {
    logo: '/assets/Icon_Transparent@2x.png',
    sidebar: {
      '/guide/': [
        {
          text: 'Welcome',
          link: '/guide/',
        },
        {
          text: 'Hosting',
          children: [
            '/guide/permissions/inviting-and-giving-people-roles.md',
            '/guide/permissions/roles.md',
          ]
        }, {
          text: 'Permissions',
          children: [
            '/guide/hosting/creating-a-mongodb-database.md',
            '/guide/hosting/hosting-on-a-vps-recommended.md',
            '/guide/hosting/hosting-on-railway-free.md',
            '/guide/hosting/updating-railway.md',
          ]
        }, {
          text: 'Notices',
          children: [
            '/guide/notices/how-to-create-a-notice.md',
            '/guide/notices/how-to-review-notices.md'
          ]
        }, {

          text: 'Settings',
          children: [
            '/guide/settings/changing-the-color.md',
            '/guide/settings/how-to-track-staff-activity-in-game.md'
          ]
        }
        
      ],
      '/reference/': [
        {
          text: 'Reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Guide',
        link: '/guide/',
      },{
        text: 'Github',
        link: 'https://github.com/ItsWHOOOP/tovy',
      },
    ],
  },
}
