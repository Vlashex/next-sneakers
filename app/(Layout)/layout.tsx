import CartWraper from '@/widjets/cart'
import Header from '@/widjets/header'
import { Container } from '@mui/material'
import React, { ReactNode } from 'react'

export default async function Layout({
  children
}: {
  children: ReactNode
}) {

  return (
    <Container maxWidth='xl' sx={{p: '85px 30px', height: '100%'}}>
        <CartWraper/>
        <Container maxWidth='lg' sx={{background: '#fff', borderRadius: '20px', p: '40px 0', minHeight: '100%'}}>
          <Container maxWidth='lg' sx={{borderBottom: '1px solid #EAEAEA', pb: '44px'}}>
            <Header/>
          </Container>
          {children}
        </Container>
    </Container>
  )
}
