import { LOGIN_NAME_CHANGE, LOGIN_REGION_CHANGE } from '../type';

const INITIAL_STATE = {
    login_name: undefined,
    login_region: undefined

}

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {

        case LOGIN_NAME_CHANGE:
            return {...state,login_name: action.payload};
        
        case LOGIN_REGION_CHANGE:
            return {...state,login_region: action.payload};

        default:
            return state;
    }
}