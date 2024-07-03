"use client"
import { IsneakersCardData } from "@/app/(Auth)/SignUp/api/types"
import SneakersCartCard from "./sneakersCartCard"
import { useSelector } from "react-redux"




export default function SneakersCartList() {


  const sneakersDataList:IsneakersCardData[] = []
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