import { LOGIN_NAME_CHANGE, LOGIN_REGION_CHANGE } from '../type';

export const OnNameChange = (name) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_NAME_CHANGE,
            payload: name
        })
    }
};

export const OnRegionChange = (region) => {
    return(dispatch) => {
        dispatch({
            type: LOGIN_REGION_CHANGE,
            payload: region
        })
    }
}

