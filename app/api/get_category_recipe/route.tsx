import Connect from "@/middleware/mongo_connect";
import Recipe from "@/Schema/recipeDet";

export const GET = async(request : Request) => {    

    try {

        await Connect();

        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");

        if(!category) {
            return new Response(JSON.stringify({"message" : "Category not found in URL"}) , {
                status : 401
            })
        }

        const res = await Recipe.find({ Tags : {$in : [category]} }).select("Author_name Recipe_name Tags Servings Cook_Time");
        const count = await Recipe.countDocuments({ Tags : {$in : [category]} });

        if (!res) {
            console.log("Category not found in DB")
            return new Response(JSON.stringify({"message" : "Category not found in DB"}) , {
                status : 401
            })
        }

        return new Response(JSON.stringify({"message" : "Category found" , recipe_data : res , cou : count}) ,  {
            status : 200
        })

    }

    catch(error) {
        console.log("Error in get_category_recipe : " , error)
        return new Response(JSON.stringify({"message" : "Internal server error"}) , {
            status : 500
        })
    }
}
