"use client"

import { useEffect, useState } from "react";
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";
import { Pagination } from "antd"

interface MealDet {
    Recipe_name : string,
    Tags : string[],
    Author_name : string,
    _id : string
}

const all_recipe_table = () => {

    const [mealDet , setMealDet] = useState<MealDet[]>([])
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true)
    const [showStats , setShowStats] = useState<boolean>(false);

    const [currentPage , setCurrentPage] = useState<number>(1)
    const [totalRecipes , setTotalRecipes] = useState<number>(0)

    const pageSize = 5;

    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalRecipes);

    const route = useRouter()

    const recipe_Det = async(value : number) => {

        const res = await fetch(`/api/get_all_recipe?page=${value}` , {
            method : "get"
        })

        if(!res.ok) {
            console.log("Something Broke")
        }

        const data = await res.json()
        setMealDet(data.det)
        setTotalRecipes(data.count)
        setShowSkeleton(false)
        setShowStats(true);
    }

    const renderRecipe = (value : string) => {
        route.push(`/blog_recipe/blog_recipes?Meal_name=${value}`)
    }   

    const get_recipe_acc_page = async(value : number) => {
        const res = await fetch(`/api/get_all_recipe?page=${value}` , {
            method : "get"
        })

        if(!res.ok) {
            console.log("Something Broke")
        }

        const data = await res.json()
        setMealDet(data.det)
        setCurrentPage(value)
    }

    useEffect(() => {
        recipe_Det(currentPage)
    } , [currentPage])

    return (
        <>

        {showSkeleton && (
            <div className="w-[75%]">
                <Skeleton paragraph={{rows : 10}} active/>
            </div>
        )} 

        {showStats && (
            mealDet.length > 0 ? (
                <div className="w-full flex flex-col justify-center items-center">
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

                                    <td className=" xl:w-[30%] mm:w-[40%] font-Poppins p-4 text-center"> {md.Tags.join(" , ")} </td>
                                    
                                    <td className="w-[30%] font-Poppins p-4 xl:flex mm:hidden flex justify-center">{md.Author_name || "NA"}</td>
                                </tr>
                            </tbody>
                        );
                    })}
    
                </table>
                
                <div className="xl:w-[70%] mm:w-full flex xl:flex-row mm:flex-col justify-between items-center py-1 my-10">
                    <div className="flex">
                        <p className="font-Poppins text-gray-500 xl:text-[16px] mm:text-[15px]">Showing {start} - {end} out of {totalRecipes} results</p>
                    </div>

                    <div className="flex justify-center items-center xl:mt-0 mm:mt-10">
                        <Pagination current={currentPage} total={totalRecipes} onChange={(page) => {setCurrentPage(page); get_recipe_acc_page(page); }} pageSize={5} />    
                    </div>
                </div>
                
                </div>
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