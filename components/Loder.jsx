import React from 'react'

const Loder = () => {
  return (
    
    <div className="border border-blue-300 h-[120px]  shadow rounded-md p-4 max-w-sm w-full ">
  <div className="animate-pulse grid gap-3  ">
    <div className='flex'>
        <div className='w-full h-5 bg-slate-200 rounded-lg '></div>
         <div className='w-5 h-5 bg-slate-200 rounded-full mx-2'></div>
         <div className='w-5 h-5 bg-slate-200 rounded-full mx-2'></div>
    </div>
  <div className=' w-full h-2 bg-slate-200 rounded-lg '></div>
  <div className=' w-full h-2 bg-slate-200 rounded-lg '></div>
  <div className=' w-full h-2 bg-slate-200 rounded-lg '></div>
  </div>
</div>
  )
}

export default Loder