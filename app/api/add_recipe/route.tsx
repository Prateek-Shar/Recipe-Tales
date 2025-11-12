import Recipe_Details from "@/Schema/recipeDet";
import Connect from "@/db/connect";


export async function POST(request: Request)  {
  try {

    await Connect()

    const body = await request.json();

    if(!body) {
      console.log(`Request body is null`);
      return;
    }

    const { Recipe_name , Recipe_short_desc , Tags , Blog , Instructions , Prep_Time , Cook_Time , Servings , Ingredient } = body

    console.log(body)

    if(!Recipe_name || !Recipe_short_desc || !Tags || !Blog || !Instructions || !Prep_Time || !Cook_Time || !Servings || !Ingredient) {
      return new Response(JSON.stringify({message  : "Missing Fields"}) , {
        status : 401
      })
    }
    
    await Recipe_Details.create({Recipe_name : Recipe_name , 
    Recipe_short_desc :  Recipe_short_desc , 
    Tags : Tags , 
    Blog : Blog ,
    Instructions : Instructions , 
    Prep_Time : Prep_Time , 
    Cook_Time :  Cook_Time , 
    Servings : Servings , 
    Ingredient :  Ingredient})

    
    return new Response(JSON.stringify({message : "Data Added Successfully"}) , {
      status : 201
    })

  }

  catch(error) {
    console.log("Error : " , error)
  }

}