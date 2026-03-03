import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeFlexoki from "starlight-theme-flexoki";

export default defineConfig({
  site: "https://ufira-ai.github.io",
  base: "/Vibma",
  integrations: [
    starlight({
      title: "Vibma",
      description: "AI-powered MCP bridge for designing in Figma",
      plugins: [starlightThemeFlexoki()],
      locales: {
        root: { label: "English", lang: "en" },
        "zh-cn": { label: "简体中文", lang: "zh-CN" },
      },
      defaultLocale: "root",
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/ufira-ai/Vibma" },
      ],
      sidebar: [
        {
          label: "Getting Started",
          translations: { "zh-CN": "快速开始" },
          link: "/",
        },
        {
          label: "Tools",
          translations: { "zh-CN": "工具" },
          items: [
            { label: "Connection", slug: "tools/connection", translations: { "zh-CN": "连接" } },
            { label: "Document & Navigation", slug: "tools/document", translations: { "zh-CN": "文档与导航" } },
            { label: "Node Inspection", slug: "tools/node-inspection", translations: { "zh-CN": "节点检查" } },
            { label: "Creation", slug: "tools/creation", translations: { "zh-CN": "创建" } },
            { label: "Modification", slug: "tools/modification", translations: { "zh-CN": "修改" } },
            { label: "Styles", slug: "tools/styles", translations: { "zh-CN": "样式" } },
            { label: "Variables", slug: "tools/variables", translations: { "zh-CN": "变量" } },
            { label: "Components", slug: "tools/components", translations: { "zh-CN": "组件" } },
            { label: "Text & Fonts", slug: "tools/text-fonts", translations: { "zh-CN": "文本与字体" } },
            { label: "Lint & Export", slug: "tools/lint-export", translations: { "zh-CN": "检查与导出" } },
          ],
        },
        { label: "Endpoints", slug: "endpoints", translations: { "zh-CN": "端点" } },
        { label: "Prompts", slug: "prompts", translations: { "zh-CN": "提示词" } },
      ],
      customCss: ["./src/styles/tool-reference.css"],
    }),
  ],
});
