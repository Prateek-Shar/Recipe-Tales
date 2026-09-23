"use client"

import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import Image from "next/image";
import { useEffect , useState } from "react";
import no_img from "@/public/Images/no_img.jpg"
import exp_recipe from "@/public/Images/explore_recipe.png"
import back from "@/public/Images/back.png"
import { Skeleton } from "antd";
import { useRouter } from "next/navigation";


interface ing_det {
    Recipe_short_desc : string | null,
    Recipe_name : string | null,
    _id : string | null,
    Author_name : string | null,
    Cook_Time : number | null
}

interface route {
    OnBack? : () => void
}

const CardsTwo = ({OnBack} : route) => {

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

    // const handleClickToBack = () => {
    //     route.push("/blogs")
    // }

    useEffect(() => {
        handleAPI()
    }, [])


    return (
        <div className="flex flex-col">

            {showSkeleton && (
                <div className="w-full flex justify-center items-center">
                    <div className="w-[88%]">
                        <Skeleton paragraph={{rows : 5}} active />
                    </div>
                </div>
            )}

            {showStats && (
                <div className="w-full flex flex-col justify-evenly items-center">
                    <div className="w-full flex xl:flex-row mm:flex-col justify-evenly items-center">
                        {recipeDetails[3] ? (
                        <div className="xl:w-[30%] mm:w-[90%] flex flex-col rounded-2xl border-2 border-[#e5e0dc] xl:my-0 mm:my-5">
                            <div className="w-full xl:h-100 mm:h-70 flex">
                                <div className="w-full h-full bg-center bg-cover rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                            </div>
                            
                            <div className="w-full pl-2 mt-5">
                                <p className="font-Poppins xl:text-2xl mm:text-[17px]">{recipeDetails[3].Recipe_name}</p>
                            </div>

                            <div className="w-full pl-2  mt-5">
                                <p className="font-Poppins text-[#a2706a] xl:text-[16px] mm:text-[14px]">{recipeDetails[3].Recipe_short_desc}</p>
                            </div>

                            <div className="w-full xl:mt-6 xl:mb-4 mm:my-5 flex">
                                <div className="w-[45%] flex ml-2">
                                    <div className="xl:w-[13%] mm:w-[18%] flex items-center">
                                        <Image src={person} alt="person" />
                                    </div>

                                    <div className="w-full">
                                        <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[3].Author_name}</p>
                                    </div>
                                </div>

                                <div className="w-[45%] flex items-center ml-8">
                                    <div className="xl:w-[8%] mm:w-[10%]">
                                        <Image src={clock} alt="person" />
                                    </div>

                                    <div className="w-full">
                                        <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[3].Cook_Time} min</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        ) : (

                            <div className="xl:w-[30%] mm:w-[90%] mm:mb-5 xl:mb-0 bg-white border-2 border-[#e5e0dc] rounded-2xl">

                                <Image src={no_img} alt="No Image Placeholder" className="rounded-t-2xl" />
                                
                                <div className="w-full flex justify-center">
                                    <p className="font-Mogra p-4">No Data Available</p>
                                </div>

                            </div>   
                        )}

                        
                        
                        <div className="xl:w-[30%] mm:w-[90%]">
                            {recipeDetails[4] ? ( 
                            <div className="w-full flex flex-col border-2 border-[#e5e0dc] rounded-2xl">

                                <div className="w-full xl:h-100 mm:h-70 flex">
                                    <div className="w-full h-full bg-cover bg-center rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                                </div>
                                
                                <div className="w-full pl-2 mt-5">
                                    <p className="font-Poppins xl:text-2xl mm:text-[17px]">{recipeDetails[4].Recipe_name}</p>
                                </div>

                                <div className="w-full pl-2  mt-5">
                                    <p className="font-Poppins text-[#a2706a] xl:text-[16px] mm:text-[14px]">{recipeDetails[4].Recipe_short_desc}</p>
                                </div>

                                <div className="w-full xl:my-4 mm:my-5 flex">
                                    <div className="w-[45%] flex ml-2">
                                        <div className="xl:w-[13%] mm:w-[18%] flex items-center">
                                            <Image src={person} alt="person" />
                                        </div>

                                        <div className="w-full">
                                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[4].Author_name}</p>
                                        </div>
                                    </div>

                                    <div className="w-[45%] flex items-center ml-8">
                                        <div className="xl:w-[8%] mm:w-[10%]">
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
                        

                        <div className="xl:w-[30%] mm:w-[90%] xl:my-0 mm:my-5">
                            {recipeDetails[5] ? ( 
                            <div className="w-full flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                                <div className="w-full xl:h-100 mm:h-70 flex">
                                    <div className="w-full h-full bg-cover bg-center rounded-t-2xl" style={{backgroundImage : "url('/Images/no_img.jpg')"}} />
                                </div>
                                
                                <div className="w-full pl-2  mt-5">
                                    <p className="font-Poppins xl:text-2xl mm:text-[17px]">{recipeDetails[5].Recipe_name}</p>
                                </div>

                                <div className="w-full pl-2  mt-5">
                                    <p className="font-Poppins text-[#a2706a] xl:text-[16px] mm:text-[14px]">{recipeDetails[5].Recipe_short_desc}</p>
                                </div>

                                <div className="w-full xl:my-4 mm:my-5 flex">
                                    <div className="w-[45%] flex ml-2">
                                        <div className="xl:w-[13%] mm:w-[18%] flex items-center">
                                            <Image src={person} alt="person" />
                                        </div>

                                        <div className="w-full">
                                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">{recipeDetails[5].Author_name}</p>
                                        </div>
                                    </div>

                                    <div className="w-[45%] flex items-center ml-8">
                                        <div className="xl:w-[8%] mm:w-[10%]">
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

                    <div className="w-full xl:flex">
                        <div className="w-full xl:hidden mm:flex items-center" onClick={OnBack}>
                            <Image src={back} alt="Go Back" className="object-contain w-[6%]" />
                            <p className="font-Poppins ml-2 text-[14px]">Go Back</p>
                        </div>

                        <div className="w-full flex justify-center xl:mt-30 mm:mt-10">

                            <button className="xl:w-[15%] mm:w-[80%] bg-[#ca6441] rounded-2xl flex" onClick={handleClickToMoreRecipes}>
                                <div className="w-[10%] ml-2 flex justify-center items-center">
                                    <Image src={exp_recipe} alt="Explore Recipe" width={100} height={100} />
                                </div>

                                <div className="w-[88%] ml-2 p-3">
                                    <div className="text-[16px] font-Poppins text-white">Explore More Recipes</div>
                                </div>  
                            </button>

                        </div>
                    </div>

                </div>

            )}



        </div>
    )
} 


export default CardsTwo;