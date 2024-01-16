

import {USER_LOGIN} from '../../constants/actionTypes';

type LoginAction = {type:String,payload:{} |string};

export const userLogin = (userToken:string):LoginAction=>({
    type:USER_LOGIN,
    payload:{userToken}
});



