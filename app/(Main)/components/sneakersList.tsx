"use client"
import { IsneakersCardData } from "@/app/types"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SneakersCard from "@/app/(Main)/components/sneakersCard"
import { Button, Input, Stack, Typography } from "@mui/material"
import { useState } from "react";
import { getListData } from "../actions/getListAction";

export default function SneakersList({data}: {data: IsneakersCardData[]}) {

  const [sneakersListData, setSneakersListData] = useState(data)


  return (
    <>
    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{mb: '40px'}}>
        <Typography fontSize={{sm:"32px", xs: '22px'}} display={{mobile: 'flex', xs: 'none'}} marginRight='15px' fontWeight={600}>Все кроссовки</Typography>
        <Stack direction='row' sx={{border: '1px solid #F3F3F3', borderRadius: '10px', p: '5px 0', flex: '1'}}>
          <Button startIcon={<SearchOutlinedIcon/>} 
          sx={{
            p: '5px 5px 5px 10px', 
            m: '', 
            minWidth: '0', 
            overflow: 'hidden', 
            width: 'min-content',
            ":hover": {m: ''}
            }}
          />
          <form action={async(formData:FormData)=>{
              const filter = formData.get("filter") as string
              const data = await getListData(filter)
              setSneakersListData(data)
          }}>
            <Input name="filter" disableUnderline placeholder="Поиск..." sx={{flex: '1'}}/>
          </form>
        </Stack>
      </Stack>
      <Stack direction='row' flexWrap='wrap' justifyContent={{sm:'space-between', xs: 'space-around'}}>
      {
        sneakersListData.map((value : IsneakersCardData)=>
        <SneakersCard
            id={value.id}
            title={value.title}
            price={value.price}
            image={value.image}
            key={value.id}
          />
        )
      }
    </Stack>
    </>
  )
}

