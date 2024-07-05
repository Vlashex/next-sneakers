"use server"

import { prisma } from "@/lib/prisma"

export const getListData = async (filter: string) => {
    const data = prisma.sneakersCardData.findMany({where: {
        title: {
            contains: filter as string,
            mode: 'insensitive'
        }
    }})
    return data
}

export const getListDataById = async (id: number, filter: string) => {
    let idArr:number[] = []
    for (let i = 0; i<id; i++) idArr = [...idArr, i]
    const data = prisma.sneakersCardData.findMany({where: {
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