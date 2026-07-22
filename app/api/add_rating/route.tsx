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

        const data = await Liked.findOneAndUpdate({"Recipe_name" : Recipe_name} , {$inc : {Counter : 1}}, {new : true})

        if(!data) {
            return new Response(JSON.stringify({message : "Did Not Find Recipe"}) , {status : 401})
        }

        return new Response(JSON.stringify({message : "Updated counter" , result : data}) , {
            status : 200
        })
    
    }

    catch(err) {

        console.log(err);
        return new Response(JSON.stringify({message : "Internal Server Error"}) , {
            status : 500
        })

    }

}