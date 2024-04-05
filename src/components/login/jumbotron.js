import React from "react";

import { LoginForm } from "./login.comp";
import { useState } from "react";
import { ResetPassword } from "../ResetPassword/PasswordReset.comp";
import './jumbotron.css';
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
        <div className="bs-example" >
            <div className="react-live-preview">
                <div className="jumbotron">
                    {formLoad=='login' && <LoginForm handleChange={handleChange} mail={email} pass={password} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher}/>}
                    {formLoad=='reset' && <ResetPassword handleChange={handleChange} mail={email} pass={password} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher}/>}
                </div>
            </div>
        </div>
    );
}
export default Jumbotron;