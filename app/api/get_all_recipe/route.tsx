import Connect from "@/middleware/mongo_connect";
import Recipe_Details from "@/Schema/recipeDet";


export const GET = async() => {

    try {
        
        await Connect();

        try {

            const details = await Recipe_Details.find().select("Recipe_name Tags Author_name _id")

            return new Response(JSON.stringify({det : details}) , {status : 200})
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