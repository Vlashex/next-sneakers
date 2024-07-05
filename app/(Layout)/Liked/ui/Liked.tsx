import { Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import LikedSneakersList from '../components/LikedSneakersList'
import { prisma } from '@/lib/prisma'

export default async function Liked() {

  const data = await prisma.sneakersCardData.findMany()

  return (
    <Container maxWidth='md' sx={{}}>
        <Stack direction={'row'}>
            <Button/>
            <Typography variant='h3' sx={{m: '20px 0'}}>Мои закладки</Typography>
        </Stack>
        <Stack direction={'row'} flexWrap={'wrap'} width={'100%'} justifyContent={{sm:'space-between', xs: 'space-around'}}>
          <LikedSneakersList data={data}/>
        </Stack>
    </Container>
  )
}
