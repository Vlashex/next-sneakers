"use client"
import React from 'react'
import { Button, Stack} from '@mui/material'
import { useForm } from "react-hook-form"
import { IsneakersCardData } from "../../lib/types"
import { Input } from "@mui/material"
import { useCreateSneakersCardMutation } from './api/adminApi'


export default function Page() {

    const { register, handleSubmit, control, setValue } = useForm<IsneakersCardData>()

    const [ createSneakersCard ] = useCreateSneakersCardMutation()

    const onSubmit = (data: IsneakersCardData) => {
        try {
            createSneakersCard(data)
        } catch (error) {
            console.log(error)
        }
    }

    function toBase64(file:any, onSuccess:any) {
        let reader = new FileReader();
        reader.onload = () => onSuccess(reader.result);
        reader.readAsDataURL(file);
    }
    const setValueFunction = (data:string) => setValue('image', data)

    return (
      <Stack direction={'row'} width={'100%'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
             <form onSubmit={handleSubmit(onSubmit)} style={{flexDirection: 'column', display: 'flex', padding: '120px 60px', borderRadius: '15px', backgroundColor: '#fff'}}>
                <Stack spacing='20px' sx={{width: '100%'}} justifyContent={'center'}>
                    <Input placeholder='title'  sx={{width: '320px', height: '60px', padding: '10px', bgcolor: '#e4e4e4', borderRadius: '5px'}} disableUnderline {...register("title", {required: true})} type="text" />
                    <Input placeholder='price'  sx={{width: '320px', height: '60px', padding: '10px', bgcolor: '#e4e4e4', borderRadius: '5px'}} disableUnderline {...register("price", {required: true})} type="number" />
                    <label style={{width: '320px', height: '60px', padding: '10px', background: '#e4e4e4', borderRadius: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
                        image(обязательно меньше 120Кб)
                        <Input sx={{opacity: '0'}} disableUnderline onChange={(e:any)=> toBase64(e.target.files[0], setValueFunction)} type='file'/>
                    </label>
                    <Button variant='outlined' type='submit'>Создать карточку</Button>
                </Stack>
            </form>
      </Stack>
    )
}
