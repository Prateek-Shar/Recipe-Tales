"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import clock from "@/public/Images/clock.png"
import cut from "@/public/Images/cutlery.png"
import rating from "@/public/Images/star.png"
import next from "@/public/Images/next.png";
import share from "@/public/Images/share.png";
import { useState , useEffect } from "react";
import { Skeleton } from "antd"


interface MealInfo {
    [key: string]: any;
    idMeal : string;
    strMeal : string
}

interface info {
    setMsgDiv : () => void
}



const RecipeCards:React.FC<info> = ({setMsgDiv}) => {

    const router = useRouter()

    const Random_meal = process.env.NEXT_PUBLIC_RANDOM_MEAL_API

    const [randomMeal , setRandomMeal] = useState<MealInfo[]>([])
    const [randomMealTwo , setRandomMealTwo] = useState<MealInfo[]>([])
    const [randomMealThree , setRandomMealThree] = useState<MealInfo[]>([])


    const [recipeOne , setRecipeOne] = useState(false)
    const [skeletonOne , setSkeletonOne] = useState(true)

    const handleAPI = async() => {

        const res = await fetch(`${Random_meal}` , {
        method : "GET"
        })

        if(!res.ok) {
        console.log("Api response failed")
        }
    
        const data = await res.json()
        setRandomMeal(data.meals)

        


        const response2 = await fetch(`${Random_meal}` , {
        method : "GET"
        })

        if(!response2.ok) {
        console.log("Api response failed")
        }
    
        const data2 = await response2.json()
        setRandomMealTwo(data2.meals)

        


        const response3 = await fetch(`${Random_meal}` , {
        method : "GET"
        })

        if(!res.ok) {
        console.log("Api response failed")
        }
    
        const data3 = await response3.json()
        setRandomMealThree(data3.meals)

    }


    useEffect(() => {
        handleAPI()
    } , [])    


    setTimeout(() => {
        setRecipeOne(true)
        setSkeletonOne(false)
    } , 3000)


    const handleToRecipe = (Meal_name : string , id : string) => {
        router.push(`/recipe/recipeName?Meal_name=${Meal_name}&id=${id}`)
    }


    const handleCopy = (Meal_name : string) => {
        const req_url = `https://recipe-tales.vercel.app/recipe/recipeName?Meal_name=${Meal_name}`
        navigator.clipboard.writeText(req_url)
    }   


    return (
        <>

            {/* Recipe 1 */}
            <div className="w-[25%] bg-white shadow-2xl flex flex-col rounded-3xl border-2 border-[#eeeeee]">

                {skeletonOne && (
                    <div className="w-full p-10">
                        <Skeleton active />
                    </div>
                )}

                {recipeOne && (
                <>
                {randomMeal.map((rm) => (
                <div className="w-full flex flex-col" key={rm.idMeal} >
                    <div className="w-full bg-[#e4e9ec] flex justify-center rounded-tl-[22px] rounded-tr-[22px] border-0 border-b-2 border-[#eeeeee]">
                        <Image src={rm.strMealThumb} alt="paav bhaaji image" width={300} height={300} />
                    </div>

                    <div className="w-full mt-4 ml-1.5">
                        <p className="font-Mogra text-[24px]">{rm.strMeal}</p>
                    </div>

                    {/* <div className="w-full flex mt-3">
                        <div className="w-[20%] flex">
                            <div className="w-[30%] flex items-center">
                                <Image src={clock} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px] font-Poppins">30 mins</p>
                            </div>
                        </div>

                        <div className="w-[20%] flex ml-2">
                            <div className="w-[30%]">
                                <Image src={cut} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px]  font-Poppins">Easy</p>
                            </div>
                        </div>

                        <div className="w-[20%] flex">
                            <div className="w-[30%]">
                                <Image src={rating} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px] font-Poppins">4.5</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="w-[98%] flex justify-between mt-8 mb-0.5 ml-0.5">
                        <div className="w-[30%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px]" onClick={ () => {handleToRecipe(rm.strMeal , rm.idMeal); } }>
                            <div className="w-[70%] flex items-center ml-2">
                                <p className="text-[14px] font-Poppins">View Recipe</p>
                            </div>

                            <div className="w-[10%] flex items-center">
                                <Image src={next} alt="next page" />
                            </div>
                        </div>

                        <div className="w-[8%] bg-[#f4faeb] rounded-full p-2 shadow-2xs mr-2 hover:cursor-pointer" onClick={ ()=> {handleCopy(rm.strMeal) , setMsgDiv()} }>
                            <Image src={share} alt="share" />
                        </div>
                    </div>
                </div>
                ))}
                </>

                )}
            </div>



            {/* Recipe 2 */}
            <div className="w-[25%] bg-white shadow-2xl flex flex-col rounded-3xl border-2 border-[#eeeeee]">
                {skeletonOne && (
                    <div className="w-full p-10">
                        <Skeleton active />
                    </div>
                )}

                {recipeOne && (
                <>
                {randomMealTwo.map((rm) => (
                <div className="w-full flex flex-col" key={rm.idMeal}>
                    <div className="w-full bg-[#e4e9ec] flex justify-center rounded-tl-[22px] rounded-tr-[22px] border-0 border-b-2 border-[#eeeeee]">
                        <Image src={rm.strMealThumb} alt="paav bhaaji image" width={300} height={300} />
                    </div>
                        
                    <div className="w-full mt-4 ml-1.5">
                        <p className="font-Mogra text-[24px]">{rm.strMeal}</p>
                    </div>

                    {/* <div className="w-full flex mt-3">
                        <div className="w-[20%] flex">
                            <div className="w-[30%] flex items-center">
                                <Image src={clock} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px] font-Poppins">30 mins</p>
                            </div>
                        </div>

                        <div className="w-[20%] flex ml-2">
                            <div className="w-[30%]">
                                <Image src={cut} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px] font-Poppins">Easy</p>
                            </div>
                        </div>

                        <div className="w-[20%] flex">
                            <div className="w-[30%]">
                                <Image src={rating} alt="clock" className="p-1"/>
                            </div>

                            <div className="w-[70%] flex items-center">
                                <p className="text-[12px] font-Poppins">4.5</p>
                            </div>
                        </div>
                    </div> */}


                    <div className="w-[98%] flex justify-between mt-8 mb-0.5 ml-0.5" >
                        <div className="w-[30%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px]" onClick={ ()=>{handleToRecipe(rm.strMeal , rm.idMeal)} }>
                            <div className="w-[70%] flex items-center ml-2">
                                <p className="text-[14px] font-Poppins">View Recipe</p>
                            </div>

                            <div className="w-[10%] flex items-center">
                                <Image src={next} alt="next page" />
                            </div>
                        </div>

                        <div className="w-[8%] bg-[#f4faeb] rounded-full p-2 shadow-2xs mr-2 hover:cursor-pointer" onClick={ ()=> {handleCopy(rm.strMeal) , setMsgDiv()} }>
                            <Image src={share} alt="share" />
                        </div>
                    </div>
                </div>
                ))}
                </>
                )}
            </div>

            {/* Recipe 3 */}
            <div className="w-[25%] bg-white shadow-2xl flex flex-col rounded-3xl border-2 border-[#eeeeee]">

                {skeletonOne && (
                    <div className="w-full p-10">
                        <Skeleton active />
                    </div>
                )}

                {recipeOne && (
                <>
                    {randomMealThree.map((rm) => (
                        <div className="w-full flex flex-col" key={rm.idMeal}>

                            <div className="w-full bg-[#e4e9ec] flex justify-center rounded-tl-[22px] rounded-tr-[22px] border-0 border-b-2 border-[#eeeeee]">
                                <Image src={rm.strMealThumb} alt="paav bhaaji image" width={300} height={300}/> 
                            </div>

                            <div className="w-full mt-4 ml-1.5">
                                <p className="font-Mogra text-[24px]">
                                    {rm.strMeal}
                                </p>
                            </div>

                            {/* <div className="w-full flex mt-3">
                                <div className="w-[20%] flex">
                                    <div className="w-[30%] flex items-center">
                                        <Image src={clock} alt="clock" className="p-1"/>
                                    </div>

                                    <div className="w-[70%] flex items-center">
                                        <p className="text-[12px] font-Poppins">30 mins</p>
                                    </div>
                                </div>

                                <div className="w-[20%] flex ml-2">
                                    <div className="w-[30%]">
                                        <Image src={cut} alt="clock" className="p-1"/>
                                    </div>

                                    <div className="w-[70%] flex items-center">
                                        <p className="text-[12px] font-Poppins">Easy</p>
                                    </div>
                                </div>

                                <div className="w-[20%] flex">
                                    <div className="w-[30%]">
                                        <Image src={rating} alt="clock" className="p-1"/>
                                    </div>

                                    <div className="w-[70%] flex items-center">
                                        <p className="text-[12px] font-Poppins">4.5</p>
                                    </div>
                                </div>
                            </div> */}

                            <div className="w-[98%] flex justify-between mt-8 mb-0.5 ml-0.5">
                                <div className="w-[30%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px]" onClick={ ()=> {handleToRecipe(rm.strMeal , rm.idMeal)} }>
                                    <div className="w-[70%] flex items-center ml-2">
                                        <p className="text-[14px] font-Poppins">View Recipe</p>
                                    </div>

                                    <div className="w-[10%] flex items-center">
                                        <Image src={next} alt="next page" />
                                    </div>
                                </div>

                                <div className="w-[8%] bg-[#f4faeb] rounded-full p-2 shadow-2xs mr-2 hover:cursor-pointer" onClick={ ()=> {handleCopy(rm.strMeal) , setMsgDiv()} }>
                                    <Image src={share} alt="share" />
                                </div>
                            </div>
                        </div>
                    
                    ))}
                    

                </>
                )}

            </div>

        </>
    )
}



export default RecipeCards;