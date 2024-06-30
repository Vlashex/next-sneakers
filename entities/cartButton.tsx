"use client"
import { Button } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

import React, { useState } from 'react'

export default function CartButton(sx: any) {

    const [inCart, setInCart] = useState(false)

    return (
      <Button
      onClick={()=>setInCart((prevState)=>{
        const newState = !prevState
        return newState
      })}
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
      }} startIcon={inCart?<CheckOutlinedIcon/>:<CloseOutlinedIcon sx={{transform: 'rotate(45deg)', width: '14px'}}/>}/>
    )
}
