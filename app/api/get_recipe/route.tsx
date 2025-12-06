import Connect from "@/db/connect";
import Recipe_Details from "@/Schema/recipeDet";


export const GET = async() => {

    try {
        
        await Connect();

        const details = await Recipe_Details.find().sort({_id : -1}).limit(5)

        return new Response(JSON.stringify({det : details}) , {status : 200})

    }

    catch {
        console.log("API Broke")
    }
}