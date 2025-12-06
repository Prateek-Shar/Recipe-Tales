"use client"

import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import Image from "next/image";
import { useEffect , useState } from "react";
import no_img from "@/public/Images/no_img.jpg"
import exp_recipe from "@/public/Images/explore_recipe.png"


interface ing_det {
    Recipe_short_desc : string | null,
    Recipe_name : string | null,
    _id : string | null,
    Author_name : string | null,
    Cook_Time : number | null
}


const CardsTwo = () => {

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
        <>
        <div className="w-full flex justify-evenly items-center">
            {recipeDetails[3] ? (
            <div className="w-[25%] flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                <div className="w-full h-100 flex">
                    <div className="w-full h-full bg-[url(/Images/recipe_desert.jpg)] bg-cover rounded-t-2xl" />
                </div>
                
                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-2xl">Decadent Chocolate Tart with Fresh Berries</p>
                </div>

                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-[#a2706a]">Indulge in this elegant chocolate tart with a buttery crust and rich ganache filling, topped with fresh seasonal berries.</p>
                </div>

                <div className="w-full mt-6 mb-4 flex">
                    <div className="w-[45%] flex ml-2">
                        <div className="w-[13%] flex items-center">
                            <Image src={person} alt="person" />
                        </div>

                        <div className="w-full">
                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                        </div>
                    </div>

                    <div className="w-[45%] flex items-center ml-8">
                        <div className="w-[8%]">
                            <Image src={clock} alt="person" />
                        </div>

                        <div className="w-full">
                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">12 min read</p>
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
                        <div className="w-full h-full bg-[url(/Images/recipe_salad.jpg)] bg-cover rounded-t-2xl" />
                    </div>
                    
                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-2xl">Mediterranean Summer Salad</p>
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-[#a2706a]">A refreshing combination of crisp greens, juicy tomatoes, cucumber, and creamy feta cheese with a zesty lemon.</p>
                    </div>

                    <div className="w-full mt-6 mb-4 flex">
                        <div className="w-[45%] flex ml-2">
                            <div className="w-[13%] flex items-center">
                                <Image src={person} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                            </div>
                        </div>

                        <div className="w-[45%] flex items-center ml-8">
                            <div className="w-[8%]">
                                <Image src={clock} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">5 min read</p>
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
                        <div className="w-full h-full bg-[url(/Images/recipe_soup.jpg)] bg-cover rounded-t-2xl" />
                    </div>
                    
                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-2xl">Cozy Autumn Vegetable Soup</p>
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-[#a2706a]">Warm up with this hearty vegetable soup packed with seasonal produce and aromatic herbs. Perfect for chilly.</p>
                    </div>

                    <div className="w-full mt-6 mb-4 flex">
                        <div className="w-[45%] flex ml-2">
                            <div className="w-[13%] flex items-center">
                                <Image src={person} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                            </div>
                        </div>

                        <div className="w-[45%] flex items-center ml-8">
                            <div className="w-[8%]">
                                <Image src={clock} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">20 min read</p>
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


        <div className="w-full flex justify-center mt-30">

            <div className="w-[15%] bg-[#ca6441] rounded-2xl flex">
                <div className="w-[10%] ml-2 flex justify-center items-center">
                    <Image src={exp_recipe} alt="Explore Recipe" width={100} height={100} />
                </div>

                <div className="w-[88%] ml-2 p-3">
                    <button type="button" className="text-[16px] font-Poppins text-white">Explore More Recipes</button>
                </div>
            </div>

        </div>
            
        </>
    )
} 


export default CardsTwo;