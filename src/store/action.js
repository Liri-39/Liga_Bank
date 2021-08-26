import {createAction} from "@reduxjs/toolkit";
import {CreditTypes, CreditTypesEnum} from "../const";
import {realtyCredit, autoCredit} from "../mocks/credits";

export const ActionType = {
    SET_IS_ERROR: `setIsError`,
    CHANGE_CREDIT_TYPE: `changeCreditType`,
    CHANGE_CREDIT_NAME: `changeCreditName`,
    GET_CREDIT_INFO: `getCreditInfo`,
    CHANGE_CREDIT_PARAM: `changeCreditParam`,
    SET_DEFAULT_PARAM: `setDefaultParam`,
    SET_IS_REQUEST_SEND: `setIsRequestSend`,
    SET_ORDER_NUM: `setOrderNum`,
    SET_IS_ORDER_SUCCESS: `setIsOrderSuccess`,
    SET_IS_LOGIN_SUCCESS: `setIsLoginSuccess`
};


const getNameByCreditType = (type) => {
    return CreditTypes.filter(value => value.id === type).map(value => value.name).toString();
}

const getInfoByCreditType = (type) => {
    switch (type) {
        case CreditTypesEnum.REALTY: {
            return Object.assign({}, realtyCredit);
        }
        case CreditTypesEnum.AUTO: {
            return Object.assign({}, autoCredit);
        }
        default: {
            return [];
        }
    }
}

export const setIsError = createAction(ActionType.SET_IS_ERROR, (isError) => {
    return {
        payload: isError,
    };
});

export const changeCreditType = createAction(ActionType.CHANGE_CREDIT_TYPE, (typeId) => {
    return {
        payload: Number(typeId),
    };
});

export const changeCreditName = createAction(ActionType.CHANGE_CREDIT_NAME, (typeId) => {
    return {
        payload: getNameByCreditType(Number(typeId)),
    };
});

export const getCreditInfo = createAction(ActionType.GET_CREDIT_INFO, (typeId) => {
    return {
        payload: getInfoByCreditType(Number(typeId)),
    };
});

export const changeCreditParam = createAction(ActionType.CHANGE_CREDIT_PARAM, (params) => {
    return {
        payload: params,
    };
});


export const setDefaultParam = createAction(ActionType.SET_DEFAULT_PARAM, (typeId) => {
    return {
        payload: getInfoByCreditType(Number(typeId)),
    };
});

export const setIsRequestSend = createAction(ActionType.SET_IS_REQUEST_SEND, (isRequestSend) => {
    return {
        payload: isRequestSend,
    };
});

export const setOrderNum = createAction(ActionType.SET_ORDER_NUM, (num) => {
    return {
        payload: num,
    };
});

export const setIsOrderSuccess = createAction(ActionType.SET_IS_ORDER_SUCCESS, (isOrderSuccess) => {
    return {
        payload: isOrderSuccess,
    };
});

export const setIsLoginSuccess = createAction(ActionType.SET_IS_LOGIN_SUCCESS, (isLoginSuccess) => {
    return {
        payload: isLoginSuccess,
    };
});
