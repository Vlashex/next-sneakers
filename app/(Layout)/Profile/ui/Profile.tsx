"use client"
import { selectUser } from '@/lib/slices/authSlice'
import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

    const user = useSelector(selectUser)

  return (
    <Container maxWidth='sm' sx={{mt: '100px'}}>
        <Stack spacing={'20px'}>
            <Typography variant='h4'>Id = {user?.id}</Typography>
            <Typography variant='h4'>Name = {user?.username}</Typography>
            <Typography variant='h4'>Email = {user?.email}</Typography>
        </Stack>
    </Container>
  )
}
