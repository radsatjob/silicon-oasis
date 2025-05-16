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

  // Internationalization
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
          routeBasePath: 'docs',  // Docs served at /docs
          sidebarPath: require.resolve('./sidebars.js'), // fix: use require.resolve
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // fix: use require.resolve
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          llamastore: {
            specPath: "https://raw.githubusercontent.com/liblaber/llama-store/main/spec.yaml",
            outputDir: "docs/API",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Home',
      logo: { alt: 'Logo', src: '/img/first-cartoon.png' },
      items: [
        { to: '/docs/intro', label: 'Documentation', position: 'left' },  // Added trailing slash for consistency
        { to: '/contact', label: 'API', position: 'left' },      // Added leading slash to be absolute path
      ],
    },
    /*
    footer: {
      style: 'light',
      links: [
        {
          title: 'Resources',
          items: [{ label: 'Documentation', to: '/docs' }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Your Company.`,
    },
    */
  },
};

export default config;
