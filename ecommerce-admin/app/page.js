'use client'

import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center ">
    <div className='text-center w-full'>
    <button onClick={signIn('google')}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login with Google</button>
    </div>
  </div>
  )
}