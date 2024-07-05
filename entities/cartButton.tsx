"use client"
import { Button } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from '@/lib/slices/authSlice';
import { toggleInCart } from '@/lib/serverActions/addToCartAction';
import { useRouter } from 'next/navigation';




export default function CartButton({sx, type, itemId} : {sx?: any, type?: string, itemId: number}) {

    const user = useSelector(selectUser)
    const inCart = !!(user?.inCart?.find((element)=>element==itemId))
    const router = useRouter()

    const dispatch = useDispatch()

    return (
      <Button
      onClick={async()=>{
        !!user?null:router.replace('/LogIn')

        const updatedUser = user?.inCart != undefined? (await toggleInCart(user?.id, user.inCart, itemId)):null

        updatedUser!=null?dispatch(updateUser(updatedUser)):null
      }}
      sx={{
        background: inCart?'#89F09C':'inherit',
        border: '1px solid #F8F8F8',
        borderRadius: '7px',
        minWidth: '0',
        maxWidth: '32px',
        maxHeight: '32px',
        overflow: 'hidden',
        mt: '5px',
        ...sx
      }} startIcon={inCart?<CheckOutlinedIcon/>:<CloseOutlinedIcon sx={{transform: type=='main'?'rotate(45deg)':'', width: '14px'}}/>}/>
    )
}
