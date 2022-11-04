import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote } from '../store/NoteSlics'

const DeleteNote = ({isDelete,setd, id }) => {
    const dispatch = useDispatch();
  const handelDelete = ()=>{
    dispatch(deleteNote(id)); 
    setd(false)
    
  }
  return (
    <>
    {isDelete =="deleteModal" ? (
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
                                    Are you Sure ? 
                                </h4>
                                <p> You went to deete this note for forever !!</p>
                                 
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white font-semibold bg-red-600 rounded-md hover:bg-red-500"
                                        onClick={handelDelete}>
                                        Save
                                    </button>
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white rounded-md outline-none border "
                                        onClick={() =>
                                            setd(false)
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
  )
}

export default DeleteNote