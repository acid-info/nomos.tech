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
      '@acid-info/docusaurus-fathom',
      {
        siteId: 'TDSPJ',
        scriptUrl: 'https://fathom.bi.status.im/tracker.js',
        // hostnames: ['nomos.tech'],
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
            label: 'Join Us',
            to: '/join-us',
          },
          {
            href: 'https://github.com/logos-co/nomos-node',
            position: 'right',
            className: 'header-github-link',
            title: 'Nomos GitHub repository',
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
            ],
          },
        ],
      },
    }),
}

module.exports = config
