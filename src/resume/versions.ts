import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "yaml";
import { ResumeSchema, type Resume } from "./schema";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function resumeFromYamlFile(filePath: string): Resume {
  const fullPath = path.isAbsolute(filePath)
    ? filePath
    : path.join(__dirname, filePath);
  const text = readFileSync(fullPath, "utf8");
  return ResumeSchema.parse(parse(text));
}

export const BASE_RESUME = resumeFromYamlFile("base.yml");
