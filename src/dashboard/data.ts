export const authUser = {
  name: "Ops Admin",
  role: "Project Director",
  email: "ops@example.com",
};

export type DashboardCard = {
  title: string;
  value: string;
  tone: "cyan" | "violet" | "slate";
};

export const dashboardCards: DashboardCard[] = [
  { title: "Exhibitions live", value: "18", tone: "cyan" },
  { title: "Projects pending", value: "6", tone: "violet" },
  { title: "Deployments today", value: "3", tone: "slate" },
];
