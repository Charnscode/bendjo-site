// Génère public/robots.txt et public/sitemap.xml à partir des gabarits
// dans scripts/, en y insérant l'URL définie dans .env (VITE_SITE_URL).
// Lancé automatiquement avant chaque build (voir "prebuild" dans package.json).

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function readSiteUrl() {
  const envPath = path.join(root, ".env");
  const raw = fs.readFileSync(envPath, "utf-8");
  const match = raw.match(/^VITE_SITE_URL\s*=\s*(.+)$/m);
  if (!match) {
    throw new Error("VITE_SITE_URL introuvable dans .env");
  }
  return match[1].trim().replace(/\/$/, ""); // sans slash final
}

function generate(templateName, outputName, siteUrl) {
  const templatePath = path.join(__dirname, templateName);
  const outputPath = path.join(root, "public", outputName);
  const content = fs.readFileSync(templatePath, "utf-8").replace(/{{SITE_URL}}/g, siteUrl);
  fs.writeFileSync(outputPath, content);
  console.log(`✔ ${outputName} généré avec ${siteUrl}`);
}

const siteUrl = readSiteUrl();
generate("robots.txt.template", "robots.txt", siteUrl);
generate("sitemap.xml.template", "sitemap.xml", siteUrl);
