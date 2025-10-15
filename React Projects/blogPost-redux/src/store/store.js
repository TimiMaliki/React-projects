import { configureStore } from "@reduxjs/toolkit";
import postsReduce from "../features/postSlice";


export const store = configureStore({
    reducer : {
        posts : postsReduce
    }
})