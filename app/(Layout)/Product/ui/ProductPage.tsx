import CartButton from '@/entities/cartButton'
import { prisma } from '@/lib/prisma'
import { Container, Link, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

export default async function ProductPage({
    searchParams
}: {
    searchParams: {[key: string]: string | string[]}
}) {
    const itemId = searchParams.itemId as string
    const selectedSize = searchParams.size as string
    const avaibleSizes = ['xs', 's', 'md', 'l', 'xl']

    const productData = await prisma.sneakersCardData.findFirst({where: {id: Number(itemId)}})

    
  return (
    !!productData?
    <Container maxWidth='sm'>
        <Stack alignItems={'center'}>
            <Image width={300} height={300} src={productData?.image || ''} alt=''/>
            <Typography sx={{mb: '20px'}} fontWeight={200} variant='h2'>{productData?.title}</Typography>
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack>
                    <Typography variant='h5' color={'primary.light'}>Цена:</Typography>
                    <Typography variant='h5' color={'primary.darck'} fontWeight={600}>{productData?.price} руб.</Typography>
                </Stack>

                {
                    avaibleSizes.map((value, index)=>
                    <Link key={index} href={`?itemId=${itemId}&size=${value}`} component={NextLink} sx={{
                        border: `2px solid ${selectedSize==value?'#04C6F0':'#F2F2F2'}`,
                        width: '48px',
                        height: '32px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        fontWeight: '800',
                        textAlign: 'center',
                    }}>{value}</Link>
                    )
                }

                <CartButton type='main' itemId={productData?.id} sx={{mt: ''}}/>
            </Stack>
        </Stack>
    </Container>
    :<></>
  )
}
