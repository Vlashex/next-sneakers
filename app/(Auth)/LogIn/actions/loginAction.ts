"use server"

import { prisma } from "@/lib/prisma"
import crypto from "crypto";
import jwt from 'jsonwebtoken'

function hashValue(value: string) {
    const hash = crypto.createHash('sha256');
    hash.update(value);
    return hash.digest('hex'); 
  }

const signToken = (userId: number, secretKey: string) => {
    return jwt.sign({ userId }, secretKey, { expiresIn: '7d' }); 
  };

export const login = async (formData: FormData) => {
    try {
        const email = formData.get("email")
        const password = formData.get("password")
    
        const user = (await prisma.user.findFirstOrThrow({where: {
            email: email as string,
            password: hashValue(password as string)
        }})) || null
    
        if (user == null) return null
    
        const token = (await prisma.token.upsert({
            where: { userId: user.id },
            update: {},
            create: {
                userId: user.id,
                access_token: signToken(user.id, 'H256')
            }
        })).access_token
    
        return {
            user,
            token
        }
    } catch (error) {
        console.log(error)
        return null
    }
}