"use client"
import { closeCart } from '@/lib/slices/cartSlice'
import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function CloseCartButton() {

    const dispatch = useDispatch()
  
    const clickHandler = (e: any) => {
        e.stopPropagation()
        dispatch(closeCart())
    }

    return (
      <Button sx={{
        flex: '1', 
        display:{sm: 'block', xs:'none'}
      }}  onClick={clickHandler}/>
    )
}
