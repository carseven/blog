import { Client } from "@notionhq/client";
import "dotenv/config";
import fs from "node:fs";
import { NotionToMarkdown } from "notion-to-md";
import sharp from "sharp";

// Maximum width and height for resizing
const maxWidth = 800;
const maxHeight = 600;

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

  const mdBlocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdBlocks);

  // MAP Notion properties to BLOG post metadata
  // Map notion database properties to MD header props
  const headerProps = {
    draft: true,
    title: "",
    image: {
      src: "",
      alt: "",
    },
    publishDate: "",
    category: "",
    author: "",
    tags: [],
  };

  // Ignore draft pages
  const isDraft = properties.draft["checkbox"];
  if (isDraft) {
    console.log("[DRAFT]: SKIP BLOG POST");
    continue;
  }

  for (const propertyKey in properties) {
    const propType = properties[propertyKey].type;
    const propValue = properties[propertyKey][propType];

    if (propertyKey === "title") {
      const { plain_text: alt } = propValue[0];
      headerProps.title = alt;
      continue;
    }

    if (propertyKey === "author") {
      const { name } = propValue || "";
      headerProps.author = name;
      continue;
    }

    if (propertyKey === "draft") {
      headerProps.draft = propValue;
      continue;
    }

    if (propertyKey === "tags") {
      headerProps.tags = (propValue || []).map((tag) => {
        return tag.name;
      });
      continue;
    }

    if (propertyKey === "imageUrl") {
      const { name: imageFileName, file } = propValue[0];
      const imageURL = file?.url;
      const imageResponse = await fetch(imageURL);
      const imageBlob = await imageResponse.blob();

      // Compress images
      const imageBuffer = Buffer.from(await imageBlob.arrayBuffer());

      const compressedImage = await sharp(imageBuffer)
        .resize(maxWidth, maxHeight, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 80 }) // Convert to WebP format
        .toBuffer();

      const imagePath = `/assets/${imageFileName.split(".")[0]}.webp`;
      fs.writeFileSync(`public${imagePath}`, compressedImage);
      headerProps.image.src = imagePath;
      continue;
    }

    if (propertyKey === "imageAlt") {
      if (!propValue[0]) {
        continue;
      }
      const { plain_text: alt } = propValue[0];
      headerProps.image.alt = alt;
      continue;
    }

    if (propertyKey === "publishDate") {
      const { start: publishDate } = propValue;
      headerProps.publishDate = publishDate;
      continue;
    }
  }

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
  console.log(headerProps);
}
