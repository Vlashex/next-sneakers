import { Button, Container, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export default function Cart({children}: {children:ReactElement}) {

    return (
        <Container maxWidth='xl' sx={{
            width: {sm:'fit-content', xs: '100%'},
            minWidth: {mobile: '385px', xs: ''},
            height: '100%', 
            display: 'flex', 
            padding: '0',
            flex: {sm: '0', xs: '1'}
            }}>
            <Stack sx={{
                width: '100%',
                height: '100%',
                background: '#fff',
                overflowY: 'scroll',
                padding: '32px',
                flex: '1'
            }}>
              <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} mb='30px'>
                <Typography fontSize={'24px'} fontWeight={900}>Корзина</Typography>
                <Button sx={{padding: '5px 10px', height: 'fit-content', display: {sm: 'none', xs: 'block'}, fontSize: '.7rem'}} variant='outlined'>Закрыть корзину</Button>
              </Stack>
              {children}
            </Stack>
        </Container>
    )
}
