import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ GoogleProvider, GitHubProvider ],
 
})