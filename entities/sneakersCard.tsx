import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteButton from "./favoriteButton";
import CartButton from "./cartButton";
import { SneakersCardInterface } from "@/app/( Main )/components/sneakersList";

export default function SneakersCard({id, title, price, image} : SneakersCardInterface) {

    
  
    return (
      <Box sx={{
        position: 'relative',
        p: '20px 30px',
        width: '210px',
        height: '280px',
        border: '1px solid #F3F3F3',
        borderRadius: '40px',
        mb: '40px'
      }}>
        <Image width={125} height={125} src={`http://localhost:1337${image.data.attributes.url}`} alt=''/>
        <Typography 
          variant="body1" 
          fontWeight={600} 
          sx={{maxWidth: '160px', height: '40px', overflow: 'hidden', m: '14px 0'}}>{title}</Typography>
  
        <Stack direction='row' justifyContent='space-between'>
          <Stack>
            <Typography>Цена:</Typography>
            <Typography fontWeight={600}>{`${price} руб.`}</Typography>
          </Stack>
          <CartButton/>
        </Stack>
  
        <FavoriteButton 
            sx={{}}
          />
      </Box>
    )
  }