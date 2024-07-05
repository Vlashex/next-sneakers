"use client"
import { IsneakersCardData } from "@/lib/types"
import SneakersCartCard from "./sneakersCartCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "@/lib/slices/authSlice"
import { Button } from "@mui/material"
import { getListData } from "@/app/(Layout)/(Main)/actions/getListAction"




export default function SneakersCartList() {

  const user = useSelector(selectUser)
  const [sneakersDataList, setSneakersDataList] = useState<IsneakersCardData[]>([])

  useEffect(()=>{
    const getCartSneakersListData = async() => {
      const listdataraw = await getListData('')
      const listdata = listdataraw.filter(element=>user?.inCart?.find(el=>el==element.id))
      setSneakersDataList(listdata)
    }
    user?.inCart!=undefined?getCartSneakersListData():null
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