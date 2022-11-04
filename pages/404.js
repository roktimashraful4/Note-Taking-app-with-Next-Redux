import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='w-full h-screen bg-slate-800 grid place-items-center text-white'>
        <div className='h-[200px]'>
            <h2 className='text-5xl uppercase font-bold '> 404 Page Not Found </h2>
       <Link href='/'><p className='text-center p-4  my-4 border '>  Go Back to home  </p></Link>
        </div>
        
    </div>
  )
}

export default PageNotFound