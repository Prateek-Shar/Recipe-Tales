"use client"

import { useSearchParams , useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "antd";

interface data {
    Tags : string,
    Recipe_name : string,
    Author_name : string,
    _id : string
}

const Category_recipe = () => {

    const route = useRouter()

    const [recipeData , setRecipeData] = useState<data[]>([])
    const [count , setCount] = useState<number>(0)

    const [showStats , setShowStats] = useState<boolean>(false)
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true) 
 
    const search_params = useSearchParams()
    const category = search_params.get("Category")

    const handleData = async() => {
        const res = await axios.get(`/api/get_category_recipe?category=${category}`)

        if (!res) {
            console.log("Api hit un-expectedly")
            return;
        }

        setShowSkeleton(false)
        setShowStats(true)
        setRecipeData(res.data.recipe_data)
        setCount(res.data.cou);
        // console.log("Api ran")
        // console.log(typeof recipeData)
    }

    const renderRecipe = (value : string) => {
        route.push(`/blog_recipe/blog_recipes?Meal_name=${value}`)
    }   

    useEffect(() => {
        handleData()
    } ,[])

    useEffect(() => {
        console.log("Data : " , recipeData.length)
    } , [])

    return (
        <>

        {showStats && (
            <div className="flex p-2 my-5">
                <p className="font-Capra text-2xl">Showing {count} result for Category {category}</p>
            </div>
        )}

        {showSkeleton && (
            <div className="w-[80%] my-10">
                <Skeleton paragraph={{rows : 10}} active />
            </div>
        )}

        {showStats && (
            recipeData.length > 0 ? (
                <div className="w-full flex justify-center items-center my-10">
                    <table className="border-gray-200 border-2 xl:w-[70%] mm:w-[90%] rounded-2xl flex flex-col border-collapse" bgcolor="#f2f1ff">

                        <thead>
                            <tr className="flex border-b-2 border-gray-200 justify-between items-center"> 
                                <th className="xl:w-[30%] mm:w-[40%] text-amber-700 p-2 xl:text-2xl mm:text-[18px]">Recipe name</th>
            
                                {/* <th className="p-2">Likes</th> */}
            
                                <th className="xl:w-[30%] mm:w-[40%] text-amber-700 p-2 xl:text-2xl mm:text-[18px]">Tag</th>
            
                                <th className="w-[30%] xl:flex mm:hidden text-amber-700 p-2 xl:text-2xl mm:text-[12px] flex justify-center">Author</th>
                            </tr>
                        </thead>
            
                        {recipeData.map((rd , index) => { 
                            return (
                                <tbody key={index}>
                                    <tr key={rd._id} className="flex nth-last-[]:border-b-0 justify-between items-center">
                                        <td className="xl:w-[30%] mm:w-[40%] font-Poppins p-4 hover:cursor-pointer text-center" onClick={ ()=>{renderRecipe(rd.Recipe_name)} }>{rd.Recipe_name || "NA"}</td>
                                        
                                        <td className="xl:w-[30%] mm:w-[40%] font-Poppins p-4 text-center">{rd.Tags || "NA"}</td>
                    
                                        <td className="w-[30%] font-Poppins p-4 xl:flex mm:hidden flex justify-center">{rd.Author_name || "NA"}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
            
                    </table>
                </div>
            ) : (

            <p>No Results Found</p>
            
            )
        
        )}
        </>
    )  
}


export default Category_recipe;