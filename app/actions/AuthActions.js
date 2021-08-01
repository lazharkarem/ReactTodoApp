import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


const onLoginSuccess = (dispatch,user,token)=>{
    AsyncStorage.setItem('app_token',token)
    .then(()=>{
        dispatch({type: LOGIN_SUCCESS, user})
    });


};

const onLoginFailed = (dispatch,errorMessage)=>{

    dispatch({type: LOGIN_FAILED, error: errorMessage})

};


export const loginUser = ({username,password})=>{
    return (dispatch)=>{
        dispatch({type:LOGIN_ATTEMPT});

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




