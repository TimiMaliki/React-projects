import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id : "1", title : "Learning react redux", content : "I am going to learn react redux"},
    {id : "2", title : "Learning react redux", content : "And I'm going to be good at it"},
]

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        postAdded(state,action){
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts
export const {postAdded} = postSlice.actions

export default postSlice.reducer