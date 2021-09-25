import React, { createContext, useContext, useReducer } from "react";

const Context = createContext([{}, () => {}])

export default () => useContext(Context)

export function Provider({children}){
    const [state, reduceState] = useReducer((prev, {id, value}) => ({...prev, [id] : value}), {})

    return <Context.Provider value={[state, reduceState]}>
        {children}
    </Context.Provider>
}