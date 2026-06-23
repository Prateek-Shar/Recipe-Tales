import Connect from "@/middleware/mongo_connect";
import Recipe_Details from "@/Schema/recipeDet";


export const GET = async(req : Request) => {

    try {

        const { searchParams } = new URL(req.url);
        const meal_name = searchParams.get("recipe_name");
        

        if(!meal_name) {
            return new Response(JSON.stringify({msg : "Meal not found"}) , {status : 404})
        }
        
        await Connect();    

        try {

            const details = await Recipe_Details.find({"Recipe_name" : meal_name}).select("-_id -Recipe_short_desc -__v")

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