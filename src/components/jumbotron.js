import React from "react";
import './jumbotron.css';
import { LoginForm } from "./login.comp";
import { useState } from "react";
import { ResetPassword } from "./ResetPassword/PasswordReset.comp";
function Jumbotron(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[formLoad,setFormLoad]=useState('login');
    const handleOnSubmit=e=>{
        e.preventDefault();
        if(!email || !password){
            return alert("Fill up the form details"); // return id form details are not filed
        }
        console.log(email,password);
    };

    const formSwitcher=(formtype)=>{
        setFormLoad(formtype);
    };

    const handleChange=e =>{
        const {name,value}=e.target;
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
        console.log(name,value);
    };
    const handleOnResetSubmit=e=>{
        e.preventDefault();
        if(!email ){
            return alert("Enter the email"); // return id form details are not filed
        }
        console.log(email);
    };
    return (
        <div class="bs-example" >
            <div class="react-live-preview">
                <div class="jumbotron">
                    {/* <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                    </p>
                    <p>
                    <button type="button" class="btn btn-primary">Learn more</button>
                    </p> */}
                    
                    {formLoad=='login' && <LoginForm handleChange={handleChange} mail={email} pass={password} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher}/>}
                    {formLoad=='reset' && <ResetPassword handleChange={handleChange} mail={email} pass={password} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher}/>}
                </div>
            </div>
        </div>
    );
}
export default Jumbotron;