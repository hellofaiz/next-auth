
import Head from 'next/head'
import Layout from '@/layout/layout'
import { useSession, signIn, signOut } from 'next-auth/react'


export default function Login() {
  const { data: session } = useSession()
  console.log(session);
  async function handleGoogleSignIn() {
    signIn('google', { callbackUrl: 'http://localhost:3000' })
  }

  return (
    <Layout className="container">

      <Head>
        <title>Login</title>
        <link rel="icon" href="/vercel.svg" />

      </Head>
      <main>
        <div className="input-button">
          {/* signup with google */}
          <h1>Sign up</h1>
          <hr />
          <button onClick={handleGoogleSignIn}>
            Sign up With Google
          </button>
        </div>

      </main >
    </Layout>

  )
}
