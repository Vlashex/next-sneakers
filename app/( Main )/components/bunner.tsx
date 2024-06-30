import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import img from '@/public/banner.png'

export default function Banner() {
    return (
      <Stack direction='row' sx={{background: '#F4EFE9', borderRadius: '20px', overflow: 'hidden', m: '45px 0'}} justifyContent='space-between'>
        <Stack sx={{p: '50px'}} useFlexGap spacing={'30px'}>
          <Box>
            <Typography variant="h2" fontWeight={700} color='success.main'>Stan Smith,</Typography>
            <Typography variant="h2" fontWeight={700} color='primary.dark'>Forever!</Typography>
          </Box>
          <Button 
            sx={{
              bgcolor:"success.light", 
              color: 'white', 
              fontWeight: '700', 
              borderRadius: '110px', 
              p: '14px 60px', 
              maxWidth: 'min-content',
              ":hover": {
                background: 'success.main'
              }
            }}
          >Купить</Button>
        </Stack>
        <Image width={600} src={img} alt=''/>
      </Stack>
    )
  }