import { z } from "zod";

function readFromEnv(val: string | undefined): string | undefined {
  if (val && val.startsWith("$")) {
    return process.env[val.slice(1)];
  }
  return val;
}

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  address: z.string().optional().transform(readFromEnv),
  phone: z.string().optional().transform(readFromEnv),
  website: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
});
export type Contact = z.infer<typeof ContactSchema>;

export const AboutSchema = z.string();
export type About = z.infer<typeof AboutSchema>;

export const BADGE_COLORS = [
  "dark",
  "blue",
  "red",
  "green",
  "yellow",
  "indigo",
  "purple",
  "pink",
] as const;
export type BadgeColor = (typeof BADGE_COLORS)[number];

export const SkillGroupSchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
  color: z.optional(z.enum(BADGE_COLORS)),
});
export type SkillGroup = z.infer<typeof SkillGroupSchema>;

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

// const SectionName = z.union([
//   z.literal("contact"),
//   z.literal("about"),
//   z.literal("skills"),
//   z.literal("jobs"),
//   z.literal("projects"),
//   z.literal("degrees"),
// ]);
// export type SectionName = z.infer<typeof SectionName>;

export const ResumeSchema = z.object({
  contact: ContactSchema,
  about: AboutSchema,
  skills: z.array(SkillGroupSchema),
  jobs: z.array(JobSchema),
  projects: z.array(ProjectSchema),
  degrees: z.array(DegreeSchema),
});
export type Resume = z.infer<typeof ResumeSchema>;
