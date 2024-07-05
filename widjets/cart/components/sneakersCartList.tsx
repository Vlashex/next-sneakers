import { IsneakersCardData } from "@/lib/types"
import SneakersCartCard from "./sneakersCartCard"

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