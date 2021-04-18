import { createContext, useReducer } from "react";
import useReducerWithThunk from 'use-reducer-thunk';
import {
   SET_HOME_IMAGE,
   SET_NAVBAR_ACTIVEITEM,
   SET_COOKIE_IMAGE,
   ADD_TEAM_ITEM,
   REMOVE_TEAM_ITEM
} from "../utils/constants";
import battle from "../json/home_img1.json"
import tank from "../json/tank.json"



export const StoreContext = createContext();
let teamItems = localStorage.getItem("teamItems")
   ? JSON.parse(localStorage.getItem("teamItems"))
   : [];
let count = 0;
const initialState = {
   home_img: battle,
   navBar: {
      activeItem: "/"
   },
   cookie: tank,
   teamItems,
   count,

}


function reducer(state, action) {
   console.log(action)
   switch (action.type) {
      case SET_HOME_IMAGE:
         return {
            ...state, home_img: action.payload,
         };
      case SET_NAVBAR_ACTIVEITEM:
         return {
            ...state,
            navBar: {
               activeItem: action.payload,
            }
         }
      case SET_COOKIE_IMAGE:
         return {
            ...state, cookie: action.payload,
         }
      case ADD_TEAM_ITEM:
         const item = action.payload;
         const cookie = state.teamItems.find((x) => x.id === item.id);
         if (cookie) {
            count++;
            teamItems = state.teamItems.map((x) =>
               x.id === cookie.id ? item : x
            );
            return { ...state, teamItems, count };
         }
         teamItems = [...state.teamItems, item];
         count += 1;
         return { ...state, teamItems, count };
      case REMOVE_TEAM_ITEM:
         if (count > 0) { count--; }
         teamItems = state.teamItems.filter((x) => x.id !== action.payload);
         return { ...state, teamItems, count };
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