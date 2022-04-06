import { createSlice, configureStore } from "@reduxjs/toolkit";

const initSlice = createSlice({
  name: "init",
  initialState: { name: "Indiana Jones", age: 80 },
  reducers: {
    add(state) {
      state.age++;
    },
    talk(state, action) {
      // the arg passed into action.payload
      alert(
        `The ${state.age} yrs old ${state.name} wants to ${action.payload}`
      );
    },
  },
});

const store = configureStore({ reducer: { initial: initSlice.reducer } });

export const initActions = initSlice.actions;

export default store;
