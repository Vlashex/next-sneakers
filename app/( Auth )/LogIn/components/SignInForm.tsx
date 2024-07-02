"use client"
import { Button, Input, Stack } from "@mui/material"
import { loginInterface, useLoginMutation } from "../api/loginApi"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setCredentials } from "@/app/api/authSlice";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";


const SignInForm = () => {
    const [login] = useLoginMutation();
    const { register, handleSubmit } = useForm<loginInterface>();
    const dispatch = useDispatch();
    const router = useRouter()

    const [cookies, setCookie] = useCookies(['token'])

    const onSubmit = async (data: loginInterface) => {
        try {
            const userData = await login(data).unwrap()
            dispatch(setCredentials({
                user:{
                    id: userData.user.id,
                    name: userData.user.username,
                    email: userData.user.email,
                    userCart: userData.user.userCart,
                    inLiked: userData.user.inLiked
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
                {...register("identifier", { required: true})}
                placeholder='Введите имя пользователя' 
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
                <Button type='submit' variant='outlined' sx={{height: '60px', dorderColor: '#000'}}>Войти</Button>
            </Stack>
        </form>
    )
}

export default SignInForm