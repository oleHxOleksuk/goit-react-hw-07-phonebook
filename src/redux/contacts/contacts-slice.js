import { createSlice } from "@reduxjs/toolkit";

import {fetchAllContacts} from "./contacts-operation";

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const contactsSlice = createSlice({
  name:"contacts",
  initialState: [],
  reducers:{
    addContact:{
      reducer:(state,{payload}) => {
        state.push(payload)
      },
      prepare: data =>{
        return{
          payload:{
            id:nanoid(),
            ...data
          }
        }
      }

    },
    deleteContact:(state,{payload}) => state.filter(({id}) => id !== payload),
  }
})

export const {addContact, deleteContact} = contactsSlice.actions;
export default contactsSlice.reducer;
