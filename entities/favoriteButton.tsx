"use client"
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function FavoriteButton({itemId}: {itemId: number}) {

    const dispatch = useDispatch()

    const isFavorit = false

    return (
      <Button
      sx={{
        position: 'absolute',
        top: '25px',
        left: '25px',
        background: isFavorit?'#FEF0F0':'inherit',
        border: '1px solid #F8F8F8',
        borderRadius: '7px',
      }} startIcon={isFavorit?<FavoriteOutlinedIcon color='warning'/>:<FavoriteBorderOutlinedIcon sx={{color:'#ECECEC'}}/>}/>
    )
}
