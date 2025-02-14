import { Session as ISession } from "next-auth";

declare module "next-auth" {
  interface Session extends ISession {
    access_token?: string;
  }

  interface JWT {
    access_token?: string;
  }
}
