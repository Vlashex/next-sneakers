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