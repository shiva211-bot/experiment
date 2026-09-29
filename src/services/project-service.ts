export type ProjectRecord = {
  slug: string;
  title: string;
  category: string;
  status: "Live" | "In Review" | "Planning";
  summary: string;
};

export function getFeaturedProjects(): Promise<ProjectRecord[]> {
  return Promise.resolve([
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
  ]);
}
