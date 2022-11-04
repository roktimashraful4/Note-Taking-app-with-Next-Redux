import React from 'react'
import { FaPen, FaTrashAlt } from "react-icons/fa";


const ListCard = ({id, title,dec,  setModel, setid}) => {
    return (
        <div>
            <div className='card bg-slate-700 p-4  rounded-lg drop-shadow-[0px_2px_5px_rgba(255,255,255,0.401)]  text-clip overflow-hidden ... '>
                <div className='cardTite flex justify-between items-center'>
                    <h2 className='bold text-2xl truncate my-2'>{title}</h2>
                    <div className='flex mx-3'>
                        <FaPen className=' cursor-pointer hover:rotate-[45deg] mr-3' onClick={()=>{setid(id),  setModel("editeModel") }  }/>
                        <FaTrashAlt className=' cursor-pointer hover:text-red-500 ' onClick={()=>{ setid(id),  setModel('deleteModal') } } />
                    </div>
                    
                </div>
                <div className='cardbody '>
                    <div className='text-ellipsis overflow-hidden ...'> <pre> {dec} </pre> </div>
                </div>
            </div>
        </div>
    )
}

export default ListCard