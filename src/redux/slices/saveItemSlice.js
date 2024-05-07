import { createSlice } from "@reduxjs/toolkit";



const saveItemSlice = createSlice({
    name:'saveItem',
    initialState:[],
    reducers:{
        saveItem:(state,action)=>{
            state.push(action.payload)
            // console.log(state)
        }
    }

})

export const {saveItem} = saveItemSlice.actions;
export default saveItemSlice.reducer;