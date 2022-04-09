import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'5px'}}>
                <button onClick={signInWithGoogle}>Sigin Google</button>
            </div>
            <form>
                <input type="email" name="" id="" placeholder='Type your email' />
                <br />
                <input type="password" name="" id="" placeholder='Type password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;