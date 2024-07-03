import { IsneakersCardData } from "@/app/( Auth )/SignUp/api/types";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request): Promise<Response> {

    const sneakersCardsData = await prisma.sneakersCardData.findMany()

    return Response.json({...sneakersCardsData})
}
