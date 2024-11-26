import BASE_RESUME_YAML from "./base.yml";
import { ResumeSchema } from "./schema";

export const BASE_RESUME = ResumeSchema.parse(BASE_RESUME_YAML);
