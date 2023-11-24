// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.vsLight;
const darkCodeTheme = themes.dracula;

const math = require("remark-math");
const katex = require("rehype-katex");

require("dotenv").config();

class Docs {
  constructor(path, description) {
    this.path = path;
    this.description = description;
  }

  docs() {
    return [
      "@docusaurus/plugin-content-docs",
      {
        id: this.path,
        path: this.path,
        routeBasePath: this.path,
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateTime: true,
        editUrl: "https://github.com/mfocko/blog/tree/main",
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ];
  }

  navbar() {
    return {
      type: "doc",
      docId: `${this.path}-intro`,
      docsPluginId: this.path,
      label: `${this.description}`,
    };
  }

  footer() {
    return {
      label: `${this.description}`,
      to: this.path,
    };
  }
}

const subjects = [
  new Docs("algorithms", "Algorithms"),
  // new Docs("functional", "Non-imperative programming"),
  // new Docs("automata", "Formal languages and automata"),
  // new Docs("foundations", "Foundations of programming"),
  new Docs("c", "C"),
  new Docs("cpp", "C++"),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "mf",
  tagline: "blog and additional materials for courses at φ",

  url: "https://blog.mfocko.xyz",
  baseUrl: "/",

  // GitHub Pages deployment config.
  organizationName: "mfocko",
  projectName: "blog",
  trailingSlash: true,

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
            require.resolve("./src/css/jetbrains_mono.css"),
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
        editUrl: "https://github.com/mfocko/blog/tree/main",
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
          {
            type: "dropdown",
            label: "Additional FI MU materials",
            items: subjects.map((s) => s.navbar()),
          },
          {
            to: "contributions",
            label: "Contributions",
          },
          {
            to: "talks",
            label: "Talks",
          },
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
          "python",
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
