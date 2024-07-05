"use client"
import { selectUser } from '@/lib/slices/authSlice'
import { ISneakersCardData } from '@/lib/types'
import React from 'react'
import { useSelector } from 'react-redux'
import SneakersCard from '../../(Main)/components/sneakersCard'

export default function LikedSneakersList({data}: {data: ISneakersCardData[]}) {

    const user = useSelector(selectUser)
    const sneakersDataList = user?.inFavorite != null? data.filter(element => user.inFavorite?.find(el => el == element.id)) : []
  
    
    
    return (
      <>
        {
            sneakersDataList.map((value : ISneakersCardData)=>
            <SneakersCard
                id={value.id}
                title={value.title}
                price={value.price}
                image={value.image}
                key={value.id}
              />
            )
        }
      </>
    )
}
