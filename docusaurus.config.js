// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Jake Nichols UI Portfolio",
    tagline: "Showcasing My Work and Thoughts",
    favicon: "img/favicon.ico",

    url: "https://jnichols12.github.io/", // Replace with your actual domain
    baseUrl: "/jake-ui-portfolio/",

    organizationName: "jnichols12", // Replace with your GitHub org/user name
    projectName: "jake-ui-portfolio", // Replace with your repo/project name
    deploymentBranch: "main",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false, // Disable docs if not needed
                blog: {
                    showReadingTime: true,
                    // Add any additional blog configuration if needed
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
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Jake Nichols UI Portfolio",
                logo: {
                    alt: "Jake Nichols Portfolio Logo",
                    src: "img/logo.svg",
                },
                items: [
                    { to: "/about-me", label: "About Me", position: "left" },
                    { to: "/projects/mobile-order", label: "Project", position: "left" },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/jnichols12/jake-ui-portfolio",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "About Me",
                        items: [{ label: "About Me", to: "/about-me" }],
                    },
                    {
                        title: "Project",
                        items: [{ label: "Project", to: "/projects/mobile-order" }],
                    },
                    {
                        title: "Blog",
                        items: [{ label: "Blog", to: "/blog" }],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/jnichols12/jake-ui-portfolio",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Jake Nichols UI Portfolio. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
