"use client"
import React from 'react';
import SignUpForm from '../components/SignUpForm';
import { Typography } from '@mui/material';

const SignUp = () => {
    return (
        <>
            <Typography variant='h3' sx={{mb: '10px'}}>Регистрация</Typography>
            <Typography variant='h5'>Пробный период 3 дня</Typography>
            <SignUpForm/>
        </>
    );
};

export default SignUp;