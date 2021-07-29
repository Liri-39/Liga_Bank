import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
    SET_IS_ERROR: `setIsError`,
};

export const setIsError = createAction(ActionType.SET_IS_ERROR, (isError) => {
    return {
        payload: isError,
    };
});
