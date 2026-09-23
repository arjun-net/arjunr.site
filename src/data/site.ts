// Edit this file to update all site content — no need to touch components.

export interface Project {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  todo?: boolean; // marks placeholder projects to be replaced
}

export const profile = {
  name: "Arjun Rao",
  tagline: "CS @ UW-Madison · building desktop tools and agentic software",
  location: "Madison, WI",
  links: {
    github: "https://github.com/arjun-net",
    linkedin: "https://linkedin.com/in/TODO-set-your-linkedin-handle", // TODO: set real LinkedIn URL
    email: "mailto:TODO@example.com", // TODO: set real email address
    resume: "/resume.pdf",
  },
};

export const featuredProject: Project & {
  learnings: string;
  screenshotAlt: string;
} = {
  title: "Files",
  description:
    "A cross-platform agentic file browser for people with terabytes of data — sysadmins, developers, photographers. An AI agent searches the disk to find files you can't locate by name. It finds files; it doesn't reorganize them.",
  tech: ["Electron", "React", "TypeScript", "Vite", "esbuild", "electron-builder"],
  repo: "https://github.com/arjun-net/file-explorer",
  // TODO: add a live demo link if/when one exists
  demo: undefined,
  // TODO: replace with a real screenshot/GIF description once the asset is added
  screenshotAlt:
    "TODO: Screenshot or GIF of Files showing the AI agent locating a file on disk",
  // TODO: write 2-4 sentences on the hardest problem you solved / what you learned building this
  learnings:
    "TODO: What I learned / the hardest problem — e.g. how the agent decides where to search across huge, unindexed volumes without scanning everything; tradeoffs between speed and accuracy; lessons from shipping an Electron app across platforms.",
};

export const otherProjects: Project[] = [
  {
    title: "TODO: Project Name",
    description: "TODO: One to two sentences describing what this project does and why it's interesting.",
    tech: ["TODO", "Tech", "Tags"],
    repo: "https://github.com/arjun-net/TODO-repo-name",
    demo: undefined,
    todo: true,
  },
  {
    title: "TODO: Project Name",
    description: "TODO: One to two sentences describing what this project does and why it's interesting.",
    tech: ["TODO", "Tech", "Tags"],
    repo: "https://github.com/arjun-net/TODO-repo-name",
    demo: undefined,
    todo: true,
  },
];

export const skills: string[] = [
  "Python",
  "JavaScript/TypeScript",
  "C++",
  "C",
  "Java",
  "Go",
  "React",
  "Electron",
  "MySQL",
  "Supabase",
  "Git",
];

// TODO: write 2-3 short sentences about yourself
export const about =
  "TODO: 2-3 short sentences about yourself — who you are, what you're curious about, and what kind of software engineering work you're looking for (e.g. summer 2027 internships).";

export const seo = {
  title: `${profile.name} — Software Engineer`,
  description: profile.tagline,
  // TODO: replace public/og-image.svg with a real 1200x630 PNG/JPG and update this path
  ogImage: "/og-image.svg",
};
