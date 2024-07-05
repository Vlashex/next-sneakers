"use server"

import { prisma } from "@/lib/prisma"

export const getListDataById = async (idList: number[]) => {
    const data = await prisma.sneakersCardData.findMany({where: {
        id: {in: idList}
    }})
    return data
}