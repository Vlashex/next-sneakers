"use client"
import { IsneakersCardData } from "@/lib/types"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SneakersCard from "@/app/(Layout)/(Main)/components/sneakersCard"
import { Button, Input, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { getListDataById } from "../actions/getListAction";
import { useInView } from "react-intersection-observer";

export default function SneakersList() {

  const { ref, inView } = useInView()

  const [sneakersCardsData, setSneakersCardsData] = useState<IsneakersCardData[]>([])
  const [filter, setFilter] = useState<string>('')

  const [lastCardId, setLastCardId] = useState<number>(48)
  

  useEffect(() => {
    async function addNexCardsToList() {
      setSneakersCardsData(await getListDataById(lastCardId, filter))
    }
    if (inView) {
      addNexCardsToList()
      setLastCardId(lastCardId+24)
    }
    else if(filter != '') {
      addNexCardsToList()
    }
  }, [inView, filter])


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
          <form action={(formData: FormData)=>{
            const rawData = formData.get('filter') as string
            rawData != null? setFilter(rawData): null
            console.log(rawData)
          }}>
            <Input name="filter" disableUnderline placeholder="Поиск..." sx={{flex: '1'}}/>
          </form>
        </Stack>
      </Stack>
      <Stack direction='row' flexWrap='wrap' justifyContent={{sm:'space-between', xs: 'space-around'}}>
        
      { 
      sneakersCardsData.map((value : IsneakersCardData)=>
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
    <div ref={ref}/>  
    </>
  )
}

