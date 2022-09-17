// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Don't Starve Together Server",
  tagline: "Launch dedicated server at any regions in the world. Be an early fundraiser today!",
  url: 'https://dstserver.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),
    { hashed: true }]
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dstserver', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords', content: 'dont starve together, dst, server, pricing, cheap, regions',
        },
        { name: 'og:image', content: 'https://dstserver.cloud/img/ogimage.png' },
        { name: 'og:image:width', content: '1600' },
        { name: 'og:image:height', content: '630' },
      ],
      navbar: {
        title: "Don't Starve Together Server",
        logo: {
          alt: "Don't Starve Together Server",
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'terms-and-conditions',
            position: 'left',
            label: 'Terms and Policy',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/dstserver/website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Terms and Conditions',
                to: '/docs/terms-and-conditions',
              },
              {
                label: 'Privacy Policy',
                to: '/docs/privacy-policy',
              },
            ],
          },
          {
            title: 'Blogs',
            items: [
              {
                label: 'Fundraising',
                to: '/blog/2022/10/15/seeking-funding'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/dstserver',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chientrm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} dstserver.cloud, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
