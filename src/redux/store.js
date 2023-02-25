import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-reducer';
import filterReducer from './filter/filter-reduce';



const store = configureStore ({
  contacts: contactsReducer,
  filter: filterReducer,
})

export default store;
