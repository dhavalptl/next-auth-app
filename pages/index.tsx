import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()
  console.log(" Data ", session);
  return (
    <div>
      <Head>
        <title>Next Auth App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto p-6 text-center space-y-4'>
        <header className='text-2xl'>
          Welcome to Next Auth App 🚀
        </header>
        {session && <div>
            <div className='text-lg py-3'>Signed in as {session?.user?.email || ''} <br /></div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => signOut()}>
              Sign out ({session?.user?.name || ''})
            </button>
            
        </div>}
        {!session && <div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => signIn()}>
              Sign in
            </button>
        </div>}
      </main>
    </div>
  )
}

export default Home