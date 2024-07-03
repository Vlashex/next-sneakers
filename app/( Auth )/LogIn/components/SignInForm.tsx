"use client"
import { Button, Input, Stack } from "@mui/material"
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { IAuth, ILogin } from "../../SignUp/api/types";
import { useSignInMutation } from "../api/signInApi";
import { setCredentials } from "@/app/api/slices/authSlice";


const SignInForm = () => {

    const [login] = useSignInMutation()
    const { register, handleSubmit } = useForm<ILogin>();
    const dispatch = useDispatch();
    const router = useRouter()

    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

    const onSubmit = async (data: ILogin) => {
        try {
            const userData:IAuth = await login(data).unwrap()
            dispatch(setCredentials(userData))
            
            setCookie('access_token', userData.token)


            router.replace('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form style={{width: '100%', marginTop: '50px'}} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={'30px'}>
                <Input 
                {...register("email", { required: true})}
                placeholder='Введите email' 
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