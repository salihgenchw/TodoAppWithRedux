import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: 1,
        title: "React Ogren",
        completed: true,
      },
      {
        id: 2,
        title: "Js Ogren",
        completed: false,
      },
      {
        id: 3,
        title: "Redux Ogren",
        completed: false,
      },
    ],
    activeFilter: "all",
  },

  reducers: {
    addNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    toogle: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter=action.payload
    },
    clearCompleted : (state) => {
      const filtered = state.items.filter(item => item.completed === false)
      state.items = filtered;
    }
  },
});
export const { addNewItem, toogle, destroy, changeActiveFilter, clearCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
