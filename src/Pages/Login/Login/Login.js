import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth(); 
    return (
        
        <div>
         <h2>Please Login</h2>
        <button onClick={signInWithGoogle}  className="btn btn-primary">Google Sign In</button>
        </div>
    );
};

export default Login;