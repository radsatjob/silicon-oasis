// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Portfolio',
  tagline: 'Radhika is coolest and hottest :)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://radsatjob.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/silicon-oasis/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'radsatjob', // Usually your GitHub org/user name.
  projectName: 'silicon-oasis', // Usually your repo name.

 // onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
 
    
    presets: [
      [
        '@docusaurus/preset-classic', // Keep this if you're using the classic preset
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // ... other docs plugin options
            //routeBasePath: 'docs/guides', // Set the base path for your regular docs
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
      [
        'redocusaurus',
        {
          specs: [
            {
              spec: 'static/openapi/openapi.yaml', // Replace with the actual path to your OpenAPI file
              route: '/docs/api', // The URL where your API docs will be accessible (e.g., your-website.com/api)
            },
            // You can add more API specifications here for multiple APIs or versions
            // {
            //   spec: 'https://another-api.example.com/openapi.json',
            //   route: '/api/v2',
            // },
          ],
          theme: {
            primaryColor: '#61dafb', // Optional: Customize the primary color of the Redoc UI
          },
        },
      ],
    ],

  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Showcase',
          },

          {
            to: '/docs/api',
            position: 'left',
            label: 'API',
          },

          
        ],
      },
     /*  footer: {
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
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      }, */
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
