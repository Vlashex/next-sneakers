"use server"
import { prisma } from "../prisma"

export const toggleInCart = async(userId:number, inCart: number[], itemId: number) => {
    
    if (!!inCart.find(el=>el==itemId)) {
    
        const user = await prisma.user.update({
            where: {id: userId},
            data: {inCart: [...inCart.filter(el => el != itemId)]}
        })
        return user
    }

    const user = await prisma.user.update({
        where: {id: userId},
        data: {inCart: [...inCart, itemId]}
    })
    return user
  }