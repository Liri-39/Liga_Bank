import {NameSpace} from "../reducer";

export const getCreditType = (state) => state[NameSpace.CALCULATOR].creditType;
export const getCreditName = (state) => state[NameSpace.CALCULATOR].creditName;
export const getCreditInfo = (state) => state[NameSpace.CALCULATOR].credit;
export const getCreditParams = (state) => state[NameSpace.CALCULATOR].creditParams;
export const getCreditRate = (state) => state[NameSpace.CALCULATOR].credit.rate;
export const getRequestStatus = (state) => state[NameSpace.CALCULATOR].isRequestSend;
export const getOrderNum = (state) => state[NameSpace.CALCULATOR].orderNum;
export const getOrderStatus = (state) => state[NameSpace.CALCULATOR].isOrderSuccess;
export const getCreditMinSum = (state) => state[NameSpace.CALCULATOR].credit.minSum;
