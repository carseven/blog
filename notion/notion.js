import { Client } from "@notionhq/client";
import "dotenv/config";
import fs from "node:fs";
import { NotionToMarkdown } from "notion-to-md";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});
const n2m = new NotionToMarkdown({ notionClient: notion });

const dbRows = (
  await notion.databases.query({
    database_id: process.env.BLOG_DB_ID,
  })
).results;

for (const dbRow of dbRows) {
  const { id, properties } = dbRow;

  console.log(`RETRIEVE PAGE ${id}`);

  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);

  // MAP Notion properties to BLOG post metadata
  const headerProps = {
    draft: false,
    title: "Example",
    image: {
      src: "/assets/ConditionalProps.png",
      alt: "Example",
    },
    publishDate: "2024-01-01",
    category: "Tech",
    author: "Carles Serra",
    tags: ["Typescript", "Type Safety"],
  };
  // Map notion database properties to MD header props
  // for (const propertyKey in properties) {
  //   const prop = properties[propertyKey];
  //   if (propertyKey === "draft") {
  //   }
  // }

  const header = `---
draft: ${headerProps.draft}
title: "${headerProps.title}"
image:
  { src: "${headerProps.image.src}", alt: "${headerProps.image.alt}" }
publishDate: "${headerProps.publishDate}"
category: "${headerProps.category}"
author: "${headerProps.author}"
tags: [${headerProps.tags
    .map((tag) => {
      return `"${tag}"`;
    })
    .join(",")}]
---
 
  `;

  fs.writeFileSync(
    `src/content/blog/${"example-todo-retrieve-name"}.md`,
    header + mdString.parent
  );

  console.log(header + mdString.parent);
  // Inject header with the properties
}
