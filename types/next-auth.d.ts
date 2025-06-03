import type { DefaultSession, DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      role: "SUPER_ADMIN" | "ADMIN" | "INSTRUCTOR" | "STUDENT";
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role: "SUPER_ADMIN" | "ADMIN" | "INSTRUCTOR" | "STUDENT";
  }
}
