export type ProjectCardData = {
  title: string;
  summary: string;
  category: string;
  status: "Live" | "In Review" | "Planning";
};

export const featuredProjects: ProjectCardData[] = [
  {
    title: "Aurora Arc",
    summary: "Immersive, time-based narrative and motion choreography for a holographic installation.",
    category: "Immersive Experience",
    status: "Live",
  },
  {
    title: "Lattice Echo",
    summary: "Interactive prototype for a museum-grade spatial storytelling lab.",
    category: "Research Demo",
    status: "In Review",
  },
  {
    title: "Orbital Archive",
    summary: "Research showcase with project metadata, repo links, and deployment documentation.",
    category: "Portfolio Platform",
    status: "Planning",
  },
];
