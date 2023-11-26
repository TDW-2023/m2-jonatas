import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCats = createAsyncThunk("catList/getCats", async (page) => {
  let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
  let json = await response.json();
  console.log(json);
  return json;
});

export const requestMoreCats = createAsyncThunk("catList/requestMoreCats", async (page) => {
    let response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`);
    let json = await response.json();
    console.log(json);
    return json;
  });

const catListSlice = createSlice({
    name:"cats",
    initialState: {
        cats: [],
        loading: false
    },
    extraReducers:{
        [getCats.pending]: (state, action) =>{
            state.loading = true
        },
        [getCats.fulfilled]: (state, action) =>{
            state.loading = false
            state.cats = action.payload
        },
        [getCats.rejected]: (state, action) =>{
            state.loading=false
        }
    }

})

export default catListSlice.reducer;