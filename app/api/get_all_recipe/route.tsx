import Connect from "@/middleware/mongo_connect";
import Recipe from "@/Schema/recipeDet";


export const GET = async(req : Request) => {

    const limit = 5 

    try {

        await Connect();

        const { searchParams } = new URL(req.url)
        const page = Number(searchParams.get("pageNo"))
        
        const skip_doc = (page - 1) * limit 

        console.log("Skip value " , skip_doc)
        console.log("Page No. " , page)

        const details = await Recipe.find().select("Recipe_name Tags Author_name _id").skip(skip_doc).limit(limit)
        const total_count = await Recipe.find().countDocuments()

        if(!details) {
            return new Response(JSON.stringify({"message" : "Recipes Not Found"}) , {
                status : 404
            })
        }

        console.log(details)

        return new Response(JSON.stringify({det : details , count : total_count}) , {status : 200})

    }

    catch(error) {
        console.log("API Broke : " , error)
        return new Response(JSON.stringify({"message" : "Internal Server error"}) , {status : 500})
    }
}