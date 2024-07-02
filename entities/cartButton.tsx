"use client"
import { Button } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, isAuth, removeFromCart, selectUser } from '@/app/api/authSlice';
import { useRouter } from 'next/navigation';

export default function CartButton({sx, type, itemId} : {sx?: any, type?: string, itemId: number}) {

    const userCart = useSelector(selectUser)?.userCart || []

    const inCart = !!userCart.find((element)=> element == itemId)
    

    const dispatch = useDispatch()
    const isUSerAuth = useSelector(isAuth)

    const router = useRouter()

    return (
      <Button
      onClick={()=>{
        !isUSerAuth?router.replace('/LogIn'):null
        !inCart
          ?dispatch(addToCart(itemId))
          :dispatch(removeFromCart(itemId))
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
