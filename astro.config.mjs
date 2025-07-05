// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from "astro-mermaid";
import starlightThemeObsidian from 'starlight-theme-obsidian';



// https://astro.build/config
export default defineConfig({
  integrations: [
    mermaid(), // Must come BEFORE starlight
    starlight({
      title: "Carles Serra",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/carseven",
        },
        {
          icon: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/carles-serra-vendrell/",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [starlightThemeObsidian()],
    }),
  ],
});
