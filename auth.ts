import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Spotify,
  ],
  pages: {
    signIn: "/signIn",
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({token, account}) {
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
      
      return token
    },
    async session({session, token}) {
      if(session) {
        session = Object.assign({}, session, {access_token: token.access_token})
      }

      return session
    }
  }
});