import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "login",
      async authorize(credentials) {
        try {
          const res = await fetch("http://kpim_backend.test/api/login?", {
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

      if (anggota.username) {
        return true;
      }
      return false;
    },
  },
  // use env variable in production
  secret: "VLRiDnWvLTc60iESAQ3Wi11XW8c6g1g24g5v7j317o4YwvOBTCQeJnQe9OlU4TMV",
});
