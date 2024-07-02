import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import FavoriteButton from "../../../entities/favoriteButton";
import CartButton from "../../../entities/cartButton";
import { SneakersCardInterface } from "@/app/( Main )/components/sneakersList";

export default function SneakersCartCard({id, title, price, image} : SneakersCardInterface & {id: number}) {

    return (
      <Box sx={{
        display: 'flex',
        p: '20px',
        width: '100%',
        height: '120px',
        border: '1px solid #F3F3F3',
        borderRadius: '40px',
        mb: '40px',
      }}>
        <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
            <Image width={90} height={90} src={`http://localhost:1337${image.data.attributes.url}`} alt=''/>
            <Stack sx={{m: '0 12px'}}>
                <Typography 
                  variant="body1" 
                  fontWeight={600} 
                  sx={{maxWidth: '160px', height: '40px', overflow: 'hidden'}}>{title}
                </Typography>
                <Typography fontWeight={600}>{`${price} руб.`}</Typography>
            </Stack>
            <CartButton itemId={id}/>
        </Stack>
      </Box>
    )
  }