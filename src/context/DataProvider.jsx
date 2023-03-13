import { createContext, useContext, useReducer } from "react";

const DataContext =  createContext()

const useDataContext = () => {
    return useContext(DataContext)
}

const initialState = {
    data: []
}

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD_DATA': {
            const {id,data}= action.value
            const foundTask = state.data.find(s => s.id === id)
            if(foundTask){
                foundTask.data = data
            }else{
                state.data.push(action.value)
            }

    }
    return state
    }
}

const DataProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <DataContext.Provider value={{data:state.data,dispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export {
    DataProvider,
    useDataContext
};
