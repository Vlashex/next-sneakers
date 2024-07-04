import { prisma } from "@/lib/prisma"

export async function POST(request: Request): Promise<Response> {

    const requestData = [...(await request.json()).id]

    console.log(requestData)

    const del = requestData.map((value:any)=>{
        const dl = async (id:any) => {
            return await prisma.sneakersCardData.delete({where: {id: id}})
        }
        return dl(value)
    })

    return Response.json({del})
}