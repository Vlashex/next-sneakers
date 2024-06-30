import { Button, Container, Link, Stack, Typography } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import NextLink from 'next/link'
import img from '@/public/header.png'
import Image from 'next/image'

export default function Header() {
  return (
    <Container maxWidth='md'>
        <Stack direction='row' justifyContent='space-between'>
            <Link component={NextLink} href='/' underline='none'>
                <Stack direction='row' alignItems='center' spacing='16px'>
                    <Image src={img} width={40} alt=''/>
                    <Stack>
                        <Typography variant='h5' fontWeight={600} color='primary.dark'>NEXT SNEAKERS</Typography>
                        <Typography variant='body1'>Магазин лучших кроссовок</Typography>
                    </Stack>
                </Stack>
            </Link>
            <Stack direction='row' spacing='30px' alignItems='center'>
                <Button variant='text' startIcon={<ShoppingCartOutlinedIcon/>}>
                    <Stack direction='row'>
                        <Typography variant='body1' color='primary' fontWeight={600}>1205 руб.</Typography>
                    </Stack>
                </Button>
                <Link component={NextLink} href='/' underline='none' sx={{width:'20px', height: '20px'}}><FavoriteBorderOutlinedIcon/></Link>
                <Link component={NextLink} href='/' underline='none' sx={{width:'20px', height: '20px'}}><AccountCircleOutlinedIcon/></Link>
            </Stack>
        </Stack>
    </Container>
  )
}
