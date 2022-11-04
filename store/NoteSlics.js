import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  notes:[]
   
  }

  export const noteSlice = createSlice({
    name: 'notes', 
    initialState,
    reducers: {
      getInitFromLocal:(state, action)=>{
        state.notes = action.payload
      },
      addNote:(state, action) => {
         state.notes = [...state.notes, action.payload]
         localStorage.setItem('notes',JSON.stringify(state.notes))
        

         },
         deleteNote:(state, action)=>{
          const id = action.payload
          const newNote =  state.notes.filter(function(notes){ 
                  return notes.id !== id;
                  });
            state.notes = newNote

            localStorage.setItem('notes',JSON.stringify(state.notes))

         },
         editNote: (state,action)=>{
          const {id , title , dece} = action.payload; 

          const objIndex = state.notes.findIndex((obj => obj.id == id  ));
          state.notes[objIndex].title = title
          state.notes[objIndex].dece = dece
          
          localStorage.setItem('notes',JSON.stringify(state.notes))

         },
         clearAllNotes: (state)=>{
           state.notes = [] 
           localStorage.removeItem('notes')
           
         }
    }
  })

  export const {addNote, deleteNote, editNote, getInitFromLocal,clearAllNotes} = noteSlice.actions
  export default noteSlice.reducer