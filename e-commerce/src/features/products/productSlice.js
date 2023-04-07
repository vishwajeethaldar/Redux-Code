import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllProducts = createAsyncThunk(
    "products/get",
    async(skip, thunkApi)=>{
           try {
                const res =  await axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}`)
                return res.data.products
            } catch (error) {
                return error.message
           } 
    }
)


const initialState = {
    loading:false,
    error:false,
    products:[]
} 


const productSlice = createSlice({
    name:"productSlice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(getAllProducts.pending, (state, action)=>{
            state.loading = true;
            state.error  =false;
        })
        .addCase(getAllProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.error  =false;
            state.products = action.payload;

        })
        .addCase(getAllProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error  =true;
        })
    }
})

export default productSlice.reducer