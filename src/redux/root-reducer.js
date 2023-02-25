import { combineReducers } from 'redux'

import contactsReducer from './contacts/contacts-reducer'
import filterReducer from './filter/filter-reduce'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export default rootReducer;
