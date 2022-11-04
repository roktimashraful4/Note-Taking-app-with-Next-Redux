import React, { useEffect, useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { editNote } from '../store/NoteSlics'


const EditNote = ({isEdit , setE, id}) => {
    const eid = id ;  // get id from pros 
    const [titleE, setTitleE] = useState('')
    const [descE , setDescE] = useState('')

    const { notes } = useSelector((state) => state.notes); // get notes from global store 
    const dispatch = useDispatch(); // dexpatch call 
     
    // change button clicked 
    const handelEdit = ()=>{
        const data = { // get new value 
            id : eid,
            title: titleE,
            dece : descE
        }; 
        dispatch(editNote(data)) // send new value action  paylode 
        setE(false) // close the mdoal 
    }; 

    useEffect(()=>{
        // find the the note by the id 
        if(eid != '' ){
            const newNote =  notes.filter(function(notes){ 
            return notes.id === eid;
            });
            setTitleE(newNote[0].title) // set the state 
            setDescE(newNote[0].dece)  // set the state 
        };
    },[eid]);
    
   

  return (
    <>
            {isEdit == 'editeModel' ? (
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
                                    Edite LIST
                                </h4>
                                <div className='flex flex-col gap-4 text-gray-700  w-full'>
                                    <input type="text" placeholder='Add new title..'
                                            className='py-3 px-2 rounded outline-none font-semibold'
                                            value={titleE}
                                            onChange={(e)=>{setTitleE(e.target.value)}}
                                            />
                                        
                                    <textarea className='py-3 px-2 rounded w-full outline-none font-medium text-gray-700'  cols="30" rows="10"    value={descE} onChange={(e)=>{setDescE(e.target.value)}}/>
                                
                                </div>
                                    
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white font-semibold bg-green-600 rounded-md hover:bg-green-500"
                                        onClick={handelEdit}>
                                        Change
                                    </button>
                                    <button className="w-full mt-2 p-2.5 flex-1 text-white rounded-md outline-none border " onClick={() =>  setE(false)}>Cancel </button>
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

export default EditNote