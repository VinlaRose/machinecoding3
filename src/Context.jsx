import { createContext, useEffect, useReducer } from "react";
import {reducer, initialState} from "./Data";
import {snacks} from "./db";





export const DataCotnext = createContext();


export const DataProvider = ({children}) => {
    console.log(snacks)
const [state, dispatch] = useReducer(reducer, initialState);

useEffect(()=>{
dispatch({ type: 'FETCH_SUCCESS', payload: snacks })
},[])


    

    return (
        <DataCotnext.Provider value={{state, dispatch}}>
            {children}
        </DataCotnext.Provider>
    )
}