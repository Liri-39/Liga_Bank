import {combineReducers} from "redux";
import {calculator} from "./calculator/calculator";
import {main} from "./main/main";

export const NameSpace = {
    CALCULATOR: `CALCULATOR`,
    MAIN: `MAIN`
};

export default combineReducers({
    [NameSpace.CALCULATOR]: calculator,
    [NameSpace.MAIN]: main,
});
