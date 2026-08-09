import Connect from "@/middleware/mongo_connect";
import Recipe from "@/Schema/recipeDet";


export const GET = async(req : Request) => {

    const { searchParams } = new URL(req.url)
    const page = searchParams.get("page")


    try {

        if(!page) {
            return new Response(JSON.stringify({msg : "No Page number recieved from frontend"}) , {status : 401})
        }

        const skip_doc = (Number(page) -1) * 5 

        await Connect();

        try {

            const details = await Recipe.find().select("Recipe_name Tags Author_name _id").skip(skip_doc).limit(5)
            const total_count = await Recipe.find().countDocuments()

            console.log(details)

            return new Response(JSON.stringify({det : details , count : total_count}) , {status : 200})
        }

        catch(error) {

            console.log("Error : " , error)

            return new Response(JSON.stringify({message : "Internal Server Error"}) , {status : 500})
        }

    }

    catch {
        console.log("API Broke")
    }
}