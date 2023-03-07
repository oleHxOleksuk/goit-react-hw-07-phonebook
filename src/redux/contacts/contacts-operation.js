import {createAsyncThunk} from "@reduxjs/toolkit";

import * as api from "../../components/services/contacts";

export const fetchAllContact = createAsyncThunk(
  "contacts/fetchAll",
  async (_, {rejectWithValue}) => {
    try {
      const data = await api.getAllContacts();
      return data
    }
    catch ({response}){
      return rejectWithValue(response.data.massage);
    }
  }
)

export const fetchAddContact = createAsyncThunk(
  "contacts/addContact",
  async (data,{rejectedWithValue}) =>{
    try {
      const result = await api.addContact(data);
      return result
    }
    catch ({response}){
      return rejectedWithValue(response.data.massage)
    }
  },
  {
    condition:({name}, {getState}) => {
      const {contacts} = getState();
      const normalized = name.toLocaleLowerCase();
      const result  = contacts.items.find(({ name }) => {
        return name.toLocaleLowerCase() === normalized;
      })
      if (result){
        return false
      }
    }
  }
)
export const fetchDeleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, {rejectedWithValue}) =>{
    try {
      await api.deleteContact(id)
      return id
    }
    catch (response){
      return rejectedWithValue(response.data.massage)
    }
  }
);


