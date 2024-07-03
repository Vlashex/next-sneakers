import React from 'react';
import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link'
import SignInForm from '../components/SignInForm';

const SignIn = () => {
    return (
        <>
            <Typography variant='h3'>Вход</Typography>
            <SignInForm/>
            <Stack sx={{mt: '30px'}} flexDirection={'row'}>
                <Typography fontSize={'18px'}>Забыли пароль? </Typography>
                <Link fontSize={'18px'} color={'#32CD32'} component={NextLink} href='/SignUp'>Зарегистрироваться</Link>
            </Stack>
        </>
    );
};

export default SignIn;