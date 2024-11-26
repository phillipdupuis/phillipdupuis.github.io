import { z } from "zod";

function $dollarMeansGetFromEnv(val: string | undefined): string | undefined {
  if (val && val.startsWith("$")) {
    return process.env[val.slice(1)];
  }
  return val;
}

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string().optional().transform($dollarMeansGetFromEnv),
  phone: z.string().optional().transform($dollarMeansGetFromEnv),
  website: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
});
export type Contact = z.infer<typeof ContactSchema>;

export const AboutSchema = z.string();
export type About = z.infer<typeof AboutSchema>;

export const SKILL_CATEGORY_COLORS = [
  "dark",
  "blue",
  "red",
  "green",
  "yellow",
  "indigo",
  "purple",
  "pink",
] as const;
export type SkillCategoryColor = (typeof SKILL_CATEGORY_COLORS)[number];
export const SkillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
  color: z.optional(z.enum(SKILL_CATEGORY_COLORS)),
});
export type SkillCategory = z.infer<typeof SkillCategorySchema>;

export const JobSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  period: z.string(),
  achievements: z.array(z.string()),
});
export type Job = z.infer<typeof JobSchema>;

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
});
export type Project = z.infer<typeof ProjectSchema>;

export const DegreeSchema = z.object({
  title: z.string(),
  institution: z.string(),
  location: z.string(),
  period: z.string(),
  description: z.string().optional(),
});
export type Degree = z.infer<typeof DegreeSchema>;

export const ResumeSchema = z.object({
  sections: z
    .optional(z.array(z.string()))
    .default(["contact", "about", "skills", "jobs", "projects", "degrees"]),
  contact: ContactSchema,
  about: AboutSchema,
  skills: z.array(SkillCategorySchema).default([]),
  jobs: z.array(JobSchema).default([]),
  projects: z.array(ProjectSchema).default([]),
  degrees: z.array(DegreeSchema).default([]),
});
export type Resume = z.infer<typeof ResumeSchema>;
