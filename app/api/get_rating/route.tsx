import Connect from "@/middleware/mongo_connect";
import sch from "@/Schema/likedRecipe";


export const GET = async(req : Request) => {

    try {

        await Connect();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get("meal_id");

        if(!id) {
            return new Response(JSON.stringify({message : `Body is null`}) , {
                status : 401
            })
        }

        const check = await sch.findOne({"Recipe_id" : id}).select("-_id -Recipe_name -__v");

        // console.log(`DB response : ${check}`);

        if(!check) {
            return new Response(JSON.stringify({result : 0 , message : "No such recipe found"}) , {
                status : 200
            })
        }

        return new Response(JSON.stringify({result : check , message : "Fetched rating successfully"}) , {
            status : 200
        })


    }

    catch(err) {

        console.log(err)

        return new Response(JSON.stringify({message : "Internal server error"}) , {
            status : 500
        })
    }

}