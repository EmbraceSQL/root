import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "EmbraceSQL",
  tagline: "Love SQL? Love TypeScript? Hate ORMs. You're 🏡.",
  favicon: "img/favicon.svg",
  url: " https://embracesql.github.io/",
  baseUrl: "/",
  deploymentBranch: "main",
  organizationName: "EmbraceSQL",
  projectName: "embracesql.github.io", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/docs",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.svg",
    navbar: {
      title: "EmbraceSQL",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          label: "Documentation",
          to: "/docs",
        },
        {
          href: "https://github.com/EmbraceSQL/root",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intoduction",
              to: "/docs",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/embracesql/root",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
