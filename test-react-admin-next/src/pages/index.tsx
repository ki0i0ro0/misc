import type { NextPage } from "next"
import dynamic from "next/dynamic"
import { useSession, signIn, signOut } from "next-auth/react"

const App = dynamic(() => import("../admin/App"), { ssr: false })

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return <App />
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Home
