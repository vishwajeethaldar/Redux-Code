import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const addnewUser = createAsyncThunk(
    "user-add",
    async(data, thunkapi)=>{
        try{    
            let res = await fetch("https://wonderful-crocus-rail.glitch.me/freedomuser",{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(data)
            })
            let resData = await res.json()
            return resData

        }catch(e){
            return e.message
        }
    }
)

export const getRegisteredUsers = createAsyncThunk(
    "user-get-all",
    async(data, thunkapi)=>{
        try{    
            let res = await fetch("https://wonderful-crocus-rail.glitch.me/freedomuser")
            let resData = await res.json()
            console.log(resData);
            return resData

        }catch(e){
            return e.message
        }
    }
)






const initialState = {
    loading:false,
    error:false,
    data:[]
}

const appSlice =  createSlice({
    name:"appslice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(addnewUser.pending, (state, action)=>{
            state.loading = true
            state.error = false
        })
        .addCase(addnewUser.fulfilled, (state, action)=>{
            console.log(action);
            state.loading = false
            state.error = false
        })
        .addCase(addnewUser.rejected, (state, action)=>{
            state.loading = false
            state.error = true
        })
        .addCase(getRegisteredUsers.pending, (state, action)=>{
            state.loading = true
            state.error = false
        })
        .addCase(getRegisteredUsers.fulfilled, (state, action)=>{
            console.log(action);
            state.loading = false
            state.error = false
            state.data = action.payload
        })
        .addCase(getRegisteredUsers.rejected, (state, action)=>{
            state.loading = false
            state.error = true
            state.data = []
        })
    }
})

export default appSlice.reducer