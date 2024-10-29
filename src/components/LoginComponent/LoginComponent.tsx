import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {loginValidator} from "../../validators/loginValidator";
import {LoginFormProps} from "../../models/LoginFormProps";

import './styleLoginForm.css'
import {login} from "../../services/authSevices";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {
    const {
        handleSubmit, register, formState: {
            errors, isValid
        }
    } = useForm<LoginFormProps>({mode: "all", resolver: joiResolver(loginValidator)});
    const navigate = useNavigate();


    const loginSubmit = async (data: LoginFormProps) => {
         if (data){
             try {
                 await login(data).then(value => {
                     value && navigate('/')
                 });
             }catch (e) {

             }

        }
    }

    return (
        <div className={'headLoginBox'}>
            <form className="form" onSubmit={handleSubmit(loginSubmit)}>

              <span className="input-span">
                    <label htmlFor="username" className="label">UserName</label>
                    <input type="text" id="username" placeholder={'userName'} {...register('username')}/>
                    {errors.username && <div>{errors.username.message}</div>}
               </span>

               <span className="input-span">
                   <label htmlFor="password" className="label">Password</label>
                   <input  type="password" id="password" placeholder={'password'} {...register('password')}/>
                   {errors.password && <div>{errors.password.message}</div>}
               </span>
                 <span className="span"><span>Forgot password?</span></span>
                <button className="submit" disabled={!isValid}>Log in</button>
                 <span className="span">Don't have an account? <span>Sign up</span></span>
            </form>
        </div>

    );
};

export default LoginComponent;