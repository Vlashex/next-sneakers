import { IsneakersCardData } from "@/app/(Auth)/SignUp/api/types"
import SneakersCard from "@/app/(Main)/components/sneakersCard"
import { prisma } from "@/lib/prisma"


export default async function SneakersList() {

  const sneakersDataList:IsneakersCardData[] = await prisma.sneakersCardData.findMany()


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