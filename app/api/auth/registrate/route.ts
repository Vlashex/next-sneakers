import { prisma } from "@/lib/prisma";
import { error } from "console";
import jwt from 'jsonwebtoken'

const signToken = (userId: number, secretKey: string) => {
    return jwt.sign({ userId }, secretKey, { expiresIn: '7d' }); 
  };

export async function POST(request: Request) {
    try {
        const userData = await request.json();
        
        const user = await prisma.user.upsert({
            where: {email: userData.email, password: userData.password},
            update: {},
            create: {
                username: userData.username,
                email: userData.email,
                password: userData.password,
                inCart: [],
                inFavorite: []
            }
        })

        const token = await prisma.token.upsert({
            where: { userId: user.id },
            update: {},
            create: {
                userId: user.id,
                access_token: signToken(user.id, 'H256')
            }
        })

        return new Response(JSON.stringify({ user, token: token.access_token }), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 // Created
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to registrate' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // Internal Server Error
        });
    }
}