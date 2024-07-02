"use client"
import SneakersCartCard from "./sneakersCartCard"
import { useSelector } from "react-redux"
import { selectUser } from "@/app/api/authSlice"
import { useGetSneakersListQuery } from "@/app/api/getSneakersList"

export interface SneakersCardInterface {
    title:  string
    price: number
    image: any
}

export interface SneakersListInterface {
    attributes: SneakersCardInterface,
    id: number
} 


export default function SneakersCartList() {

  const userCart = useSelector(selectUser)?.userCart || []

  const sneakersDataListRaw:SneakersListInterface[] = useGetSneakersListQuery('sneakers-cards?populate=*').data?.data || []

  const sneakersDataList:SneakersListInterface[] = sneakersDataListRaw.filter((element:SneakersListInterface) => userCart.find((e)=>e==element.id))

  return (
    <>
    {
      sneakersDataList
      ? sneakersDataList.map((value : SneakersListInterface)=>
        <SneakersCartCard
          id={value.id}
          title={value.attributes.title}
          price={value.attributes.price}
          image={value.attributes.image}
          key={value.id}
        />
      )
      : null
    }
    </>
  )
}