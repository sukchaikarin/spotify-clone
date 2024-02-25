import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import membersSlice from "./store/membersSlice";

const rootReducer = combineReducers({
    members: membersSlice

});

const middleware = (getDefaultMiddleware) =>
    import.meta.env.MODE !== "production" ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware();


const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: import.meta.env.MODE !== "production",
});

export const useAppDispatch = () => useDispatch();

export default store;