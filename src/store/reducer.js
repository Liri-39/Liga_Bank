import {combineReducers} from "redux";
import {calculator} from "./calculator/calculator";

export const NameSpace = {
    CALCULATOR: `CALCULATOR`
};

export default combineReducers({
    [NameSpace.CALCULATOR]: calculator,
});
