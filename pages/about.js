import Head from 'next/head'
import React from 'react'
import NabBar from '../components/NabBar'

const about = () => {
  return (
    <div className='w-full min-h-screen bg-slate-800 text-white'>
         <Head>
        <title>Abut | Roktim Note Taking app </title>
        <meta name="description" content="Take your note locally " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NabBar/>
      <div className='w-full p-5 lg:w-1/2  mx-auto'>
        <h1 className='text-3xl font-semibold uppercase'> Roktim Note Taking app </h1>
        <p className='my-5'> This Note taking app ussing local storage to save the all notes from your browser </p>
        <p className='font-semibold'> This app creaeted the help of : </p>
         <ul className='mx-6'>
            <li> -  Next Js </li>
            <li> -  Tailwindcss </li>
            <li> -  Redux </li>
            <li> -  localStorage </li>
         </ul>
         <p> Thanks you,  to visting the note taking app <br/>  <span className=" italic">-Roktim Ashraful </span>  </p>
      </div>
    </div>
  )
}

export default about