import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types'
import axios from 'axios';
export const loginUser = ({username,password})=>{
    //console.log(`${username} and ${password}`);
    // return {
    //     type: LOGIN_ATTEMPT
    // }

    return (dispatch)=>{
        dispatch({type:LOGIN_ATTEMPT});
        
        //call the API
        axios.post('http://localhost:3000/users/auth',
        {email: username, password})
            .then(resp => handleResponse(dispatch,resp.data))
            .catch(error => console.log(error));
    }
    
}

const handleResponse = (dispatch, data) => {
    if (!data.success){
        onLoginFailed(dispatch,data.message);
    }else{
        onLoginSuccess(dispatch,data.user,data.token)
    }

}


const onLoginSuccess = (dispatch,user,token)=>{

    dispatch({type: LOGIN_SUCCESS, user})

};

const onLoginFailed = (dispatch,errorMessage)=>{

    dispatch({type: LOGIN_FAILED, error: errorMessage})

};

