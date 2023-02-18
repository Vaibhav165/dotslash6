<<<<<<< HEAD
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoClient } from 'mongodb';
import { compare } from "bcryptjs";
import { connect } from "/lib/mongodb";
import User from "/models/User";

export default NextAuth({
  //Configure JWT
  session: {
    jwt: true,
  },
  //Specify Provider
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(credentials) {
        //Connect to DB
        await connect();

        //Get all the users
        // const users = await client.db().collection('Users')

        //Find user with the email
        const result = await User.findOne({
          email: credentials.email,
        });

        if (!result) {
          // client.close();
          throw new Error("No user found with the email");
        }
        //Check hased password with DB password
        const checkPassword = await compare(
          credentials.passowrd,
          result.passowrd
        );
        //Incorrect password - send response
        if (!checkPassword) {
          // client.close();
          throw new Error("Password doesnt match");
        }
        //Else send success response
        // client.close();
        return { email: result.email };
      },
    }),
  ],
});
=======
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: '330603055409-c65g3uv9cli10bvpnhv9pmcrebgb4ul9.apps.googleusercontent.com',
			clientSecret: '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'
		}),
	],
	secret: 'SJDKJSDJHKSHJKSKJGFJSHDJGAJDSHSKJwuwqieyhvkdjnjbhfHDFKSHJ'
})
>>>>>>> 9f2c992041557c229ecc11bc116314a2e11dd738
