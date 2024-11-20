// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */

export default {
  title: 'SecOS',
  tagline: '专注于 AIoT 领域的安全操作系统内核',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://qclic.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // Allow to customize the presence/absence of a trailing slash at the end of 
  // URLs/links, and how static HTML files are generated:
  // undefined (default): keeps URLs untouched, and emit /docs/myDoc/index.html for /docs/myDoc.md
  // true: add trailing slashes to URLs/links, and emit /docs/myDoc/index.html for /docs/myDoc.md
  // false: remove trailing slashes from URLs/links, and emit /docs/myDoc.html for /docs/myDoc.md
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qclic', // Usually your GitHub org/user name.
  projectName: 'qclic.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  // The behavior of Docusaurus when it detects any broken link.
  // he broken links detection is only available for a production build (docusaurus build).
  onBrokenLinks: 'throw',
  // The behavior of Docusaurus when it detects any broken Markdown link.
  // he broken links detection is only available for a production build (docusaurus build).
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
          label: '简体中文',
          direction: 'ltr',
          htmlLang: 'zh-CN',
          calendar: 'gregory',
          path: 'zh',
        },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/qclic/qclic.github.io',
        },
        blog: {
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:'https://github.com/qclic/qclic.github.io',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          // mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
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
      // image: 'img/docusaurus-social-card.jpg',
      announcementBar: {
        id: 'tips',
        content:'相关文档正在逐步整理中。。。',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'SecOS',
        hideOnScroll: true,
        logo: {
          alt: 'SecOS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog', 
            label: '博客', 
            position: 'left'
          },
          {
            label: "更新日志",
            position: "left",
            items: [
              {
                label: "📝 查看日志",
                href: "/docs/CHANGELOG",
              },
              {
                label: "🚀 路线图",
                href: "/docs/plan",
              },
            ],
          },
          {
            href: 'https://github.com/qclic',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'qclic',
                href: 'https://github.com/qclic',
              },
              {
                label: 'ArceOS',
                href: 'https://github.com/arceos-org',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'openEuler',
                href: 'https://www.openeuler.org/',
              },
              {
                label: 'Phytium',
                href: 'https://gitee.com/phytium_embedded',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quancheng Laboratory Innovation Center`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
