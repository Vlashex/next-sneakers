import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { Button, Input, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useSignUpMutation } from '../api/signUpApi';
import { IAuth, IRegistrate } from '../api/types';
import { setCredentials } from '@/app/api/slices/authSlice';

export default function SignUpForm() {

    const [signup] = useSignUpMutation()
    const dispatch = useDispatch();
    const router = useRouter();

    const [cookies, setCookie] = useCookies(['token'])

    const { register, handleSubmit } = useForm<IRegistrate>();
    

    const onSubmit = async (data: IRegistrate) => {
        try {
            const userData:IAuth = await signup(data).unwrap()
            dispatch(setCredentials(userData))
            setCookie('token', userData.token)
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
