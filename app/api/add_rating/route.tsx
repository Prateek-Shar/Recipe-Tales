import Liked from '@/Schema/likedRecipe'
import Connect from '@/middleware/mongo_connect'
import { message } from 'antd';


export const POST = async(request : Request) => {

    try {

        await Connect();

        const body = await request.json()

        const { Recipe_name } = body

        if(!Recipe_name) {
            return new Response(JSON.stringify({message : `Body is null`}) , {
                status : 401
            })
        }

        const check = await Liked.findOne({"Recipe_name" : Recipe_name});

        if(!check) {
            const data = await Liked.create({"Recipe_name" : Recipe_name , "Counter" : 1})
            return new Response(JSON.stringify({"message" : "New Entry"}) , {status : 200})
        }
      
        await Liked.findOneAndUpdate({"Recipe_name" : Recipe_name} , {$inc : {Counter : 1}}, {new : true})        
        return new Response(JSON.stringify({message : "Recipe counter incremented"}) , {status : 200})
    
    }

    catch(err) {

        console.error(err);
        return new Response(JSON.stringify({message : "Internal Server Error"}) , {
            status : 500
        })

    }

}