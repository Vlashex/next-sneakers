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

export const register = async (formData: FormData) => {
    const username = formData.get("username")
    const email = formData.get("email")
    const password = formData.get("password")

    const user = await prisma.user.create({data: {
        username: username as string,
        email: email as string,
        password: hashValue(password as string)
    }})

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
}