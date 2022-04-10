import React from 'react';
import app from '../../firebase.init';
import {getAuth} from 'firebase/auth'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle]=useSignInWithGoogle(auth)
    const location =useLocation();
    const navigate= useNavigate();
    const from =location?.state?.from?.pathname || '/'
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then( ()=>{
            navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'5px'}}>
                <button onClick={handleGoogleSignIn}>Sigin Google</button>
            </div>
            <form>
                <input type="email" name="" id="email" placeholder='Type your email' />
                <br />
                <input type="password" name="" id="password" placeholder='Type password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;