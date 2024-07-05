import React from 'react'
import Cart from './cart';
import { Box } from '@mui/material';
import CloseCartButton from '../components/closeCartButton';
import SneakersCartList from '../components/sneakersCartList';

export default function CartWraper() {


    return (
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
    )
}
