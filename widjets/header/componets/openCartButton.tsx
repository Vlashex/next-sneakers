"use client"
import { Button, Stack, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import React from 'react'
import { useDispatch } from 'react-redux';
import { openCart } from '@/lib/slices/cartSlice';

export default function OpenCartButton() {

    const dispatch = useDispatch();

    return (
      <Button variant='text' startIcon={<ShoppingCartOutlinedIcon/>} onClick={()=> dispatch(openCart())}>
          <Stack direction='row'>
              <Typography variant='body1' color='primary' fontWeight={600}>1205 руб.</Typography>
          </Stack>
      </Button>
    )
}
