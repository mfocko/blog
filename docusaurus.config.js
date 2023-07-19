// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

require("dotenv").config();

class Subject {
  constructor(subject, description) {
    this.subject = subject;
    this.description = description;
  }

  docs() {
    return [
      "@docusaurus/plugin-content-docs",
      {
        id: this.subject,
        path: this.subject,
        routeBasePath: this.subject,
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateTime: true,
        editUrl: "https://gitlab.com/mfocko/blog/tree/main",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ];
  }

  navbar() {
    return {
      type: "doc",
      docId: `${this.subject}-intro`,
      docsPluginId: this.subject,
      position: "left",
      label: `${this.subject.toUpperCase()}: ${this.description}`,
    };
  }

  footer() {
    return {
      label: `${this.subject.toUpperCase()}: ${this.description}`,
      to: this.subject,
    };
  }
}

const subjects = [
  new Subject("ib002", "Algorithms"),
  // new Subject("ib015", "Non-imperative programming"),
  // new Subject("ib110", "Introduction to informatics"),
  // new Subject("ib111", "Foundations of programming"),
  new Subject("pb071", "C"),
  new Subject("pb161", "C++"),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "mf",
  tagline: "blog and additional materials for courses at φ",

  url: process.env.URL,
  baseUrl: process.env.BASE_URL,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
            require.resolve("./src/css/cascadia_code.css"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    ...subjects.map((s) => s.docs()),
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "blog",
        routeBasePath: "blog",
        path: "./blog",
        feedOptions: {
          type: "all",
          description: "mf's blog",
        },
        editUrl: "https://gitlab.com/mfocko/blog/tree/main",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
    "docusaurus-plugin-sass",
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
    // {
    //   href: "https://cdn.jsdelivr.net/npm/hack-font/build/web/hack.min.css",
    //   type: "text/css",
    //   crossorigin: "anonymous",
    // },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "mf",
        items: [
          ...subjects.map((s) => s.navbar()),
          {
            to: "blog",
            position: "right",
            label: "Blog",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Matej Focko.`,
        links: [
          {
            title: "Git",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/mfocko",
              },
              {
                label: "GitLab",
                href: "https://gitlab.com/mfocko",
              },
              {
                label: "Gitea (self-hosted)",
                href: "https://git.mfocko.xyz/mfocko",
              },
            ],
          },
          {
            title: "Social #1",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/mfocko/",
              },
              {
                label: "Fosstodon",
                href: "https://fosstodon.org/@m4tt_314",
              },
              {
                label: "Hachyderm.io",
                href: "https://hachyderm.io/@m4tt_314",
              },
            ],
          },
          {
            title: "Social #2",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/m4tt_314",
              },
              {
                label: "Twitch",
                href: "https://twitch.tv/m4tt_314",
              },
              {
                label: "Ko-fi",
                href: "https://ko-fi.com/m4tt_314",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          "ada",
          "bash",
          "csharp",
          "dot",
          "haskell",
          "java",
          "nix",
          "pascal",
          "ruby",
          "rust",
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      mermaid: {
        options: {
          fontFamily:
            "Iosevka,'Iosevka Term','Cascadia Code','JetBrains Mono','Fira Code',monospace",
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "0VXRFPR4QF",
        // Public API key: it is safe to commit it
        apiKey: "9d4d452117cfaaae3e51b9568e22aa16",
        indexName: "mfocko",
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
