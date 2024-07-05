"use client"
import { selectUser } from '@/lib/slices/authSlice'
import { IsneakersCardData } from '@/lib/types'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SneakersCard from '../../(Main)/components/sneakersCard'
import { getListData } from '../../(Main)/actions/getListAction'

export default function LikedSneakersList() {

    const user = useSelector(selectUser)
    const [sneakersDataList, setSneakersDataList] = useState<IsneakersCardData[]>([])
  
    useEffect(()=>{
      const getLikedSneakersListData = async() => {
        user?.inFavorite != undefined?setSneakersDataList((await getListData('')).filter(element=>user.inFavorite?.find(el=>el==element.id))):null
      }
      getLikedSneakersListData()
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
