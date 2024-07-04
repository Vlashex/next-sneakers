import { Container, Link, Stack, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import React from 'react'
import NextLink from 'next/link'
import img from '@/public/header.png'
import Image from 'next/image'
import OpenCartButton from '../componets/openCartButton';

export default function Header() {
  return (
    <Container maxWidth='md'>
        <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
            <Link component={NextLink} href='/' underline='none'>
                <Stack direction='row' alignItems='center' spacing='16px'>
                    <Image src={img} width={40} alt=''/>
                    <Stack display={{mobile: 'block', xs: 'none'}}>
                        <Typography fontSize={{sm: '20px', xs: '12px'}} fontWeight={600} color='primary.dark'>NEXT SNEAKERS</Typography>
                        <Typography fontSize='16px'display={{sm: 'block', xs: 'none'}}>Магазин лучших кроссовок</Typography>
                    </Stack>
                </Stack>
            </Link>
            <Stack direction='row' spacing={{mobile:'30px', xs: '15px'}} alignItems='center'>
                <OpenCartButton/>
                <Link component={NextLink} href='/Liked' underline='none' sx={{width:'20px', height: '20px'}}><FavoriteBorderOutlinedIcon/></Link>
                <Link component={NextLink} href='/LogIn' underline='none' sx={{width:'20px', height: '20px'}}><AccountCircleOutlinedIcon/></Link>
            </Stack>
        </Stack>
    </Container>
  )
}
