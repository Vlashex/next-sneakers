import { Container, Stack, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export default function Cart({children}: {children:ReactElement}) {
    return (
        <Container maxWidth='xl' sx={{width: 'fit-content',height: '100%', display: 'flex'}}>
            <Stack sx={{
                width: '385px',
                height: '100%',
                background: '#fff',
                overflowY: 'scroll',
                padding: '32px'
            }}>
              <Typography fontSize={'24px'} fontWeight={900} sx={{mb: '30px'}}>Корзина</Typography>
              {children}
            </Stack>
        </Container>
    )
}
