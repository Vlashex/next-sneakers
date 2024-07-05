"use server"

import { prisma } from "@/lib/prisma"

export const getListDataByIdRange = async (id: number, filter: string) => {
    let idArr:number[] = []
    for (let i = 0; i<id; i++) idArr = [...idArr, i]
    const data = await prisma.sneakersCardData.findMany({where: {
        AND: {
            id: {in: idArr},
            title: {
                contains: filter as string,
                mode: 'insensitive'
            }
        }
    }})
    return data
}