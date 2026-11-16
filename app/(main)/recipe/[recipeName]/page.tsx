"use client"

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import ing from "@/public/Images/ingredients.png"
import uten from "@/public/Images/utensils.png"
import cook from "@/public/Images/cooking.png"
import heart from "@/public/Images/heart.png"
import info from "@/public/Images/info.png";
import heart_filled from "@/public/Images/heart_filled.png";
import snap from  "@/public/Images/snap.png";
import steps from "@/public/Images/steps.png";
import gsap from 'gsap'
import { count } from 'console'



interface Meal_Det {
  [key: string]: any;
  strInstructions: string;
  strCategory : string;
  strArea : string;
  strYoutube : string;
  idMeal : string;
  strMealThumb : string;
}




const Recipe = () => {

    const tl = gsap

    const filledHeartDiv = useRef<HTMLDivElement>(null)

    const params = useParams()

    const name = params.recipeName
    const formatted_name = decodeURIComponent(name as string)

    const searchParams = useSearchParams()
    const id = searchParams.get("Meal_id")

    console.log("Formatted Name : " , formatted_name)

    const [filledHeart , setFilledHeart] = useState(false)
    const [ratingCount , setRatingCount] = useState<boolean>(false)
    const [rawHeart , setRawHeart] = useState(true);
    const [rating , setRating] = useState<number>(0)

    const api_db = process.env.NEXT_PUBLIC_SEARCH_RECIPE_BY_ID_API

    const formatted_api = `${api_db}${id}`    

    // console.log("API : " , formatted_api)

    const [mealDetails, setMealDetails] = useState<Meal_Det | null >(null)

    const ratingDiv = useRef<HTMLDivElement>(null)

    const handleAPI = async () => {
        const res = await fetch(`/api/get_random_recipe_detail?id=${id}`)

        if (!res.ok) {
            console.error("Something broke up")
            return
        }

        // console.log("api ran")
        const data = await res.json()

        // console.log("Complete response:", data);
        // console.log("Meal object:", data.meal);
        // console.log("Source:", data.meal?.strSource);

        setMealDetails(data.meal.meals[0])
    }


    const handleLike = async(value : string | null) => {
        const res = await fetch(`/api/add_rating` , {
            method : "POST",
            headers : {
                "Content-type" : "application/json" 
            }, 
            body : JSON.stringify({"meal_id" : value})
        })

        if(!res.ok) {
            console.log("Response failed");
        }

        setRawHeart(false)
        setFilledHeart(true)
    }


    const get_rating = async() => {
        const res = await fetch(`/api/get_rating?meal_id=${id}` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log(`API not working on frontend`)
            return;
        }

        const data = await res.json()
        setRating(data.result.Counter)
    }


    // const Like = (value : string | null) => {
    //     handleLike(value);
    // }

    const currentMeal = mealDetails

    const ingredients = currentMeal
        ? Object.entries(currentMeal)
            .filter(([key, value]) => key.startsWith("strIngredient") && value)
            .map(([key, value]) => {
            const measureKey = key.replace("strIngredient", "strMeasure")
            return {
                ingredient: value,
                measure: currentMeal[measureKey] || ""
            }
        })
    : []


    const handleClickToLink = (value : string | null) => {
        if(!value) {
            return
        }
        window.open(value)
    }

    const showRating = () => {
        setRatingCount(true)
        // setFilledHeart(true)
        // setRawHeart(false)
        if (ratingDiv.current && ratingCount) {
            gsap.to(ratingDiv.current , {
                x : -20 , duration : 2
            })
        }
    }

    const disableRating = () => {
        setRatingCount(false)   
    }


    useEffect(() => {
        get_rating();
        handleAPI();
    } , [rating])


    useEffect(() => {

        if(rating > 0) {
            setFilledHeart(true)
            setRawHeart(false)
        }

        else {
            setRawHeart(true)
            setFilledHeart(false)
        }
    
    } , [rating])   

    useEffect(() => {
        console.log("Meal Details : " , rating)
    } , [mealDetails])


    return (

    <div className="w-full flex justify-center flex-col items-center xl:my-20 mm:my-10">

        <div className='xl:w-[65%] mm:w-full flex justify-center items-center text-center mb-10'>
            <p className="xl:text-5xl mm:text-3xl font-Capra">{formatted_name}</p>
        </div>

        <div className="xl:w-[80%] mm:w-[90%] bg-white xl:p-10 mm:p-2 flex xl:flex-row mm:flex-col rounded-xl">


            {/* Left Section */}
            <div className="xl:w-[40%] mm:w-full flex flex-col">

                <div className='w-full flex justify-between'>
                    <div className='flex items-center'>
                        <Image src={snap} alt="Ingredients" className="object-contain xl:w-[10%] mm:w-[15%] p-1 xl:ml-0" />
                        <p className="xl:text-4xl mm:text-2xl font-Capra mm:ml-1 xl:ml-1">Snaps</p>
                    </div>

                    <div className='flex items-center'>
                        {rawHeart && (
                            <Image src={heart} alt='Raw heart' className='xl:w-8 mm:w-[7%] hover:cursor-pointer' onClick={() => { handleLike(id); }} onMouseEnter={showRating} onMouseLeave={disableRating}/>
                        )}

                        {filledHeart && (
                            <Image src={heart_filled} alt='Filled Heart' className='hover:cursor-pointer w-10 xl:p-0' onClick={ ()=> { handleLike(id); }} onMouseEnter={showRating} onMouseLeave={disableRating}/>
                        )}

                        {ratingCount && (
                            <p className='font-Poppins text-[20px] p-2 bg-amber-50 rounded-4xl' ref={ratingDiv}>{rating}</p>
                        )}
                    </div>
                </div>

                <div className="xl:w-[60%] mm:w-[70%] xl:h-64 mm:h-50 xl:mt-12 mm:mt-5 flex relative">
                    {mealDetails?.strSource ? (
                        <Image
                            key={mealDetails?.idMeal}
                            src={mealDetails?.strMealThumb}
                            alt={formatted_name || "recipe"}    
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <p className=''>Image Not Available</p>
                    )}
                </div>
            </div>
            

            {/* Divider */}
            <div className="w-[5%] xl:flex mm:hidden items-center ml-5 justify-center">
                <div className="h-90 bg-amber-500 p-0.5 rounded-full" />
            </div>


            {/* Ingredients Section */}
            <div className="xl:w-[50%] mm:w-[90%] flex flex-col xl:mt-0 mm:mt-15">
                <div className="w-full flex flex-row xl:ml-10 mm:ml-0 items-center">
                    <Image src={ing} alt="Ingredients" className="object-contain xl:w-[7%] mm:w-[15%] p-1 xl:ml-3 mmLpl-3" />
                    <p className="xl:text-3xl mm:text-2xl xl:ml-3 mm:ml-2 font-Capra">Ingredients</p>
                </div>

                <div className="w-full flex xl:mt-10 mm:mt-6 xl:ml-15 mm:ml-2 flex-col">
                    {ingredients.map((item, index) => (
                    <div key={index} className="flex items-center mb-3">
                        <div className="xl:w-[4%] mm:w-[8%]">
                            <Image src={uten} alt="steps" />
                        </div>

                        <div className="w-full ml-5 bg-amber-50 p-2 rounded-lg">
                            <p className="font-medium xl:text-[18px] mm:text-[14px] text-gray-700 flex justify-between">
                                {item.ingredient}
                                {item.measure && (
                                <span className="text-gray-500 ml-2">{item.measure}</span>
                                )}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

      {/* Preparation Section */}
        <div className="xl:w-[80%] mm:w-[90%] bg-white flex flex-col mt-10 rounded-xl">
            <div className="w-full flex xl:ml-2 mm:ml-1 mt-5 mb-4 items-center">
                <Image src={cook} alt="Prepare" className="object-contain xl:w-[3%] mm:w-[14%] xl:ml-3 mm:ml-0 p-0.5" />
                <p className="font-Capra xl:text-4xl mm:text-2xl xl:ml-3 mm:ml-2">Preparation</p>
            </div>

            <div className="w-full flex justify-center">
                <div className='w-[97%] mt-2 mb-5'> 
                    {/* {mealDetails.map((meal) => (   */}
                    <p key={mealDetails?.idMeal} className="font-Poppins p-2 pl-0 xl:text-[16px] mm:text-[14px]">
                        {mealDetails?.strInstructions?.split(/(?<=\.)\s+(?=[A-Z])/)
                        .map((sentence, index) => (
                            <div className='flex items-center p-2'>
                            <Image src={steps} alt="Ing Icon" className="xl:h-8 xl:w-8 mm:w-6 mm:h-6"/>
                            <span key={index} className='ml-3'>{sentence}<br/></span>
                            </div>
                        ))}
                        </p>
                    {/* ))} */}
                </div> 
            </div>
        </div>


        <div className='xl:w-[80%] mm:w-[90%] bg-white mt-10 rounded-xl'>
            <div className='w-full p-2 mt-4 flex items-center'>
                <Image src={info} alt="other details" className="object-contain xl:w-[2.5%] mm:w-[11%] xl:ml-3 mm:ml-0 p-0.5" />
                <p className='font-Capra xl:text-4xl mm:text-2xl ml-2'>Other Details</p>
            </div>

            <div className='w-full p-2 xl:mt-10 mm:mt-4 pl-4 flex'>
                <p className='font-Mogra xl:text-2xl mm:text-[17px]'>Category -</p>
                {/* {mealDetails.map((meal) => ( */}
                    <p key={mealDetails?.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-3'>{mealDetails?.strCategory}</p>
                {/* ))} */}
            </div>

            <div className='w-full p-2 xl:mt-5 mm:mt-2 pl-4 flex'>
                <p className='font-Mogra xl:text-2xl mm:text-[17px]'>Area -</p>
                <p key={mealDetails?.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-3'>{mealDetails?.strArea || "NA"}</p>
            </div>

            <div className='w-full p-2 xl:mt-5 mm:mt-2 flex pl-4 mb-5'>
                {/* {mealDetails.map((meal) => ( */}
                    <div className='w-full flex xl:flex-row mm:flex-col' key={mealDetails?.idMeal}>  
                        <p className='font-Mogra xl:text-2xl mm:text-[17px]'>YT Link :</p>
                        <p key={mealDetails?.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-0 text-blue-500 hover:cursor-pointer'  onClick={() => {handleClickToLink(mealDetails?.strYoutube ?? null); }}>{mealDetails?.strYoutube || `NA` }</p>
                    </div>
                {/* ))} */}
            </div>
        </div>

    </div>

    )
}

export default Recipe
