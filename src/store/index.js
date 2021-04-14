import { createContext, useReducer } from "react";
import useReducerWithThunk from 'use-reducer-thunk';
import { SET_HOME_IMAGE, SET_NAVBAR_ACTIVEITEM } from "../utils/constants";
import battle from "../json/home_img1.json"



export const StoreContext = createContext();
const initialState = {
   home_img: {
      battle,
   },
   navBar: {
      activeItem:"/"
   },
}

function reducer(state, action){
   console.log(action)
   switch(action.type){
      case SET_HOME_IMAGE:
         return{
            ...state, home_img:action.payload,
         };
      case SET_NAVBAR_ACTIVEITEM:
         return{
            ...state,
            navBar:{
               activeItem: action.payload
            }
         }
      default:
         return state;
   }
}


export function StoreProvider(props) {
    const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");
    const value = { state, dispatch };
 
    return (
       <StoreContext.Provider value={value}>
          {props.children}
       </StoreContext.Provider>
    );
 }

 