/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session } = useSession()
  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50">
      <Head>
        <title>Simple Application</title>
        <meta name="description" content="Simple application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='container mx-auto p-6 text-center space-y-4'>
        <header className='text-3xl pb-4 text-gray-800'>
          Welcome to simple application
        </header>
        {session && <div>
            <img className="w-24 h-24 rounded-full mx-auto" src={`${session?.user?.image}`} alt="User Image"/>
            <div className='text-xs py-3 text-gray-700'>Signed in as {session?.user?.email || ''} <br /></div>
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
