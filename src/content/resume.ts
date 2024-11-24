export type About = string;

export interface Skill {
  /** Name of the skill, e.g. 'Github Actions' */
  name: string;
  /** Verbose description of how/when I used this skill. Shown on hover or click. */
  details?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Degree {
  title: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const ABOUT: About = `
I am a Senior Software Engineer with over 10 years of experience in full-stack development, distributed computing, and AI/LLM integrations. I have a strong background in building scalable applications for healthcare, quantitative finance and data analytics, with expertise in Python, Node/TypeScript, React, and cloud infrastructure technologies.
`.trim();

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      {
        name: "Python",
        details:
          "Extensive experience using Python for web development, distributed computing, and data analysis.",
      },
      {
        name: "TypeScript",
        details:
          "Developed front-end applications using TypeScript with React and Next.js.",
      },
      {
        name: "JavaScript",
        details:
          "Used JavaScript for client-side scripting and interactive web features.",
      },
      {
        name: "Rust",
      },
    ],
  },
  {
    category: "Frameworks and Libraries",
    skills: [
      {
        name: "Django",
        details: "Built back-end services and APIs using the Django framework.",
      },
      {
        name: "React",
        details:
          "Created dynamic user interfaces and single-page applications using React.",
      },
      {
        name: "Next.js",
        details:
          "Utilized Next.js for server-side rendering and building React applications.",
      },
      {
        name: "Dask",
        details:
          "Implemented distributed computing solutions with Dask clusters and custom optimizers.",
      },
      {
        name: "Pandas",
        details: "Used Pandas for data manipulation and analysis in Python.",
      },
      {
        name: "NumPy",
        details:
          "Applied NumPy for numerical computing and handling large datasets.",
      },
    ],
  },
  {
    category: "Databases and Storage",
    skills: [
      {
        name: "PostgreSQL",
        details:
          "Managed relational databases using PostgreSQL for application data.",
      },
      {
        name: "Redis",
        details:
          "Implemented Redis for caching and improving application performance.",
      },
      {
        name: "MongoDB",
        details: "Worked with MongoDB for document-oriented data storage.",
      },
      {
        name: "Amazon S3",
        details:
          "Utilized Amazon S3 for distributed caching and storage solutions.",
      },
    ],
  },
  {
    category: "DevOps and Deployment",
    skills: [
      {
        name: "Docker",
        details:
          "Containerized applications using Docker for consistent deployment environments.",
      },
      {
        name: "Kubernetes",
        details:
          "Deployed and managed applications on Kubernetes clusters for scalability and reliability.",
      },
      {
        name: "CI/CD pipelines",
        details:
          "Implemented continuous integration and deployment pipelines to streamline development.",
      },
      {
        name: "Git/GitHub",
        details:
          "Collaborated on code using Git and GitHub for version control and code reviews.",
      },
      {
        name: "Github Actions",
        details:
          "I use them extensively and also have written custom actions that are available on marketplace.",
      },
    ],
  },
  {
    category: "AI and Machine Learning",
    skills: [
      {
        name: "LLM integrations",
        details:
          "Integrated large language models into applications to enhance functionality.",
      },
      {
        name: "ChatGPT function calling",
        details:
          "Developed packages allowing ChatGPT to interact with React applications via function calls.",
      },
      {
        name: "Embeddings",
        details:
          "Created embeddings from internal data to enable semantic search capabilities.",
      },
      {
        name: "Semantic search",
        details:
          "Implemented semantic search in internal chatbots for improved data retrieval.",
      },
    ],
  },
  {
    category: "Cloud and Distributed Computing",
    skills: [
      {
        name: "Distributed systems",
        details:
          "Designed and optimized distributed systems for scalable applications.",
      },
      {
        name: "Dask clusters",
        details:
          "Used Dask clusters for distributed computing tasks and workflow optimization.",
      },
      {
        name: "Cloud deployment strategies",
        details:
          "Deployed applications using cloud infrastructure for high availability and scalability.",
      },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      {
        name: "Leadership",
        details: "Led development teams and managed key projects effectively.",
      },
      {
        name: "Team management",
        details:
          "Coordinated with international teams to achieve project goals.",
      },
      {
        name: "Mentoring",
        details:
          "Mentored colleagues transitioning from operations to engineering roles.",
      },
      {
        name: "Problem-solving",
        details:
          "Developed innovative solutions for complex technical challenges.",
      },
      {
        name: "Communication",
        details:
          "Communicated effectively with cross-functional teams and stakeholders.",
      },
      {
        name: "Collaboration",
        details:
          "Collaborated with teams across different locations and disciplines.",
      },
    ],
  },
];

export const JOBS: Job[] = [
  {
    title: "Senior Software Engineer",
    company: "Man Numeric",
    location: "Boston, MA",
    period: "01/2020 to present",
    achievements: [
      "Created a feature-complete portfolio analytics platform over the course of four years.",
      "Built REST APIs, web applications, excel plugins, slack bots, and browser extensions.",
      "Published various node/python packages for internal use.",
      "Pioneered AI/LLM integrations with existing services within the company.",
      "Optimized legacy workflows via parallelization and distributed caching.",
    ],
  },
  {
    title: "Software Developer",
    company: "MEDITECH",
    location: "Framingham, MA",
    period: "08/2014 to 12/2019",
    achievements: [
      "Led development of an emergency room wait list enhancement that streamlined hospital workflows and automated critical processes; it reportedly has led to decreased wait times.",
      "Developed the proration algorithm, rule-building tools, statistical analysis routines, claims, and statements necessary for 'package billing', a practice popular in medical tourism; the resulting software is currently used in Ireland, the Middle East, and Singapore.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: "pydantic-to-typescript",
    githubUrl: "https://github.com/phillipdupuis/pydantic-to-typescript",
    description: `
    A python package for automatically generating TypeScript types from Pydantic models.
    It's useful for keeping your front-end and back-end models in sync.
    I created this while working on a large project with a team of contractors, and it seems to be broadly useful.
    `.trim(),
  },
];

export const DEGREES: Degree[] = [
  {
    title: "BS in Applied Mathematics-Biology",
    institution: "Brown University",
    location: "Providence, RI",
    period: "09/2010 to 05/2014",
    description:
      "My coursework focused primarily on genomics, probability, statistical inference, and computer programming.",
  },
];
