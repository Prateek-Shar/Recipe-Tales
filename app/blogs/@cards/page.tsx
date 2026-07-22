"use client"

import Image from "next/image"
import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import { SetStateAction, useEffect, useState } from "react";
import no_img from "@/public/Images/no_img.jpg"
import next from "@/public/Images/next.png";
import front from "@/public/Images/front.png";
import { Skeleton } from "antd";


interface ing_det {
    Recipe_short_desc : string | null,
    Recipe_name : string | null,
    _id : string | null,
    Author_name : string | null,
    Cook_Time : number | null
}

interface step {
    stepCount : number | null
    setStepCount : React.Dispatch<React.SetStateAction<number>>
}


const Cards = ({stepCount , setStepCount} : step) => {

    const [recipeDetails , setRecipeDetails] = useState<ing_det[]>([])

    const handleAPI = async() => {

        const res = await fetch(`/api/get_recipe` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log("Something Broke Up");
        }

        setShowSkeleton(false)
        setShowStats(true)
        setShowStats2(true) 
        const data = await res.json()
        setRecipeDetails(data.det)
    
    }

    useEffect(() => {
        handleAPI()
    }, [stepCount])

    const [showStats , setShowStats] = useState<boolean>(false)
    const [showStats2 , setShowStats2] = useState<boolean>(false);
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true);




    return (

        <div className="w-full flex xl:flex-row mm:flex-col justify-between items-center">
            
            {showSkeleton && (
                <div className="w-[90%]">
                    <Skeleton paragraph={{rows : 5  }} active />
                </div>
            )}

            {showStats && (
                recipeDetails[0] ? (
                <div className="xl:w-[55%] mm:w-full bg-white flex flex-col justify-center items-center rounded-2xl border-2 border-[#e5e0dc] xl:pb-15 mm:pb-0 hover:cursor-pointer">
                    <div className="w-full xl:h-140 mm:h-100 bg-[url(/Images/no_img.jpg)] bg-cover bg-center rounded-t-2xl" />
                    
                    <div className="w-full mt-8">
                        <p className="font-Poppins xl:text-2xl mm:text-[17px] pl-3">{recipeDetails[0].Recipe_name || `NA`}  </p>
                    </div>

                    <div className="w-full mt-5">
                        <p className="font-Poppins text-[#a2706a] xl:text-[16px] mm:text-[14px] pl-3">{recipeDetails[0].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full xl:mt-3 mm:my-5">
                        <div className="xl:w-[60%] mm:w-full flex">
                            <div className="w-[45%] flex ml-3">
                                <div className="xl:w-[10%] mm:w-[18%] flex items-center justify-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[0].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex justify-center items-center">
                                <div className="xl:w-[8%] mm:w-[10%]">
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
                )
            )}

            {showSkeleton && (
                <div className="w-full ml-10">
                    <Skeleton paragraph={{rows : 5}} active />
                </div>
            )}

            {showStats2 && (
            <div className="xl:w-[40%] mm:w-full flex flex-col justify-between xl:mt-0 mm:mt-5">

                {recipeDetails[1] ? (
                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl xl:pb-5 mm:pb-0 hover:cursor-pointer">
                    <div className="w-full flex h-50">
                        <div className="w-full h-full bg-cover bg-center bg-no-repeat rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins xl:text-2xl mm:text-[17px]">{recipeDetails[1].Recipe_name}</p> 
                    </div>

                    <div className="w-full px-2 py-1 mt-5">
                        <p className="font-Poppins xl:text-[16px] mm:text-[14px] text-[#a2706a]">{recipeDetails[1].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full xl:mt-3 mm:my-5">
                        <div className="xl:w-[60%] mm:w-full flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="xl:w-[15%] mm:w-[18%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[1].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="xl:w-[8%] mm:w-[10%]">
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
                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl xl:pb-5 mm:pb-0 hover:cursor-pointer mt-5">
                    <div className="w-full flex flex-col h-50">
                        <div className="w-full h-full bg-cover bg-center rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins xl:text-2xl mm:text-[17px]">{recipeDetails[2].Recipe_name}</p>
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins text-[#a2706a] xl:text-[16px] mm:text-[14px]">{recipeDetails[2].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full xl:mt-3 mm:my-5">
                        <div className="xl:w-[60%] mm:w-full flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="xl:w-[15%] mm:w-[18%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[2].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="xl:w-[8%] mm:w-[10%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[2].Cook_Time} min</p>
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
            )}

            <div className="xl:hidden mm:flex justify-end items-center w-full mt-6">
                <div className="w-[28%] flex p-2" onClick={ () => setStepCount(prev => prev + 1)}>
                    <p className="text-[16px] font-Poppins">Next</p>
                    <Image src={front} className="object-contain w-[40%] ml-1 p-1" alt="Next Bt" />
                </div>
            </div>
            
        </div>
    )
}



export default Cards