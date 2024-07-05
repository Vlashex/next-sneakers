"use client"
import React from 'react'
import { useSelector } from "react-redux";
import Cart from './cart';
import { Box } from '@mui/material';
import CloseCartButton from '../components/closeCartButton';
import SneakersCartList from '../components/sneakersCartList';
import { selectCartOpen } from '@/lib/slices/cartSlice';

export default function CartWraper() {

    const isCartOpen = useSelector(selectCartOpen)

    return (isCartOpen?
    <Box
    sx={{
        position: 'fixed',
        display: 'flex',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0, .7)',
        zIndex: '1000'
    }}>
        <CloseCartButton/>
        <Cart>
            <SneakersCartList/>
        </Cart>
    </Box>
    :null)
}
