"use client"
import { Button } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from '@/lib/slices/authSlice';
import { toggleInFavorite } from '@/lib/serverActions/addToFavoriteAction';

export default function FavoriteButton({itemId}: {itemId: number}) {

      const user = useSelector(selectUser)
      const isFavorite = !!(user?.inFavorite?.find((element)=>element==itemId))

      const dispatch = useDispatch()

    return (
      <Button
      onClick={async()=>{
        const updatedUser = user?.inFavorite != undefined? (await toggleInFavorite(user?.id, user.inFavorite, itemId)):null

        updatedUser!=null?dispatch(updateUser(updatedUser)):null
      }}
      sx={{
        position: 'absolute',
        top: '25px',
        left: '25px',
        background: isFavorite?'#FEF0F0':'inherit',
        border: '1px solid #F8F8F8',
        borderRadius: '7px',
      }} startIcon={isFavorite?<FavoriteOutlinedIcon color='warning'/>:<FavoriteBorderOutlinedIcon sx={{color:'#ECECEC'}}/>}/>
    )
}
