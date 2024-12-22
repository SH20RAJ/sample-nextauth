"use client"
import { signOut, useSession } from "next-auth/react"
 
export default function Dashboard() {
  const { data: session } = useSession()
 
  if (session?.user) {
    return <p>
      

    
      Name : {session.user.name} <br />
      Email : {session.user.email} <br />
      Image : <img src={session.user.image} alt="profile image"/> <br />


      <button onClick={()=>signOut()}>SignOUT</button>

    </p>
  } else {
 
  return <div>
    <SignIn/>
  </div>
  }
}



import { signIn } from "next-auth/react"
 
export function SignIn() {
  return <button onClick={() => signIn('github')}>Sign In</button>
}
