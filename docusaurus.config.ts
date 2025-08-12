import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LearnHub',
  tagline: 'LearnHub is a platform for learning web development and AI',
  favicon: 'img/learnhub.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'souvikpramanikgit', // Usually your GitHub org/user name.
  projectName: 'learnhub', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  // Add plugins section
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Whether to enable index docs pages
        docsRouteBasePath: ['docs'],
        // Whether to enable index blog pages
        blogRouteBasePath: ['blog'],
        // `hashed` is recommended as long-term-cache of index file
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: ['en'],
        // Highlight search terms on target page
        highlightSearchTermsOnTargetPage: true,
        // Explicit search result path for linking to pages
        explicitSearchResultPath: true,
      },
    ],
  ],
  
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: '',
      apiKey: '',
      indexName: '',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'algolia-search',
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      hideOnScroll: true, 
      title: 'LearnHub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/learnhub.png',
      },
      items: [
        {
          to: '/#courses-section',
          label: 'Courses',
          position: 'left',
          className: 'navbar__link',
          activeBaseRegex: '^$', // prevents it from being marked as active
          target: '_self',
        },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        // Add search button to navbar
        {
          type: 'search',
          position: 'right',
        },
        {to: '/news', label: 'Tech News', position: 'left'},
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/souvikpramanikgit/LearnHub',
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
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/YmSKSDfH',
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
              href: 'https://github.com/souvikpramanikgit/LearnHub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;