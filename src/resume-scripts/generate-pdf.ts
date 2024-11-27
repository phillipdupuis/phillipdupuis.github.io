import { Command } from "commander";
import { readFileSync } from "fs";
import path from "path";
import { chromium } from "playwright";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const defaultCssPath = path.join(__dirname, "generate-pdf.css");

export type PaperFormat = "Letter" | "A4" | "Legal";

export interface GeneratePDFOptions {
  /** Path to HTML file or URL of the resume */
  input: string;
  /** Output path for the PDF file */
  output: string;
  /** Optional flag for printing in dark mode, defaults to False */
  dark?: boolean;
  /** Optional paper format, defaults to "Letter" */
  format?: PaperFormat;
  /** Optional scale factor */
  scale?: number;
  /** Optional path to custom CSS file */
  cssPath?: string;
  /** Optional timeout in milliseconds */
  timeout?: number;
}

export async function generateResumePDF({
  input,
  output,
  cssPath,
  dark = false,
  format = "Letter",
  scale = 0.7,
  timeout = 30000,
}: GeneratePDFOptions): Promise<void> {
  const browser = await chromium.launch();

  try {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Emulate dark mode if enabled
    if (dark) {
      await page.emulateMedia({ colorScheme: "dark" });
    }

    // Handle both URL and local file inputs
    if (input.startsWith("http")) {
      await page.goto(input, { waitUntil: "networkidle", timeout });
    } else {
      const htmlContent = readFileSync(input, "utf-8");
      await page.setContent(htmlContent, { waitUntil: "networkidle", timeout });
    }

    // Inject custom CSS if provided
    if (cssPath) {
      const customCss = readFileSync(cssPath, "utf-8");
      await page.addStyleTag({ content: customCss });
    }

    await page.pdf({
      path: output,
      printBackground: true,
      format,
      scale,
    });
  } finally {
    await browser.close();
  }
}

const program = new Command();

program
  .name("generate-pdf")
  .description("Generate a PDF version of your resume from HTML")
  .option("-i, --input <path>", "Input HTML file or URL")
  .option("-o, --output <path>", "Output PDF file path", "resume.pdf")
  .option("--dark", "Use dark mode")
  .option("--format <type>", "Paper format (Letter/A4/Legal)", "Letter")
  .option("--scale <factor>", "Scale factor for the PDF", "0.7")
  .option("--css <path>", "Custom CSS file path", defaultCssPath)
  .option("--timeout <ms>", "Timeout in milliseconds", "30000");

program.parse();

const options = program.opts();

try {
  await generateResumePDF({
    input: options.input,
    output: options.output,
    dark: Boolean(options.dark),
    format: options.format as PaperFormat,
    scale: parseFloat(options.scale),
    cssPath: options.css,
    timeout: parseInt(options.timeout),
  });
  console.log(`✅ PDF generated successfully: ${options.output}`);
} catch (error) {
  console.error("❌ Failed to generate PDF:", error);
  process.exit(1);
}
