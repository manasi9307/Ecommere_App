import React from 'react';
import {FormInput} from '../form-input/form-input';
import {CustomButton} from '../custom-button/custom-button';
import {auth,createUserProfileDoc} from '../../firebase/firebase.utils';
import './signup.scss';
import { async } from 'q';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
         displayName:'',
         email:'',
         password:'',
         confirmPassword:''
        }
    }

handleSubmit= async event => {
    event.preventDefault();
    const {displayName,email,password,confirmPassword} = this.state;
    // if(password !== confirmPassword){
    //     alert("Passwords do not match");
    // }

    try{
    const {user} = await auth.createUserWithEmailAndPassword(email,password);
    await createUserProfileDoc(user, {displayName});
    this.setState({
        displayName:'',
         email:'',
         password:'',
         confirmPassword:''
    })
    }catch(error){
     console.error(error)
    }
}

handleChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
}



render(){
    const {displayName,email,password,confirmPassword} = this.state;
    return(
        <div className="title">
           <h2>
I do not have account
           </h2>
           <span>Sign Up with your email and password</span>
           <form className="sign-up-form" onSubmit={this.handleSubmit}> 
            <FormInput
            type="text"
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            placeholder='Display Name'
            required
            >

            </FormInput>
            <FormInput
            type="email"
            name='email'
            value={email}
            onChange={this.handleChange}
            placeholder='Email'
            required
            >

            </FormInput>
            <FormInput
            type="password"
            name='password'
            value={password}
            onChange={this.handleChange}
            placeholder='Password'
            required
            >

            </FormInput>
            {/* <FormInput
            type="password"
            name='ConfirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            required
            >  </FormInput> */}

          
            <CustomButton type='submit'>SIGN UP</CustomButton>
           </form>
        </div>
    )
}
}


export default SignUp;