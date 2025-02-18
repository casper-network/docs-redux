// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { envConfig } from "./env.config.js";
import { themeNavbarConfig, themeFooterConfig, themeAlgoliaConfig, announcementBarConfig } from "./config/index.js";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Casper Docs",
    tagline: "Casper Documentation",
    favicon: "icon/favicon.ico",
    url: envConfig.siteUrl,
    baseUrl: envConfig.baseUrl,
    // GH Pages deployment config.
    organizationName: envConfig.githubOrganizationName,
    projectName: envConfig.githubProjectName,
    deploymentBranch: envConfig.githubDeploymentBranch,

    trailingSlash: false,
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    onDuplicateRoutes: "throw",
    markdown: {
        format: "detect",
    },
    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    // i18n: {
    //   defaultLocale: 'en',
    //   locales: ['en'],
    // },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: "./src/css/custom.css",
                },
                docs: {
                    path: "./docs",
                    sidebarPath: "./config/sidebar.config.js",
                    //routeBasePath: "docs",
                    //sidebarPath: './sidebars.auto.js',
                    routeBasePath: !envConfig.routePrefix
                        ? "/"
                        : envConfig.routePrefix, // IMPORTANT: Turn on docs-only mode
                    exclude: [
                        // "./contract-dsl/archived",
                        // "./economics/archived",
                        // "./theory",
                    ],
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    // lastVersion: '2.0.0',
                },
                // blog: {
                //   path: "./blog",
                //   include: ['**/*.{md,mdx}'],
                //   routeBasePath: "blog",
                //   blogTitle: "Casper Developer Relations Blog",
                //   blogDescription:
                //     "A blog about all things to do with developing on the Casper Blockchain",
                //   postsPerPage: "ALL",
                //   blogSidebarTitle: "All posts",
                //   blogSidebarCount: "ALL",
                //   showReadingTime: true, // When set to false, the "x min read" won't be shown
                //   readingTime: ({content, frontMatter, defaultReadingTime}) =>
                //     defaultReadingTime({content, options: {wordsPerMinute: 300}}),
                // },
                pages: {
                    path: './src/pages',
                    routeBasePath: 'pages',
                    include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
                    // exclude: [
                    //   '**/_*.{js,jsx,ts,tsx,md,mdx}',
                    //   '**/_*/**',
                    //   '**/*.test.{js,jsx,ts,tsx}',
                    //   '**/__tests__/**',
                    // ],
                    mdxPageComponent: '@theme/MDXPage',
                    // remarkPlugins: [require('./my-remark-plugin')],
                    rehypePlugins: [],
                    beforeDefaultRemarkPlugins: [],
                    beforeDefaultRehypePlugins: [],
                },
            }),
        ],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            algolia: themeAlgoliaConfig,
            navbar: themeNavbarConfig,
            footer: themeFooterConfig,
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            //announcementBar: announcementBarConfig,
            sitemap: {
                lastmod: 'datetime',
                changefreq: 'hourly',
                priority: 0.5,
                ignorePatterns: ['/tags/**'],
                filename: 'sitemap.xml',
            },
        }),
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'condor',
                path: './condor',
                routeBasePath: '/condor',
                sidebarPath: './condor/condor.sidebar.js',
                // ... other options
            },
        ],
        // [
        //     'docusaurus-plugin-dotenv',
        //     {
        //         path: ".env", // The path to your environment variables.
        //         safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
        //         systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
        //         silent: false, //  If true, all warnings will be suppressed
        //         expand: false, // Allows your variables to be "expanded" for reusability within your .env file
        //         defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        //         ignoreStub: true
        //     }
        // ]
    ],
};
console.log(config);
export default config;
