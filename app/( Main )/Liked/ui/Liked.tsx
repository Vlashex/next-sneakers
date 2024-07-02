import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Liked() {
  return (
    <Container maxWidth='sm' sx={{}}>
        <Stack direction={'row'}>
            <Button/>
            <Typography variant='h3'>Мои закладки</Typography>
        </Stack>
    </Container>
  )
}
