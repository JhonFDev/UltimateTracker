import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  db: [],
};

export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {

    setPlayerReducer: (state, action) => {
      state.db = action.payload;
      console.log(state.db);
    },

    addPlayerReducer: (state, action) => {
      state.db.push(action.payload);
    },

    DeletePlayerReducer: (state, action) => {
      const id = action.payload;
      state.db = state.db.filter((player) => player.id !== id);
    },
  },
});


export const {
    setPlayerReducer,
    addPlayerReducer,
    DeletePlayerReducer
} = dbSlice.actions;
export default dbSlice.reducer;