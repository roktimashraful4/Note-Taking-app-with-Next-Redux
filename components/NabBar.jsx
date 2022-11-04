import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const NabBar = ({setM }) => {
  const router = useRouter()
 
  return (
    <div>
        <div className='flex flex-col gap-5 sm:flex-row py-4 justify-between  items-center  px-9  font-bold  border-b-2 '>
                 <h1 className='text-3xl uppercase'> Roktim Note Taking  </h1>
                 <div className='nav'> 
                 <ul className='flex gap-4'>
                  <li>
                    <Link href='/'> Home </Link>
                  </li>
                  <li>
                      <Link href='/about'> About </Link>
                  </li>
                  <li>
                      <Link href='/contact'> Contact me  </Link>
                  </li>
                 </ul>
                 
                 </div>
                 { router.pathname == '/' && <button className=' bg-red-500 py-2 px-4 rounded-md' onClick={()=>{setM('clearAll')}} > Clear All Notes  </button>}
              </div>
    </div>
  )
}

export default NabBar