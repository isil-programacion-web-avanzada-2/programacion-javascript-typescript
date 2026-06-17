import {configureStore} from "@reduxjs/toolkit";
import { contadorReducer } from "./contadorReducer";

export const store = configureStore({
    reducer: contadorReducer
});