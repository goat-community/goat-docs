// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const DarkTheme = require('@site/src/custom_theme.ts');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GOAT DOCS",
  tagline: "GOATs are cool",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
      },
      de: {
        label: "Deutsch",
      },
    },
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({locale, versionDocsDirPath, docPath}) => {
            const translation = locale || 'en';
            if (translation !== 'en') {
              return `https://github.com/goat-community/goat-docs/edit/main/i18n/${translation}/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/goat-community/goat-docs/edit/main/docs/${docPath}`;
          },
          lastVersion: "current",
          versions: {
            current: {
              label: "2.0",
              path: "2.0",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Plan4Better",
          src: "https://assets.plan4better.de/img/logo/plan4better_standard.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://plan4better.de/en/blog/",
            label: "Blog",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right"
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/goat-community/goat",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Community",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/plan4better/",
              },
              {
                label: "GitHub",
                href: "https://github.com/goat-community",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Plan4Better",
                to: "https://plan4better.de/en/",
              },
              {
                label: "Blog",
                to: "https://plan4better.de/en/blog/",
              },
              {
                label: "References",
                href: "https://plan4better.de/en/references/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Plan4Better, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
