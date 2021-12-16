import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./todos/todosSlice";

const store = configureStore({
    reducer:{
        todo:todosSlice
    }
})


export default store;