import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  db: [],
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {

    setDbReducer: (state, action) => {
      state.db = action.payload;
      console.log(state.db);
    },

    addDbReducer: (state, action) => {
      state.db.push(action.payload);
    },

    DeleteDbReducer: (state, action) => {
      const id = action.payload;
      state.db = state.db.filter((player) => player.id !== id);
    },
  },
});


export const {
    setDbReducer,
    addDbReducer,
    DeleteDbReducer
} = dbSlice.actions;
export default dbSlice.reducer;