import {createAsyncThunk} from "@reduxjs/toolkit";

import * as api from "../../components/services/contacts";

export const fetchAllContact = createAsyncThunk(
  "contacts/fetch-all",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data
    }
    catch ({response}){
      return thunkAPI.rejectWithValue(response.data);
    }
  }
)

export const fetchAddContact = createAsyncThunk(
  "contacts/add",
  async (data,{rejectedWithValue}) =>{
    try {
      const result = await api.addContact(data);
      return result
    }
    catch ({response}){
      return rejectedWithValue(response.data)
    }
  },
  {
    condition:({name}, {getState}) => {
      const {contacts} = getState
      const normalized = name.toLowerCase();
      const result  = contacts.items.find(({ name }) => {
        return name.toLowerCase() === normalized;
      })
      if (result){
        return false
      }
    }
  }
)
export const fetchDeleteContact = createAsyncThunk(
  "contacts/delete",
  async (id, {rejectedWithValue}) =>{
    try {
      await api.deleteContact(id)
      return id
    }
    catch (response){
      return rejectedWithValue(response.data)
    }
  }
)


