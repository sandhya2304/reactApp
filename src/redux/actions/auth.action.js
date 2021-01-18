import firebase from 'firebase/app';
import auth from '../../firebase';
import { 
          LOAD_PROFILE, 
          LOGIN_FAIL, 
          LOGIN_REQUEST, 
          LOGIN_SUCCESS, 
          LOG_OUT
       } from '../actionType';

export const login = () => async dispatch =>{
    try{

        dispatch({
            type: LOGIN_REQUEST
        })
        
        const provider 
          = new firebase.auth.GoogleAuthProvider();

        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");


        const resp = await auth.signInWithPopup(provider);
        //console.log(resp);

        

        const accessToken = resp.credential.accessToken;
        const profile = {
            name : resp.additionalUserInfo.profile.name,
            photoURL : resp.additionalUserInfo.profile.picture
        }

        sessionStorage.setItem("my-access-token",accessToken);
        sessionStorage.setItem("my-user",JSON.stringify(profile));   


        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })

        dispatch({
            type:LOAD_PROFILE,
            payload:profile
        })

    }catch(error){
        console.log(error.message);
        dispatch({
            type:LOGIN_FAIL,
            payload:error.message
        })
    }
}

export const logout = () =>async dispatch=>{
    await auth.signOut();
    dispatch({
        type:LOG_OUT
    })
    sessionStorage.removeItem("my-access-token");
    sessionStorage.removeItem("my-user");
}