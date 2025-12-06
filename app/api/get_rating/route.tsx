import Connect from "@/db/connect";
import sch from "@/Schema/likedRecipe";


export const GET = async(req : Request) => {

    try {

        await Connect();

        const { searchParams } = new URL(req.url);
        const Recipe_name = searchParams.get("Recipe_name");

        if(!Recipe_name) {
            return new Response(JSON.stringify({message : `Body is null`}) , {
                status : 401
            })
        }

        const check = await sch.findOne({"Recipe_name" : Recipe_name}).select("Counter");

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