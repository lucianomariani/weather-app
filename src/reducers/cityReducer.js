
import {SHOW_WEATHER } from '../actions/types';

export default function ingresoReducer(state = [], action) {
  switch (action.type) {
    case SHOW_WEATHER:
      const newstate =  action.payload;
      return newstate;
    default:
      return state;
  }
}