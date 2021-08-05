import {createReducer} from "@reduxjs/toolkit";
import {sliders} from "../../mocks/slider";
import {addHistoryItem, clearHistory} from "../action";

const initialState = {
    sliders: []
};

const calculator = createReducer(initialState, (builder) => {
    builder
        .addCase(addHistoryItem, (state, action) => {
            if (state.history.length === 10) {
                state.history = [action.payload, ...state.history.slice(0, 9)];
            } else {
                state.history = [action.payload, ...state.history];
            }
        })
        .addCase(clearHistory, (state, action) => {
            state.history = action.payload;
        })
});

export {calculator};
