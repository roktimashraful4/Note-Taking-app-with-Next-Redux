import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../store/NoteSlics'

const AddnewMoal = ({isTrue, sets}) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const dispatch = useDispatch();

    const handelSave = ()=> {
        const data = { 
            id : new Date().getTime(),
            title: title,
            dece : desc
        }
        dispatch(addNote(data));
        setTitle('')
        setDesc('')
        sets(false)
    }
   
    return (
        <>
        
            {isTrue  == 'addnote' ? (
                <>
                    <div className="fixed  inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                           
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-slate-700 rounded-md shadow-lg">
                                <div className=" sm:flex">
                                    
                                    <div className="mt-2 text-center sm:ml-4 sm:text-left w-full">
                                        <h4 className="text-lg font-bold my-4  text-white">
                                            ADD NEW LIST
                                        </h4>
                                        <div className='flex flex-col gap-4 text-gray-700  w-full'>
                                            <input type="text" placeholder='Add new title..'
                                                 className='py-3 px-2 rounded outline-none font-semibold'
                                                 value={title}
                                                 onChange={(e)=>{setTitle(e.target.value)}}
                                                 />
                                         <textarea className='py-3 px-2 rounded w-full outline-none font-medium text-gray-700' 
                                         placeholder='Typing something...'  cols="30" rows="10" onChange={(e)=>{setDesc(e.target.value)}} value={desc}></textarea>
                                        </div>
                                         
                                        <div className="items-center gap-2 mt-3 sm:flex">
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white font-semibold bg-green-600 rounded-md hover:bg-green-500"
                                                onClick={handelSave}>
                                                Save
                                            </button>
                                            <button
                                                className="w-full mt-2 p-2.5 flex-1 text-white rounded-md outline-none border "
                                                onClick={() =>
                                                    sets(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default AddnewMoal