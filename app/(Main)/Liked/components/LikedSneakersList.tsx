"use client"
import { selectUser } from '@/app/api/slices/authSlice'
import { IsneakersCardData } from '@/app/types'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getListData } from '../../actions/getListAction'
import SneakersCard from '../../components/sneakersCard'

export default function LikedSneakersList() {

    const user = useSelector(selectUser)
    const [sneakersDataList, setSneakersDataList] = useState<IsneakersCardData[]>([])
  
    useEffect(()=>{
      const gg = async() => {
        user?.inFavorite != undefined?setSneakersDataList((await getListData('')).filter(element=>user.inFavorite?.find(el=>el==element.id))):null
      }
      gg()
    },[user])
    
    return (
      <>
        {
            sneakersDataList.map((value : IsneakersCardData)=>
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
