export const loginUser = ({username,password})=>{
    console.log(`${username} and ${password}`);
    return {
        type: 'login_attempt'
    }
}