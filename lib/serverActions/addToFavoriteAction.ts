"use server"
import { prisma } from "../prisma"

export const toggleInFavorite = async(userId:number, inFavorite: number[], itemId: number) => {
    
    if (!!inFavorite.find(el=>el==itemId)) {
    
        const user = await prisma.user.update({
            where: {id: userId},
            data: {inFavorite: [...inFavorite.filter(el => el != itemId)]}
        })
        return user
    }

    const user = await prisma.user.update({
        where: {id: userId},
        data: {inFavorite: [...inFavorite, itemId]}
    })
    return user
  }