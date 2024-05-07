import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getData = createAsyncThunk(
    'data/getData',
    async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data)
            return response.data
        } catch (err) {
            console.log(err)
        }

    }
)

const dataSlice = createSlice({

    name: "data",
    initialState: {
        allData: [],
        error: ""
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true;

        })
        builder.addCase(getData.fulfilled,(state,action)=>{
            // console.log(action.payload,"")
            state.allData = action.payload;
            state.loading = false;
            state.error = ""
        })
        builder.addCase(getData.rejected, (state)=>{
            state.loading = false;
            state.allData = [];
            state.error = "failed to fetch data"
        })

    }

})

export default dataSlice.reducer;