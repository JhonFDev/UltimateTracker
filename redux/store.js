import  {configureStore} from "@reduxjs/toolkit"
import  dbReducers from "./dbSlice"

export const store = configureStore({
    reducer:{
        db: dbReducers,
    }
})