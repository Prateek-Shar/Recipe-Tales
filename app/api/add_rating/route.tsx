import sch from '@/Schema/likedRecipe'
import Connect from '@/db/connect'


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

        const check = await sch.findOne({"Recipe_name" : Recipe_name})

        if(!check) {

            const data = await sch.create({"Recipe_name" : Recipe_name , Counter : 1})

            return new Response(JSON.stringify({message : "Created Field Updated counter" , result : data}) , {
                status : 200
            })
        }

        if(check) {
            const data = await sch.findOneAndUpdate({"Recipe_name" : Recipe_name} , {$inc : {Counter : 1}}, {new : true})

            return new Response(JSON.stringify({message : "Updated counter" , result : data}) , {
                status : 200
            })
        }

    }

    catch(err) {

        console.log(err);
        return new Response(JSON.stringify({message : "Internal Server Error"}) , {
            status : 500
        })

    }

}