import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authLogin = createAsyncThunk(
    "user-login-auth",
    async(data, thunkapi)=>{
        try{    
            let res = await fetch("https://reqres.in/api/login",{
                method:"POST",
                headers:{
                    'Content-Type':"application/json"
                },
                body:JSON.stringify(data)
            })
       
            let resData = await res.json()
            if(resData.error){
                thunkapi.rejectWithValue(resData.error)
            }else{
                return resData
            }
           
            
        }catch(e){
            return thunkapi.rejectWithValue(e.message)
        }
    }
)



const initialState = {
    loading:false,
    error:false,
    token:"",
    isAuth:false
}

const authSlice =  createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder.addCase(authLogin.pending, (state, action)=>{
            state.loading = true
            state.error = false
        })
        .addCase(authLogin.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.loading = false
            state.error = false
            state.isAuth = true
            state.token = action.payload.token;
              })
        .addCase(authLogin.rejected, (state, action)=>{
            state.loading = false
            state.error = true
            state.isAuth = false
            state.token = ""
        })
    }
})

export default authSlice.reducer