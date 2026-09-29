export type UserSession = {
  userId: string;
  role: "admin" | "operator" | "viewer";
};

export const session: UserSession = {
  userId: "u_001",
  role: "admin",
};
