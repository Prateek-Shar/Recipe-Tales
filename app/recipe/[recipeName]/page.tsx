"use client"

import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ing from "@/public/Images/ingredients.png"
import uten from "@/public/Images/utensils.png"
import cook from "@/public/Images/cooking.png"
import heart from "@/public/Images/heart.png"
import info from "@/public/Images/info.png";
import heart_filled from "@/public/Images/heart_filled.png";
import snap from  "@/public/Images/snap.png";



interface Meal_Det {
  [key: string]: any;
  strInstructions: string;
  strCategory : string;
  strArea : string;
  strYoutube : string
  idMeal : string
}




const Recipe = () => {

    const searchParams = useSearchParams()
    const name = searchParams.get("Meal_name")
    const id = searchParams.get("id")

    const [filledHeart , setFilledHeart] = useState(false)
    const [rawHeart , setRawHeart] = useState(true);
    const [rating , setRating] = useState<number>(0)

    const api_db = process.env.NEXT_PUBLIC_SEARCH_API
    const formatted_api = `${api_db}${name}`    

    const [mealDetails, setMealDetails] = useState<Meal_Det[]>([])

    const ratingDiv = useRef<HTMLDivElement>(null)

    const handleAPI = async () => {
        const res = await fetch(`${formatted_api}`)
        if (!res.ok) {
            console.error("Something broke up")
            return
        }

        const data = await res.json()
        setMealDetails(data.meals)
    }


    const handleLike = async(value : string | null) => {
        const res = await fetch(`/api/add_rating` , {
            method : "POST",
            headers : {
                "Content-type" : "application/json" 
            }, 
            body : JSON.stringify({"Recipe_name" : value})
        })

        if(!res.ok) {
            console.log("Response failed");
        }

        setRawHeart(false)
        setFilledHeart(true)
    }


    const get_rating = async() => {
        const res = await fetch(`/api/get_rating?Recipe_name=${name}` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log(`API not working on frontend`)
            return;
        }

        const data = await res.json()
        setRating(data.result.Counter)
    }


    const Like = (value : string | null) => {
        handleLike(value);
    }

    const currentMeal = mealDetails[0]


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


    const handleClickToLink = (value : string) => {
        window.open(value)
    }

    const showRating = () => {
        if (ratingDiv.current) {
            ratingDiv.current.style.display = "flex"
            ratingDiv.current.classList.add("addAnim")
        }

        
    }

    const disableRating = () => {
        if (ratingDiv.current) {
            ratingDiv.current.style.display = "none"
        }
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
    
    })   



    return (

    <div className="w-full flex justify-center flex-col items-center xl:my-20 mm:my-10">

        <div className='xl:w-[65%] mm:w-full flex justify-center items-center text-center mb-10'>
            <p className="xl:text-5xl mm:text-3xl font-Capra">{name}</p>
        </div>

        <div className="xl:w-[80%] mm:w-[90%] bg-white xl:p-10 mm:p-2 flex xl:flex-row mm:flex-col rounded-xl">


            {/* Left Section */}
            <div className="xl:w-[40%] mm:w-full flex flex-col">

                <div className='w-full flex justify-between items-center'>
                    <div className='xl:w-[65%] mm:w-[75%] flex items-center'>
                        <Image src={snap} alt="Ingredients" className="object-contain xl:w-[15%] mm:w-[15%] p-1 xl:ml-0" />
                        <p className="xl:text-4xl mm:text-2xl font-Capra mm:ml-1 xl:ml-1">Snaps</p>
                    </div>

                    {rawHeart && (
                        <Image src={heart} alt='Raw heart' className='xl:w-[4.5%] mm:w-[7%] hover:cursor-pointer' onClick={() => { Like(name); }} />
                    )}

                    {filledHeart && (
                        <div className='xl:w-[7%] mm:w-[10%] mm:h-8 flex justify-center items-center relative'>
                            <Image src={heart_filled} alt='Filled Heart' className='hover:cursor-pointer object-cover xl:p-0' fill  onClick={ ()=> { Like(name); }} onMouseEnter={showRating} onMouseLeave={disableRating}/>
                            <p className='font-Poppins text-[20px] p-2 hidden bg-amber-50 rounded-4xl' ref={ratingDiv}>{rating}</p>
                        </div>
                    )}
                </div>

                <div className="xl:w-[60%] mm:w-[70%] xl:h-64 mm:h-50 xl:mt-12 mm:mt-5 flex relative">
                    {mealDetails.map((md) => (
                        <Image key={md.idMeal} src={md.strMealThumb} alt="Meal" fill className='object-cover' loading='eager' />
                    ))}
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
                    {mealDetails.map((meal) => (  
                    <p key={meal.idMeal} className="font-Poppins p-2 pl-0 xl:text-[16px] mm:text-[14px]">
                        {meal.strInstructions
                        .split(/(?<=\.)\s+(?=[A-Z])/)
                        .map((sentence, index) => (
                            <span key={index}>
                            {sentence}
                            <br />
                            </span>
                        ))}
                        </p>
                    ))}
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
                {mealDetails.map((meal) => (
                    <p key={meal.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-3'>{meal.strCategory}</p>
                ))}
            </div>

            <div className='w-full p-2 xl:mt-5 mm:mt-2 pl-4 flex'>
                <p className='font-Mogra xl:text-2xl mm:text-[17px]'>Area -</p>
                {mealDetails.map((meal) => (
                    <p key={meal.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-3'>{meal.strArea || "NA"}</p>
                ))}
            </div>

            <div className='w-full p-2 xl:mt-5 mm:mt-2 flex pl-4 mb-5'>
                {mealDetails.map((meal) => (
                    <div className='w-full flex xl:flex-row mm:flex-col' key={meal.idMeal}>  
                        <p className='font-Mogra xl:text-2xl mm:text-[17px]'>YT Link :</p>
                        <p key={meal.idMeal} className='font-Poppins xl:text-[20px] mm:text-[15px] xl:ml-5 mm:ml-0 text-blue-500 hover:cursor-pointer'  onClick={() => {handleClickToLink(meal.strYoutube); }}>{meal.strYoutube || `NA` }</p>
                    </div>
                ))}
            </div>
        </div>

    </div>

    )
}

export default Recipe
