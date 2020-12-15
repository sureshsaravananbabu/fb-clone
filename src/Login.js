import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {useStateValue} from './StateProvider'
import {auth,provider } from './firebase';
import { actionTypes } from './reducer';
function Login() {
    const [state,dispatch]=useStateValue();
    const SignIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error)=>alert(error.message));

    };  
    return (
        <div className="login">
            <div className="Login__logo">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512" alt=""/>
            <h1>Facebook</h1>
            </div> 
            <Button type ="Submit" onClick={SignIn}>SignIn</Button>
        </div>
    )
}

export default Login
