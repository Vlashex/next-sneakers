import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteButton from "../../../entities/favoriteButton";
import CartButton from "../../../entities/cartButton";
import { IsneakersCardData } from "@/app/types";

export default function SneakersCard({id, title, price, image}: IsneakersCardData) {

    
  
    return (
      <Box sx={{
        position: 'relative',
        p: '20px 30px',
        width: '210px',
        height: '280px',
        border: '1px solid #F3F3F3',
        borderRadius: '40px',
        mb: '40px',
      }}>
        <Image width={125} height={125} src={image} alt=''/>
        <Typography 
          variant="body1" 
          fontWeight={600} 
          sx={{maxWidth: '160px', height: '40px', overflow: 'hidden', m: '14px 0'}}>{title}</Typography>
  
        <Stack direction='row' justifyContent='space-between'>
          <Stack>
            <Typography>Цена:</Typography>
            <Typography fontWeight={600}>{`${price} руб.`}</Typography>
          </Stack>
          <CartButton itemId={id} type='main'/>
        </Stack>
  
        <FavoriteButton 
            itemId={id}
          />
      </Box>
    )
  }