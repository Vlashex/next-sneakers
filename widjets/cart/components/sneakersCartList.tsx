"use client"
import { IsneakersCardData } from "@/app/types"
import SneakersCartCard from "./sneakersCartCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "@/app/api/slices/authSlice"
import { Button } from "@mui/material"
import { getListData } from "@/app/(Main)/actions/getListAction"




export default function SneakersCartList() {

  const user = useSelector(selectUser)
  const [sneakersDataList, setSneakersDataList] = useState<IsneakersCardData[]>([])

  useEffect(()=>{
    const gg = async() => {
      user?.inCart != undefined?setSneakersDataList((await getListData('')).filter(element=>user.inCart?.find(el=>el==element.id))):null
    }
    gg()
  },[user])

  return (
    <>
    {
      sneakersDataList
      ? sneakersDataList.map((value : IsneakersCardData)=>
        <SneakersCartCard
          id={value.id}
          title={value.title}
          price={value.price}
          image={value.image}
          key={value.id}
        />
      )
      : null
    }
    </>
  )
}