import NextAuth, {getServerSession} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";


 const handle = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  
});

export {handle as GET, handle as POST}

export async function isUserRequest(req,res) {
    const session = await getServerSession(req,res,authOptions);
    if (!session?.user?.email) {
      res.status(401);
      res.end();
      throw 'not a user';
    }
  }