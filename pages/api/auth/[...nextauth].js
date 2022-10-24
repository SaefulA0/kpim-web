import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      async authorize(credentials) {
        try {
          const res = await fetch("http://kpim_backend.test/api/login", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const user = await res.json();
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
    async signIn({ user }) {
      const anggota = user.user;
      console.log(anggota);
      if (anggota.username) {
        return true;
      }
      return false;
    },
  },
  // use env variable in production
  secret: "SxByQjyiod54hf33UTMgOoGUc6IKNvxaFZIfZiXnA8vRjXgIdokUE6LOWNC2G3wp",
});
