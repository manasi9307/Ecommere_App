import React from 'react';
import './signin.scss'
import SignIn from '../../components/signin/signin.component';

import SignUp from '../../components/signup/signup';
const SignInOut = () => {
    
        return(
            <div className="sign-in-and-sign-up">
             <SignIn />
             <SignUp />
            </div>
        )
    
}

export default SignInOut;