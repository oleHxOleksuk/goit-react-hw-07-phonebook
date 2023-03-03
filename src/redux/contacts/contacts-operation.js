import {createAsyncThunk} from "@reduxjs/toolkit";

import * as api from "../../components/services/contacts";

const fetchAllContacts = createAsyncThunk(
  "contacts/fetch-all",
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data
    }
    catch ({response}){
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
)


