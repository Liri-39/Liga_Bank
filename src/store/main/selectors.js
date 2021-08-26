import {NameSpace} from "../reducer";

export const getIsLoginStatus = (state) => state[NameSpace.MAIN].isLoginSuccess;
