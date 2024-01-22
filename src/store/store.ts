import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReduxStore = (initialState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];
