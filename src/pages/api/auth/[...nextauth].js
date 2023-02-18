import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "330603055409-c65g3uv9cli10bvpnhv9pmcrebgb4ul9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  secret: "SJDKJSDJHKSHJKSKJGFJSHDJGAJDSHSKJwuwqieyhvkdjnjbhfHDFKSHJ",
});
