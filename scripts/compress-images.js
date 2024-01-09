import fs from "node:fs";
import sharp from "sharp";

// Define input and output directories
const inputDirectory = "public/assets";
const outputDirectory = "public/assets";
const fileMatch = /.(jpg|jpeg|png)$/;

// Maximum width and height for resizing
const maxWidth = 800;
const maxHeight = 600;

// Ensure the output directory exists
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// List all files in the input directory
const files = fs.readdirSync(inputDirectory);
// Loop through each file and apply advanced compression techniques
files.forEach((file) => {
  if (file.match(fileMatch)) {
    sharp(`${inputDirectory}/${file}`)
      .resize(maxWidth, maxHeight, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 }) // Convert to WebP format
      .toFile(
        `${outputDirectory}/${file.replace(fileMatch, ".webp")}`,
        (err, info) => {
          if (err) {
            console.error(`Error processing ${file}: ${err}`);
          } else {
            console.log(`Advanced compression applied to ${file}`);
            console.log(info);
            fs.rmSync(`${inputDirectory}/${file}`);
          }
        }
      );
  }
});
