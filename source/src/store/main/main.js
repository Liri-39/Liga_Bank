import {createReducer} from "@reduxjs/toolkit";

import {
    setIsLoginSuccess
} from "../action";

const initialState = {
    isLoginSuccess: false
};

const main = createReducer(initialState, (builder) => {
    builder
        .addCase(setIsLoginSuccess, (state, action) => {
            state.isLoginSuccess = action.payload;
        })
});

export {main};
