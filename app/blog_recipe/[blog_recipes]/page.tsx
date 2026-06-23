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
        console.log("Data Fetched Successfully")
    }

    console.log(mealDet)

    useEffect(() => {
        get_recipe_det()
    } , [])


    return (

        <>
            <div className="w-full flex flex-col justify-center items-center">
               <p className="font-Capra text-4xl mt-15">{Meal_name}</p>

                <div className="w-full flex justify-evenly items-start mt-20">
                    <div className="w-[40%]">

                    <div className="w-full flex">
                        <Image src={ing} alt="ing" height={20} width={40} className="ml-2" />    
                        <p className="font-Mogra text-3xl ml-5">Ingredients</p>
                    </div>

                    {mealDet.map((md, index) => (
                        <div key={index}>
                            {md.Ingredient.map((ingredient, idx) => (
                                <div className="flex mt-5 nth-last-[1]:mb-5">
                                <Image src={ut} alt="Ing Icon" height={20} width={50} className="p-3"/>
                                <p key={idx} className="font-Poppins p-2 text-[20px] bg-[#fffbeb] w-[90%] rounded-2xl">{ingredient}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                    </div>  

                    <div className="w-[40%]">

                    <div className="w-full flex">
                        <Image src={guide} alt="ing" height={20} width={40} className="ml-2" />    
                        <p className="font-Mogra text-3xl ml-5">Instructions</p>
                    </div>

                    {mealDet.map((md, index) => (
                        <div key={index}>
                            {md.Instructions.map((ins, idx) => (
                                <div className="flex mt-5 nth-last-[1]:mb-5 items-center">
                                <Image src={steps} alt="Ing Icon" height={20} width={50} className="p-3"/>
                                <p key={idx} className="font-Poppins p-2 text-[20px] bg-[#fffbeb] w-[90%] rounded-2xl">{ins}</p>
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
                        <p key={index} className="font-Poppins text-2xl p-2 mt-5">{md.Blog}</p>
                    ))}
                </div>

                <div className="w-[85%] bg-white my-20 rounded-2xl">
                    <div className="flex items-center mt-3">
                        <Image src={info} alt="Other details" height={25} width={40} className="p-2" />
                        <p className="font-Mogra text-3xl pt-2">Other Details</p>
                    </div>

                    <div className="flex mt-8">
                        <div className="w-[20%] flex p-2">
                            <p className="font-Poppins text-[20px] text-stone-800">Prep Time : </p>
                            {mealDet.map((md , idx) => (
                                <p className="font-Capra text-2xl pl-2"> {md.Prep_Time} mins</p>
                            ))}
                        </div>

                        <div className="w-[20%] flex p-2">
                            <p className="font-Poppins text-[20px] text-stone-800">Cook Time - </p>
                            {mealDet.map((md , idx) => (
                                <p className="font-Capra text-2xl pl-2">{md.Cook_Time} mins</p>
                            ))}
                        </div>

                        <div className="w-[20%] flex p-2">
                            <p className="font-Poppins text-[20px] text-stone-800">Servings - </p>
                            {mealDet.map((md , idx) => (
                                <p className="font-Capra text-2xl pl-2">{md.Servings}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[20%] flex p-2">
                            <p className="font-Poppins text-[20px] text-stone-800">Tags - </p>
                            {mealDet.map((md , idx) => (
                                <p className="font-Capra text-2xl pl-2">{md.Tags}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex">
                        <div className="w-[20%] flex p-2">
                            <p className="font-Poppins text-[20px] text-stone-800">Recipe Of - </p>
                            {mealDet.map((md , idx) => (
                                <p className="font-Capra text-2xl pl-2">{md.Author_name}</p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
           

        </>
    )
}


export default blog_recipes;