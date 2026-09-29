export const siteConfig = {
  name: "Holo Exhibition Platform",
  description:
    "Production-ready foundation for 3D holographic exhibitions, project showcases, and deployment operations.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  socials: {
    github: "https://github.com/shiva211-bot/experiment",
  },
};

export const showcaseProjects = [
  {
    slug: "aurora-arc",
    title: "Aurora Arc",
    category: "Immersive Experience",
    status: "Live",
    summary: "A cinematic holographic storytelling installation built for cultural showcases.",
  },
  {
    slug: "lattice-echo",
    title: "Lattice Echo",
    category: "Research Demo",
    status: "In Review",
    summary: "Spatial audio and volumetric motion study for interactive exhibition design.",
  },
  {
    slug: "orbital-archive",
    title: "Orbital Archive",
    category: "Portfolio Platform",
    status: "Planning",
    summary: "A searchable archive of project narratives and deployment metadata for client profiles.",
  },
];
