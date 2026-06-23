"use client"

import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";

interface MealDet {
    Recipe_name : string,
    Tags : string,
    Author_name : string,
    _id : string
    // Likes : Number
}

const all_recipe_table = () => {

    const [mealDet , setMealDet] = useState<MealDet[]>([])
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true)
    const [showStats , setShowStats] = useState<boolean>(false);

    const route = useRouter()

    const recipe_Det = async() => {

        const res = await fetch("/api/get_all_recipe" , {
            method : "get"
        })

        if(!res.ok) {
            console.log("Something Broke")
        }

        const data = await res.json()
        setMealDet(data.det)
        setShowSkeleton(false)
        setShowStats(true);
    }

    useEffect(() => {
        recipe_Det()
    } , [])

    const renderRecipe = (value : string) => {
        route.push(`/blog_recipe/blog_recipes?Meal_name=${value}`)
    }   



    return (
        <>

        {showSkeleton && (
            <div className="w-[75%]">
                <Skeleton paragraph={{rows : 10}} active/>
            </div>
        )} 

        {showStats && (
            mealDet.length > 0 ? (
                <table className="border-gray-200 border-2 w-[75%] rounded-2xl flex flex-col border-collapse" bgcolor="#f2f1ff">

                <tr className="flex border-b-2 border-gray-200">
                    <div className="w-[30%] flex justify-center">
                        <th className="p-2 text-2xl text-amber-700">Recipe name</th>
                    </div>
                    {/* <th className="p-2">Likes</th> */}
    
                    <div className="w-[30%] flex justify-center">
                        <th className="p-2 text-2xl text-amber-700">Tag</th>
                    </div>
    
                    <div className="w-[30%] flex justify-center">
                        <th className="p-2 text-2xl text-amber-700">Submitted By</th>
                    </div>
                </tr>
    
                {mealDet.map((md) => { 
                    return (
                    <tr key={md._id} className="flex nth-last-[]:border-b-0">
                        <div className="w-[30%] flex justify-center">
                            <td className="font-Poppins p-4 text-stone-700 hover:cursor-pointer" onClick={ () => {renderRecipe(md.Recipe_name)} }>{md.Recipe_name || "NA"}</td>
                        </div>
    
                        <div className="w-[30%] flex justify-center border-white">
                            <td className="font-Poppins p-4 text-stone-700">{md.Tags || "NA"}</td>
                        </div>
    
                        <div className="w-[30%] flex justify-center border-white">
                            <td className="font-Poppins p-4 text-stone-700">{md.Author_name || "NA"}</td>
                        </div>
                    </tr>
                    );
                })}
    
            </table>
            ) : (
                <div className="w-[80%]">
                    <p className="text-5xl">No Results Found</p>
                </div>
            )
            
        )}


        </>

    )
}


export default all_recipe_table;