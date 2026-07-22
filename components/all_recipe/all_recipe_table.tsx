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
                <table className="border-gray-200 border-2 xl:w-[70%] mm:w-[90%] rounded-2xl flex flex-col border-collapse" bgcolor="#f2f1ff">

                    <thead>
                        <tr className="flex border-b-2 border-gray-200 justify-between items-center"> 
                            <th className="xl:w-[30%] mm:w-[40%] text-amber-700 p-2 xl:text-2xl mm:text-[18px]">Recipe name</th>

                            {/* <th className="p-2">Likes</th> */}

                            <th className="xl:w-[30%] mm:w-[40%] text-amber-700 p-2 xl:text-2xl mm:text-[18px]">Tag</th>

                            <th className="w-[30%] xl:flex mm:hidden text-amber-700 p-2 xl:text-2xl mm:text-[12px] flex justify-center">Submitted By</th>
                        </tr>
                    </thead>
        
                    {mealDet.map((md , index) => { 
                        return (
                            <tbody key={index}>
                                <tr key={md._id} className="flex nth-last-[]:border-b-0 justify-between items-center">
                                    <td className="xl:w-[30%] mm:w-[40%] font-Poppins p-4 hover:cursor-pointer text-center" onClick={ () => {renderRecipe(md.Recipe_name)} }>{md.Recipe_name || "NA"}</td>
                
                                    <td className="xl:w-[30%] mm:w-[40%] font-Poppins p-4 text-center">{md.Tags || "NA"}</td>
                
                                    <td className="w-[30%] font-Poppins p-4 xl:flex mm:hidden flex justify-center">{md.Author_name || "NA"}</td>
                                </tr>
                            </tbody>
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