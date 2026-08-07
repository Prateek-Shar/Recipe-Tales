import Connect from "@/middleware/mongo_connect";
import Recipe from "@/Schema/recipeDet";


export const GET = async(req : Request) => {

    try {
        await Connect();    
        const { searchParams } = new URL(req.url);
        const meal_name = searchParams.get("recipe_name");


        if(!meal_name) {
            return new Response(JSON.stringify({msg : "Meal not recieved from frontend"}) , {status : 404})
        }
        
        try {

            const details = await Recipe.findOne({"Recipe_name" : meal_name}).select("-_id -Recipe_short_desc -__v")

            if(!details) {
                return new Response(JSON.stringify({msg : "No such meal found in DB"}) , {status : 404})
            }

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