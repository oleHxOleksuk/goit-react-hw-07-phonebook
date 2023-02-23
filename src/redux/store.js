import {createStore} from 'redux'
import { nanoid } from 'nanoid';


const reducer = (state) => {
  return state;
}

const initialState = {
  contacts: [
    {
      id: nanoid(),
      name: "Sasha",
      number: +369955457585
    }
  ],
  filter: ""
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
