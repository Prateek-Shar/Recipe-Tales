export const GET = async(req : Request) => {

    try {

        const url = new URL(req.url)

        const id = url.searchParams.get("id")

        if(!id) {
            return new Response(JSON.stringify({msg : "ID not availbale"}) , {
                status : 404
            })
        }

        const uri = process.env.NEXT_PUBLIC_SEARCH_RECIPE_BY_ID_API

        console.log("uri : " , uri)
        console.log("id : " , id)

        const meal_det = await fetch(`${uri}${id}`);

        console.log("Details : " , meal_det)

        if(!meal_det.ok) {
            return new Response(JSON.stringify({msg : "Not able to retrieve data"}) , {
                status : 401
            })
        }

        return new Response(JSON.stringify({msg : "Data retrieval successful" , meal : meal_det}) , {
            status : 200
        })
    
    }

    catch(error) {
        console.error("Error from backend : " , error)
        return new Response(JSON.stringify({err : error}) , {
            status : 500
        })
    }
}   


