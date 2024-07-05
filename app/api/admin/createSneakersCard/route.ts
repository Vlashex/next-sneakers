import { ISneakersCardData } from "@/lib/types";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request): Promise<Response> {
    try {
        const cardData = await request.json();
        
        const card = await prisma.sneakersCardData.create({
            data: {
                title: cardData.title,
                price: typeof cardData.price == "number"?cardData.price:parseInt(cardData.price, 10),
                image: cardData.image
            }
        });

        return new Response(JSON.stringify({ name: 'Create sneakers card', cardData, card }), {
            headers: { 'Content-Type': 'application/json' },
            status: 201 // Created
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Failed to create sneakers card' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // Internal Server Error
        });
    }
}
