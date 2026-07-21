"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import ut from "@/public/Images/utensils.png"
import ing from "@/public/Images/ingredients.png"
import steps from "@/public/Images/steps.png";
import guide from "@/public/Images/guide.png"
import blog from "@/public/Images/blog.png"
import info from "@/public/Images/info.png"
import { Skeleton } from "antd";

interface Meal_det {
    Author_name : string,
    Tags : string,
    Blog : string,
    Prep_Time : string,
    Cook_Time : string,
    Servings : string,
    Instructions : string[],
    Ingredient : string[]
}

const blog_recipes = () => {

    const [showSkeleton , setShowSkeleton] = useState<boolean>(true)
    const [showStats , setShowStats] = useState<boolean>(false)

    const [mealDet , setMealDet] = useState<Meal_det[]>([])
    const search_para = useSearchParams()

    const Meal_name = search_para.get("Meal_name")

    const get_recipe_det = async() => {

        const res = await fetch(`/api/get_user_recipe?recipe_name=${Meal_name}` , {
            method : "get",
        })

        if(!res.ok) {
            console.log("Something Broke")
            return; 
        }

        const data = await res.json()
        setMealDet(data.det)
        setShowSkeleton(false)
        setShowStats(true)
    }


    useEffect(() => {
        get_recipe_det()
    } , [])


    return (

        <>
            <div className="w-full flex flex-col justify-center items-center">
               <p className="font-Capra xl:text-4xl mm:text-2xl mt-15">{Meal_name}</p>
                
                {showSkeleton && (
                    <div className="w-[80%] my-10">
                        <Skeleton paragraph={{rows : 10}} active />
                    </div>
                )}

                {showStats && (
                    <>
                    <div className="w-full flex xl:flex-row mm:flex-col xl:justify-evenly mm:items-center xl:items-start mt-20">
                        <div className="xl:w-[40%] mm:w-[90%] flex flex-col justify-center">
                            <div className="xl:w-full flex xl:ml-0 mm:ml-1 items-center mm:mb-3 xl:mb-0">
                                <Image src={ing} alt="ing" className="mm:h-10 mm:w-12 xl:w-12 xl:h-12" />    
                                <p className="font-Mogra text-3xl xl:ml-5 mm:ml-3">Ingredients</p>
                            </div>

                            {mealDet.map((md, index) => (
                                <div key={index} className="xl:mt-5 mm:mt-2">
                                    {md.Ingredient.map((ingredient, idx) => (
                                        <div className="w-full flex nth-last-[1]:mb-5 xl:mt-4 mm:mt-3">
                                            <Image src={ut} alt="Ing Icon" className="xl:p-1 mm:p-2 mm:h-10 mm:w-9 xl:h-9 xl:w-10"/>
                                            <p key={idx} className="font-Poppins p-2 xl:ml-3 mm:ml-0 xl:text-[20px] mm:text-[16px] bg-[#fffbeb] w-[90%] rounded-2xl">{ingredient}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>  

                        <div className="xl:w-[40%] mm:w-[90%] xl:mt-0 mm:mt-20">

                            <div className="w-full flex xl:ml-0 mm:ml-2 items-center mm:mb-10 xl:mb-0">
                                <Image src={guide} alt="ing" className="mm:h-8 mm:w-8 xl:w-12 xl:h-12" />    
                                <p className="font-Mogra text-3xl xl:ml-5 mm:ml-3">Instructions</p>
                            </div>

                            {mealDet.map((md, index) => (
                                <div key={index}>
                                    {md.Instructions.map((ins, idx) => (
                                        <div className="flex xl:mt-5 mm:mt-2 nth-last-[1]:mb-5 items-center">
                                        <Image src={steps} alt="Ing Icon" height={20} width={50} className="p-3"/>
                                        <p key={idx} className="font-Poppins p-2 xl:text-[20px] mm:text-[16px] bg-[#fffbeb] w-[90%] rounded-2xl">{ins}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>  
                    </div>
                

                    <div className="w-[85%] mt-20 bg-white rounded-2xl">
                        <div className="flex items-center p-2">
                            <Image src={blog} alt="blog" height={15} width={40} className="p-1" />
                            <p className="text-3xl font-Mogra ml-2">Blogs</p>
                        </div>

                        {mealDet.map((md, index) => (
                            <p key={index} className="font-Poppins xl:text-2xl mm:text-[16px] p-2 mt-5">{md.Blog}</p>
                        ))}
                    </div>
                </>
                )}

                {showSkeleton && (
                    <div className="w-[80%] my-10">
                        <Skeleton paragraph={{rows : 8}} active />
                    </div>
                )}


                {showStats && (
                    <div className="w-[85%] bg-white my-20 rounded-2xl">
                        <div className="flex items-center mt-3">
                            <Image src={info} alt="Other details" height={25} width={40} className="p-2" />
                            <p className="font-Mogra text-3xl pt-2">Other Details</p>
                        </div>

                        <div className="flex xl:flex-row mm:flex-col mt-8">
                            <div className="xl:w-[20%] mm:w-[90%] flex p-2">
                                <p className="font-Poppins xl:text-[20px] mm:text-[16px] text-stone-800">Prep Time : </p>
                                {mealDet.map((md , idx) => (
                                    <p className="font-Capra xl:text-2xl mm:text-[18px] pl-2"> {md.Prep_Time} mins</p>
                                ))}
                            </div>

                            <div className="xl:w-[20%] mm:w-[90%] flex p-2">
                                <p className="font-Poppins xl:text-[20px] mm:text-[16px] text-stone-800">Cook Time - </p>
                                {mealDet.map((md , idx) => (
                                    <p className="font-Capra xl:text-2xl mm:text-[18px] pl-2">{md.Cook_Time} mins</p>
                                ))}
                            </div>

                            <div className="xl:w-[20%] mm:w-[90%] flex p-2">
                                <p className="font-Poppins  xl:text-[20px] mm:text-[16px] text-stone-800">Servings - </p>
                                {mealDet.map((md , idx) => (
                                    <p className="font-Capra xl:text-2xl mm:text-[18px] pl-2">{md.Servings}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex">
                            <div className="xl:w-[20%] mm:w-[90%] flex p-2">
                                <p className="font-Poppins xl:text-[20px] mm:text-[16px] text-stone-800">Tags - </p>
                                {mealDet.map((md , idx) => (
                                    <p className="font-Capra xl:text-2xl mm:text-[18px] pl-2">{md.Tags}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex">
                            <div className="xl:w-[20%] mm:w-[90%] flex p-2">
                                <p className="font-Poppins xl:text-[20px] mm:text-[16px] text-stone-800">Recipe Of - </p>
                                {mealDet.map((md , idx) => (
                                    <p className="font-Capra xl:text-2xl mm:text-[18px] pl-2">{md.Author_name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
           </div>

        </>
    )
}


export default blog_recipes;