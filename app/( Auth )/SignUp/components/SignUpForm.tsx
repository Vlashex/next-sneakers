import React from 'react'
import { registerInterface, useSignUpMutation } from '../api/signUpApi';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { setCredentials } from '@/app/api/authSlice';
import { Button, Input, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function SignUpForm() {

    const [signup] = useSignUpMutation()
    const dispatch = useDispatch();
    const router = useRouter();

    const [cookies, setCookie] = useCookies(['token'])

    const { register, handleSubmit } = useForm<registerInterface>();
    

    const onSubmit = async (data: registerInterface) => {
        try {
            const userData = await signup(data).unwrap()
            dispatch(setCredentials({
                user:{
                    id: userData.user.id,
                    name: userData.user.username,
                    email: userData.user.email,
                },
                token: userData.jwt
            }))
            setCookie('token', userData.jwt)
            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }


    return (
      <form style={{width: '100%', marginTop: '50px'}} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={'30px'}>
              <Input 
                  {...register("username", { required: true})}
                  placeholder='Введите имя пользователя' 
                  disableUnderline 
                  sx={{
                      height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px'
              }}/>
              <Input 
                  {...register("email", { required: true})}
                  placeholder='Введите e-mail ' 
                  disableUnderline 
                  sx={{
                      height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px'
              }}/>
              <Input 
                  {...register("password", { required: true})}
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
