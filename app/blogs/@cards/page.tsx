"use client"

import Image from "next/image"
import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import { useEffect, useState } from "react";
import no_img from "@/public/Images/no_img.jpg"


interface ing_det {
    Recipe_short_desc : string | null,
    Recipe_name : string | null,
    _id : string | null,
    Author_name : string | null,
    Cook_Time : number | null
}


const Cards = () => {

    const [recipeDetails , setRecipeDetails] = useState<ing_det[]>([])

    const handleAPI = async() => {

        const res = await fetch(`api/get_recipe` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log("Something Broke Up");
        }

        const data = await res.json()
        setRecipeDetails(data.det)
    
    }

    useEffect(() => {
        handleAPI()
    }, [])



    return (
        <div className="w-full flex justify-between items-center">
            
            {recipeDetails[0] ? (
            <div className="w-[55%] bg-white flex flex-col justify-center items-center rounded-2xl border-2 border-[#e5e0dc] pb-15 hover:cursor-pointer">
                <div className="w-full h-140 bg-[url(/Images/no_img.jpg)] bg-contain rounded-t-2xl" />
                
                <div className="w-full mt-8">
                    <p className="font-Poppins text-2xl pl-3">{recipeDetails[0].Recipe_name || `NA`}  </p>
                </div>

                <div className="w-full mt-5">
                    <p className="font-Poppins text-[#a2706a] pl-3">{recipeDetails[0].Recipe_short_desc}</p>
                </div>

                <div className="w-full mt-3">
                    <div className="w-[60%] flex">
                        <div className="w-[45%] flex ml-3">
                            <div className="w-[10%]">
                                <Image src={person} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[0].Author_name}</p>
                            </div>
                        </div>

                        <div className="w-[45%] flex items-center">
                            <div className="w-[8%]">
                                <Image src={clock} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[0].Cook_Time} min</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ) : (

                <div className="w-[40%] bg-white border-2 border-[#e5e0dc] rounded-2xl">

                    <Image src={no_img} alt="No Image Placeholder" className="rounded-t-2xl" />
                    
                    <div className="w-full flex justify-center">
                        <p className="font-Mogra p-4">No Data Available</p>
                    </div>

                </div>  
            )}


            <div className="w-[40%] flex flex-col justify-between">

                {recipeDetails[1] ? (
                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl pb-5 hover:cursor-pointer">
                    <div className="w-full flex h-50">
                        <div className="w-full h-full bg-cover bg-no-repeat rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-2xl">{recipeDetails[1].Recipe_name}</p> 
                    </div>

                    <div className="w-full px-2 py-1 mt-5">
                        <p className="font-Poppins text-[#a2706a]">{recipeDetails[1].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full mt-3">
                        <div className="w-[60%] flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[15%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[1].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[1].Cook_Time} min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                ) : (
                    <div className="w-full bg-white border-2 border-[#e5e0dc] rounded-2xl">

                        <Image src={no_img} alt="No Image Placeholder" className="rounded-t-2xl" />
                        
                        <div className="w-full flex justify-center">
                            <p className="font-Mogra p-4">No Data Available</p>
                        </div>

                    </div>
                )}


                {recipeDetails[2] ? (
                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl pb-5 hover:cursor-pointer">
                    <div className="w-full flex flex-col h-50">
                        <div className="w-full h-full bg-cover rounded-t-2xl" style={{backgroundImage : "url('/Images/recipe_bread.jpg')"}} />
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins text-2xl">{recipeDetails[2].Recipe_name}</p>
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins text-[#a2706a]">{recipeDetails[2].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full mt-3">
                        <div className="w-[60%] flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[15%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[2].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[2].Cook_Time}</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                ) : (
                    <div className="w-full bg-white border-2 border-[#e5e0dc] rounded-2xl mt-10">

                        <Image src={no_img} alt="No Image Placeholder" className="rounded-t-2xl" />
                        
                        <div className="w-full flex justify-center">
                            <p className="font-Mogra p-4">No Data Available</p>
                        </div>

                    </div>
                )}

            </div>

        </div>
    )
}



export default Cards