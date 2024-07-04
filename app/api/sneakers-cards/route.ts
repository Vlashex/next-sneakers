import { prisma } from "@/lib/prisma";

export async function GET(): Promise<Response> {

    const sneakersCardsData = await prisma.sneakersCardData.findMany()

    return Response.json({...sneakersCardsData})
}