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
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
    }
    
}