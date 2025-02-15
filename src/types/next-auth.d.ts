import { JWT as DefaultJWT } from "next-auth/jwt";
import { Session as DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    access_token?: string;
    expires_at?: number;
    refresh_token?: string;
    error?: string;
  }
}
