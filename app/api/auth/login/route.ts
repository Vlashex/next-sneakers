import { prisma } from "@/lib/prisma";
import jwt from 'jsonwebtoken'

const signToken = (userId: number, secretKey: string) => {
    return jwt.sign({ userId }, secretKey, { expiresIn: '7d' }); 
  };

export async function POST(request: Request) {
    try {
        const userData = await request.json();
        
        const user = await prisma.user.findFirstOrThrow({where: {email: userData.email, password: userData.password}});

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
        return new Response(JSON.stringify({ error: 'Failed to login' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // Internal Server Error
        });
    }
}