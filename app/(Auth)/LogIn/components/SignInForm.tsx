"use client"
import { Button, Input, Stack } from "@mui/material"
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { login } from "../actions/loginAction";
import { setCredentials } from "@/app/api/slices/authSlice";
import { useCookies } from "react-cookie";

const SignInForm = () => {

    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies(['token'])

    return (
        <form style={{width: '100%', marginTop: '50px'}} 
        action={async(formData:FormData)=>{
            const auth = await login(formData)

            auth != null?dispatch(setCredentials(auth)):null

            auth != null?setCookie("token", auth.token):null

            auth != null?redirect('/'):null
        }}>
            <Stack spacing={'30px'}>
                <Input 
                name="email"
                placeholder='Введите email' 
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
                <Button type='submit' variant='outlined' sx={{height: '60px', dorderColor: '#000'}}>Войти</Button>
            </Stack>
        </form>
    )
}

export default SignInForm