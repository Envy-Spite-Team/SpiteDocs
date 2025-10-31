// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  trailingSlash: false,
  title: 'Solaris Docs',
  tagline: 'Level Creation Documentation',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://envy-spite-team.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/SolarisDocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Envy-Spite-Team', // Usually your GitHub org/user name.
  projectName: 'SolarisDocs', // Usually your repo name.
  deploymentBranch: 'pages-deploy',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Envy-Spite-Team/SolarisDocs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ens-social.png',
      navbar: {
        title: 'Solaris Docs',
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/Envy-Spite-Team/SpiteDocs',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community & Help',
            items: [
              {
                label: 'Envy & Spite Discord Server',
                href: 'https://discord.gg/KqK5yDsRjQ',
              },
              {
                label: 'Envy & Spite YouTube Channel (Abandoned)',
                href: 'https://www.youtube.com/@EnvySpite'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/Envy-Spite-Team/SpiteDocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Solaris Docs Team, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
