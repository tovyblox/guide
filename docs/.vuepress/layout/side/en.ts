import type { SidebarConfig } from "@vuepress/theme-default";

export const en: SidebarConfig = {
  "/guide/": [
    {
      text: "Visit the new guides",
      link: "/guides/",
    },
  ],

  "/guides/": [
    {
      text: "Getting Started",
      children: [
        "/guides/",
        "/guides/deploy/setup.md",
        "/guides/deploy/update.md",
      ],
    },

    {
      text: "Permissions",
      children: [
        "/guides/permissions/roles.md",
        "/guides/permissions/inviting-ppl.md",
      ],
    },

    {
      text: "Notices",
      children: ["/guides/notices/creating.md", "/guides/notices/reviewing.md"],
    },

    {
      text: "Settings",
      children: [
        "/guides/settings/color.md",
        "/guides/settings/game-activity.md",
      ],
    },
  ],

  "/ref/": [
    {
      text: "Reference",
      children: ["/ref/cli.md", "/ref/config.md"],
    },
  ],
};
