import React, {useEffect} from 'react';
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const token = localStorage.getItem('tokens');
    const navigate = useNavigate();

    useEffect(() => {
        if (token){
            navigate('/')
        }
        else {
            navigate('/login')
        }
    },[token, navigate])

    return (
        <div>
            <LoginComponent/>
        </div>
    );
};

export default LoginPage;