import Head from 'next/head'

import { useEffect, useState } from "react";

import { HiDocumentAdd } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import AddnewMoal from '../components/AddnewMoal';
import DeleteNote from '../components/DeleteNote';
import EditNote from '../components/EditNote';
import ListCard from '../components/ListCard';
import Loder from '../components/Loder';
import NabBar from '../components/NabBar';
import { getInitFromLocal } from '../store/NoteSlics';
import ClearAllNotes from '../components/ClearAllNotes'


export default function Home() {


  const [showModal, setShowModal] = useState(""); // All modals open here 
  const [id ,setid] = useState(''); // Note id state 
  const [loading , setloading] = useState(true); // loading Animetions state
  const dispatch =  useDispatch(); // dispatch called 
  const { notes } = useSelector((state) => state.notes); // note state from Redux 

  // get notes form localStoreage 
  useEffect(()=>{
      const localNote = localStorage.getItem("notes"); 
      const newnote = localStorage.getItem("notes") !== null? JSON.parse(localNote): []

      dispatch(getInitFromLocal(newnote))
      setloading(false)
     
  },[]);

  return (

    <div className=' bg-slate-900 text-white w-full min-h-screen' >
      <Head>
        <title>Roktim Note Taking app </title>
        <meta name="description" content="Take your note locally " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* models called here  */}
      <AddnewMoal isTrue={showModal} sets= {setShowModal} />
       <EditNote isEdit ={showModal} setE={setShowModal}   id={id}/> 
      <DeleteNote isDelete={showModal} setd={setShowModal} id={id}/> 
      <ClearAllNotes showM={showModal} setM={setShowModal}/> 
        
        {/* main div here  */}
          <div className='' >
            {/* Add note Floating button */}
            <div onClick={()=>{setShowModal("addnote")}} className=" cursor-pointer text-5xl fixed bottom-10 right-10 z-[2] bg-green-600 p-2 rounded-full hover:bg-green-500 drop-shadow-[0px_2px_3px_rgba(255,255,255,0.401)] ">
             <HiDocumentAdd/>
            </div>

              {/* navbar Components  */}
              <NabBar setM = {setShowModal} /> 
              
              {/* If Notes is empty this is showing  */}
              { !loading &&  notes.length == 0  ? <div className='grid place-items-center'>
                <div className='my-[16%]'>
                 
                  <div className=' w-full flex justify-center '>
                     <div className='animate-bounce  bg-slate-400 p-4 rounded-full  '>
                     
                     <div onClick={()=>{setShowModal("addnote")}} className='  animate-pulseanimate-pulse flex justify-items-center items-center cursor-pointer  bg-slate-500 p-4 rounded-full'>
                      <HiDocumentAdd size={30}/>
                      </div>
                      </div>
                  </div>
                 
                 <p className='my-6  text-gray-500 select-none'>No Notes found. please! Add new Notes </p>
                </div>
              </div> : <> <div className={loading ?'w-full flex gap-3 min-h-[600px] p-9 ':'w-full min-h-[600px] p-9 notebox'} >
              {/* if lodding  */}
              { loading ?  notes.map((e)=>{
                  return <Loder key={e.id} /> 
              }) 
              // Finaly Show the notes here  
               :  notes.map((e)=>{
                  return  <ListCard key={e.id} title={e.title} dec={e.dece} id={e.id}  setModel={setShowModal} setid={setid}/>
              })
             }
             </div>
             </>
              }
            
          </div>
      
    </div>
  )
}
