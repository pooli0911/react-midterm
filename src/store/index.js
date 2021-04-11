import { createContext } from "react";
import useReducerWithThunk from 'use-reducer-thunk';




export const StoreContext = createContext();




export function StoreProvider(props) {
    //const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example");
    //const value = { state, dispatch };
 
    return (
       <StoreContext.Provider >
          {props.children}
       </StoreContext.Provider>
    );
 }