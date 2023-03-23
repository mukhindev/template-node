export const PORT = process.env.PORT || 4000;

export const MODE = (process.env.MODE || "development") as
  | "development"
  | "production"
  | "test";
