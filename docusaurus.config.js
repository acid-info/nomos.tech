// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nomos',
  url: 'https://nomos.tech',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Nomos',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: true,
                },
              },
            },
          },
        },
        docs: {
          id: 'root-pages',
          breadcrumbs: false,
          routeBasePath: '/',
          path: 'root-pages',
        },
        generated: {
          jobList: {
            jobBoard: 'nomos',
          },
        },
        og: {},
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        routeBasePath: '/about',
        path: 'about',
      },
    ],
    [
      '@acid-info/docusaurus-umami',
      {
        websiteId: '896c23f7-42d6-40c3-aa82-a77e13ecd899',
        scriptSrc: 'https://umami.bi.status.im/script.js',
        dataDomains: 'nomos.tech,dev.nomos.tech',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: 'search',
          },
          {
            label: 'About Nomos',
            to: '/about',
          },
          {
            label: 'Community',
            to: '/community',
          },
          {
            label: 'Blog',
            href: 'https://blog.nomos.tech/',
          },
          {
            label: 'Join Us',
            to: '/join-us',
          },
          {
            href: 'https://github.com/logos-co/nomos-node',
            position: 'right',
            className: 'header-github-link',
            title: 'Nomos GitHub repository',
            'data-umami-event': 'Github redirection',
            'data-umami-event-source': 'navbar',
          },
        ],
      },
      footer: {
        copyright: 'Nomos',
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/Nomos_tech',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/NYDm83h46b',
                label: 'Discord',
              },
              {
                label: 'Blog',
                href: 'https://blog.nomos.tech/',
              },
            ],
          },
          {
            items: [
              {
                to: '/join-us',
                label: 'Work with us',
              },
              {
                href: 'https://guide.nomos.tech/',
                label: 'Brand Guidelines',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
              {
                href: '/security',
                label: 'Security',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
