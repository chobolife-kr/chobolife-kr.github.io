import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Chobolife",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ko-KR",
    baseUrl: "chobolife-kr.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Gowun Batang",
        body: "Noto Sans KR",
        code: "Nanum Gothic Coding",
      },
      colors: {
        lightMode: {
          light: "#FEFDFB",
          lightgray: "#F0EEEB",
          gray: "#9A9791",
          darkgray: "#4A4845",
          dark: "#1A1918",
          secondary: "#C96A4B",
          tertiary: "#D4956A",
          highlight: "rgba(201, 106, 75, 0.1)",
          textHighlight: "#FFCB7788",
        },
        darkMode: {
          light: "#1A1918",
          lightgray: "#2D2B29",
          gray: "#6B6966",
          darkgray: "#D4D2CF",
          dark: "#F5F3F0",
          secondary: "#E8956D",
          tertiary: "#D4956A",
          highlight: "rgba(232, 149, 109, 0.12)",
          textHighlight: "#FFCB7755",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
