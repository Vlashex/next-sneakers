"use client"
import SneakersCard from "@/app/( Main )/components/sneakersCard"
import { useGetSneakersListQuery } from "../../api/getSneakersList"
import { useSelector } from "react-redux"
import { selectUser } from "@/app/api/authSlice"

export interface SneakersCardInterface {
    title:  string
    price: number
    image: any
}

export interface SneakersListInterface {
    attributes: SneakersCardInterface,
    id: number
} 


export default function SneakersList() {

  const sneakersDataList:SneakersListInterface[] = useGetSneakersListQuery('sneakers-cards?populate=*&sort[0]=id').data?.data

  return (
    <>
    {
      sneakersDataList
      ? sneakersDataList.map((value : SneakersListInterface)=>
      <SneakersCard
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