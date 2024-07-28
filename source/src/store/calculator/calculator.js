import {createReducer} from "@reduxjs/toolkit";
import {
    changeCreditType,
    changeCreditName,
    getCreditInfo,
    changeCreditParam,
    setDefaultParam,
    setIsRequestSend,
    setOrderNum,
    setIsOrderSuccess
} from "../action";

const initialState = {
    creditType: 0,
    creditName: ``,
    credit: {},
    creditParams: {},
    isRequestSend: false,
    orderNum: 0,
    isOrderSuccess: false
};

const calculator = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCreditType, (state, action) => {
                state.creditType = action.payload;
        })
        .addCase(changeCreditName, (state, action) => {
            state.creditName = action.payload;
        })
        .addCase(getCreditInfo, (state, action) => {
            state.credit = action.payload;
        })
        .addCase(changeCreditParam, (state, action) => {
            state.creditParams = {...state.creditParams, ...action.payload};
        })
        .addCase(setDefaultParam, (state, action) => {
            state.creditParams = {
                targetPrice: action.payload.values.default,
                initialFee: action.payload.initialFee.min,
                initialFeeSum: action.payload.values.default * action.payload.initialFee.min / 100,
                creditPeriod: action.payload.creditPeriod.min,
                maternityCapital: false,
                lifeInsurance: false,
                autoInsurance: false
            };
        })
        .addCase(setIsRequestSend, (state, action) => {
            state.isRequestSend = action.payload;
        })
        .addCase(setOrderNum, (state, action) => {
            state.orderNum = action.payload;
        })
        .addCase(setIsOrderSuccess, (state, action) => {
            state.isOrderSuccess = action.payload;
        })
});

export {calculator};
