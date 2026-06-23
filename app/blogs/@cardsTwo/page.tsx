"use client"

import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import Image from "next/image";
import { useEffect , useState } from "react";
import no_img from "@/public/Images/no_img.jpg"
import exp_recipe from "@/public/Images/explore_recipe.png"
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";


interface ing_det {
    Recipe_short_desc : string | null,
    Recipe_name : string | null,
    _id : string | null,
    Author_name : string | null,
    Cook_Time : number | null
}


const CardsTwo = () => {

    const route = useRouter()

    const [recipeDetails , setRecipeDetails] = useState<ing_det[]>([])
    const [showStats , setShowStats] = useState<boolean>(false);
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true);

    const handleAPI = async() => {

        const res = await fetch(`/api/get_recipe` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log("Something Broke Up");
            return;
        }

        setShowStats(true)
        setShowSkeleton(false)
        const data = await res.json()
        setRecipeDetails(data.det)
    
    }

    const handleClickToMoreRecipes = () => {
        route.push("/all_recipe")
    }

    useEffect(() => {
        handleAPI()
    }, [])


    return (
        <>

        {showSkeleton && (
        <div className="w-full flex justify-center items-center">
            <div className="w-[88%]">
                <Skeleton paragraph={{rows : 5}} active />
            </div>
        </div>
        )}

        {showStats && (
            <div className="w-full flex justify-evenly items-center">
                {recipeDetails[3] ? (
                <div className="w-[30%] flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                    <div className="w-full h-100 flex">
                        <div className="w-full h-full bg-center bg-cover rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                    </div>
                    
                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-2xl">{recipeDetails[3].Recipe_name}</p>
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-[#a2706a]">{recipeDetails[3].Recipe_short_desc}</p>
                    </div>

                    <div className="w-full mt-6 mb-4 flex">
                        <div className="w-[45%] flex ml-2">
                            <div className="w-[13%] flex items-center">
                                <Image src={person} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[3].Author_name}</p>
                            </div>
                        </div>

                        <div className="w-[45%] flex items-center ml-8">
                            <div className="w-[8%]">
                                <Image src={clock} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[3].Cook_Time} min</p>
                            </div>
                        </div>
                    </div>
                </div>

                ) : (

                    <div className="w-[30%] bg-white border-2 border-[#e5e0dc] rounded-2xl">

                        <Image src={no_img} alt="No Image Placeholder" className="rounded-t-2xl" />
                        
                        <div className="w-full flex justify-center">
                            <p className="font-Mogra p-4">No Data Available</p>
                        </div>

                    </div>   
                )}

                
                
                <div className="w-[30%]">
                    {recipeDetails[4] ? ( 
                    <div className="w-full flex flex-col border-2 border-[#e5e0dc] rounded-2xl">

                        <div className="w-full h-100 flex">
                            <div className="w-full h-full bg-cover bg-center rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                        </div>
                        
                        <div className="w-full pl-2  mt-5">
                            <p className="font-Poppins text-2xl">{recipeDetails[4].Recipe_name}</p>
                        </div>

                        <div className="w-full pl-2  mt-5">
                            <p className="font-Poppins text-[#a2706a]">{recipeDetails[4].Recipe_short_desc}</p>
                        </div>

                        <div className="w-full mt-6 mb-4 flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[13%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[4].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[4].Cook_Time} min</p>
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
                
                </div>
                



                <div className="w-[30%]">
                    {recipeDetails[5] ? ( 
                    <div className="w-full flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                        <div className="w-full h-100 flex">
                            <div className="w-full h-full bg-cover bg-center rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                        </div>
                        
                        <div className="w-full pl-2  mt-5">
                            <p className="font-Poppins text-2xl">{recipeDetails[5].Recipe_name}</p>
                        </div>

                        <div className="w-full pl-2  mt-5">
                            <p className="font-Poppins text-[#a2706a]">{recipeDetails[5].Recipe_short_desc}</p>
                        </div>

                        <div className="w-full mt-6 mb-4 flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[13%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[5].Author_name}</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[5].Cook_Time} min</p>
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

                </div>


            </div>

        )}


        <div className="w-full flex justify-center mt-30">

            <button className="w-[15%] bg-[#ca6441] rounded-2xl flex" onClick={handleClickToMoreRecipes}>
                <div className="w-[10%] ml-2 flex justify-center items-center">
                    <Image src={exp_recipe} alt="Explore Recipe" width={100} height={100} />
                </div>

                <div className="w-[88%] ml-2 p-3">
                    <button type="button" className="text-[16px] font-Poppins text-white">Explore More Recipes</button>
                </div>
            </button>

        </div>
            
        </>
    )
} 


export default CardsTwo;