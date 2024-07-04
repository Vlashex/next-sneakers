"use client"
import React from 'react'
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Button, Input, Stack } from '@mui/material';
import { redirect, useRouter } from 'next/navigation';
import { register } from '../actions/registerAction';
import { setCredentials } from '@/app/api/slices/authSlice';

export default function SignUpForm() {

    const dispatch = useDispatch();
    const router = useRouter();

    const [cookies, setCookie] = useCookies(['token'])


    return (
      <form style={{width: '100%', marginTop: '50px'}} action={async(formData:FormData)=>{
        const auth = await register(formData)
        dispatch(setCredentials(auth))
        setCookie("token", auth.token)
        redirect('/')
      }}>
          <Stack spacing={'30px'}>
              <Input 
                    name='username'
                    placeholder='Введите имя пользователя' 
                    disableUnderline 
                    sx={{
                        height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px'
              }}/>
              <Input 
                    name='email'
                    placeholder='Введите e-mail ' 
                    disableUnderline 
                    sx={{
                        height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px'
              }}/>
              <Input 
                    name='password'
                    placeholder='Введите пароль'  
                    disableUnderline 
                    sx={{
                        height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px'
              }}/>
              <Button type='submit' variant='outlined' sx={{height: '60px', dorderColor: '#000'}}>Зарегистрироваться</Button>
          </Stack>
      </form>
  )
}
