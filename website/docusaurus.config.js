// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welder by EGOTech - Modular Ship Framework for Starbase',
  tagline:
    'Blueprint and manual for Welder Modular Ship Framework for the game Starbase by Frozenbyte',
  url: 'https://ego-tech.github.io/',
  baseUrl: '/starbase-ship-welder/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'starbase-ship-welder',
  organizationName: 'EGO-Tech',
  deploymentBranch: 'gh-pages',

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
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'EGOTech',
          src: 'egotech/logos/egotech_logo_light_transparent.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Manual',
          },
          {
            to: '/ships',
            position: 'left',
            label: 'Ships',
          },
          {
            to: 'https://github.com/ego-tech/starbase-ship-welder/raw/main/blueprints/framework/welder.zip',
            label: 'Download',
          },
          {
            to: '/changelog',
            position: 'left',
            label: 'Changelog',
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: 'https://github.com/ego-tech/starbase-ship-welder',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/BKwVGvncmN',
            label: 'Discord',
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
                label: 'Manual',
                to: '/docs/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ego-tech/starbase-ship-welder',
              },
              {
                label: 'License',
                href: 'http://creativecommons.org/licenses/by-nc-sa/4.0/',
              },
            ],
          },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'EGOTech Discord',
                href: 'https://discord.gg/BKwVGvncmN',
              },
              {
                label: 'FREE Ship Blueprints',
                href: 'https://github.com/vinteo/starbase-ships',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vincent Teo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
