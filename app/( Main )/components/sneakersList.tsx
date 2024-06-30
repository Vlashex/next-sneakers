"use client"
import SneakersCard from "@/entities/sneakersCard"
import { useGetSneakersListQuery } from "../model/getSneakersList"

export interface SneakersCardInterface {
    id: number
    title:  string
    price: number
    image: any
}

export interface SneakersListInterface {
    attributes: SneakersCardInterface,
    id: number
} 


export default function SneakersList() {

    const res = useGetSneakersListQuery('sneakers-cards?populate=*')
  
    const sneakersDataList:SneakersListInterface[] = res.data?.data

    console.log(sneakersDataList)
  
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