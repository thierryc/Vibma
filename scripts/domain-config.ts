/** Tool-to-domain mapping for the docs site */

export interface DomainConfig {
  id: string;
  label: string;
  description: string;
  descriptionZhCN: string;
  tools: string[];
}

export const domains: DomainConfig[] = [
  {
    id: "connection",
    label: "Connection",
    description: "Tools for establishing and managing the Figma connection",
    descriptionZhCN: "用于建立和管理 Figma 连接的工具",
    tools: [
      "join_channel",
      "channel_info",
      "reset_tunnel",
      "ping",
    ],
  },
  {
    id: "document",
    label: "Document & Navigation",
    description: "Tools for inspecting and navigating documents and pages",
    descriptionZhCN: "用于检查和浏览文档与页面的工具",
    tools: [
      "get_document_info",
      "get_current_page",
      "set_current_page",
      "create_page",
      "rename_page",
    ],
  },
  {
    id: "node-inspection",
    label: "Node Inspection",
    description: "Tools for reading node data, searching, and exporting",
    descriptionZhCN: "用于读取节点数据、搜索和导出的工具",
    tools: [
      "get_node_info",
      "search_nodes",
      "export_node_as_image",
      "get_selection",
      "set_selection",
    ],
  },
  {
    id: "creation",
    label: "Creation",
    description: "Tools for creating shapes, frames, and text nodes",
    descriptionZhCN: "用于创建形状、框架和文本节点的工具",
    tools: [
      "create_section",
      "create_node_from_svg",
      "create_frame",
      "create_auto_layout",
      "create_text",
    ],
  },
  {
    id: "modification",
    label: "Modification",
    description: "Tools for patching, deleting, cloning, and reparenting nodes",
    descriptionZhCN: "用于修补、删除、克隆和重新排列节点的工具",
    tools: [
      "patch_nodes",
      "delete_node",
      "clone_node",
      "insert_child",
    ],
  },
  {
    id: "styles",
    label: "Styles",
    description: "Tools for creating and managing paint, text, and effect styles",
    descriptionZhCN: "用于创建和管理绘图、文本和效果样式的工具",
    tools: [
      "styles",
    ],
  },
  {
    id: "variables",
    label: "Variables",
    description: "Tools for creating and managing design variables and modes",
    descriptionZhCN: "用于创建和管理设计变量和模式的工具",
    tools: [
      "variable_collections",
      "variables",
      "set_variable_binding",
      "set_explicit_variable_mode",
      "get_node_variables",
    ],
  },
  {
    id: "components",
    label: "Components",
    description: "Tools for creating components, variants, and instances",
    descriptionZhCN: "用于创建组件、变体和实例的工具",
    tools: [
      "components",
      "instances",
    ],
  },
  {
    id: "text-fonts",
    label: "Text & Fonts",
    description: "Tools for modifying text content, properties, and fonts",
    descriptionZhCN: "用于修改文本内容、属性和字体的工具",
    tools: [
      "set_text_content",
      "scan_text_nodes",
      "get_available_fonts",
    ],
  },
  {
    id: "lint-export",
    label: "Lint & Export",
    description: "Tools for linting designs and auto-fixing issues",
    descriptionZhCN: "用于检查设计和自动修复问题的工具",
    tools: [
      "lint_node",
      "lint_fix_autolayout",
    ],
  },
];

/** Lookup: tool name → domain id */
export const toolToDomain = new Map<string, string>();
for (const domain of domains) {
  for (const tool of domain.tools) {
    toolToDomain.set(tool, domain.id);
  }
}
