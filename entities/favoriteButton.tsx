"use client"
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React, { useState } from 'react'

export default function FavoriteButton(sx: any) {

    const [isFavorit, setIsFavorit] = useState(false)

    return (
      <Button
      onClick={()=>setIsFavorit((prevState)=>{
        const newState = !prevState
        return newState
      })}
      sx={{
        position: 'absolute',
        top: '25px',
        left: '25px',
        background: isFavorit?'#FEF0F0':'inherit',
        border: '1px solid #F8F8F8',
        borderRadius: '7px',
        ...sx
      }} startIcon={isFavorit?<FavoriteOutlinedIcon color='warning'/>:<FavoriteBorderOutlinedIcon sx={{color:'#ECECEC'}}/>}/>
    )
}
