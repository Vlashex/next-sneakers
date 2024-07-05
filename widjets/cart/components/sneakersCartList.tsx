"use client"
import { ISneakersCardData } from "@/lib/types"
import SneakersCartCard from "./sneakersCartCard"
import { useLayoutEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "@/lib/slices/authSlice"
import { getListDataById } from "@/lib/serverActions/getListByIdAction"

export default function SneakersCartList() {

  const [sneakersDataList, setSneakersDataList] = useState<ISneakersCardData[]>([])
  const user = useSelector(selectUser)

  useLayoutEffect(()=>{
    const getCartListData = async() => {
      user?.inCart!=undefined
        ?setSneakersDataList(
          await getListDataById(user?.inCart)
        )
        :null
    }
    getCartListData()
  },[user])

  return (
    <>
    {
      sneakersDataList
      ? sneakersDataList.map((value : ISneakersCardData)=>
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