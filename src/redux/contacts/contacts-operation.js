import {createAsyncThunk} from "@reduxjs/toolkit";

import * as api from "../../components/services/contacts";

export const fetchAllContacts = createAsyncThunk(
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
  }
)


