import { ADD_CONTACT } from './types';


const initialState = {
  contacts: [],
  filter: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_CONTACT:
      const newContact = [...state.contacts, payload];
      return{...state, contacts: newContact}
      default:
        return state;
  }
}

export default reducer;
