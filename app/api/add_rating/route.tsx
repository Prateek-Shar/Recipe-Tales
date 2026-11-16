import Liked from '@/Schema/likedRecipe'
import Connect from '@/middleware/mongo_connect'


export const POST = async(request : Request) => {

    try {

        await Connect();

        const body = await request.json()

        const { meal_id } = body

        if(!meal_id) {
            return new Response(JSON.stringify({message : `Didn't recieve id from frontend`}) , {
                status : 401
            })
        }

        const check = await Liked.findOne({"Recipe_id" : meal_id});

        if(!check) {
            const data = await Liked.create({"Recipe_id" : meal_id , "Counter" : 1})
            return new Response(JSON.stringify({"message" : "New Entry"}) , {status : 200})
        }
      
        await Liked.findOneAndUpdate({"Recipe_id" : meal_id} , {$inc : {Counter : 1}}, {new : true})        
        return new Response(JSON.stringify({message : "Recipe counter incremented"}) , {status : 200})
    
    }

    catch(err) {

        console.error(err);
        return new Response(JSON.stringify({message : "Internal Server Error"}) , {
            status : 500
        })

    }

}