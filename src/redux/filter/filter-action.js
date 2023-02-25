import {  SET_FILTER } from "./filter-type";


export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  }
}
