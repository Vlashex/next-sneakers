import { prisma } from "@/lib/prisma"

export const getCartList = async(inCart: number[]) => {
    const cartListData = await prisma.sneakersCardData.findMany({where: {
        id: {in: inCart}
    }})
    return cartListData
}