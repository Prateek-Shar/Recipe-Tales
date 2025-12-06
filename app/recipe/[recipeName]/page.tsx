"use client"

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ing from "@/public/Images/ingredients.png"
import uten from "@/public/Images/utensils.png"
import cook from "@/public/Images/cooking.png"
import heart from "@/public/Images/heart.png"
import heart_filled from "@/public/Images/heart_filled.png";



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

    const handleAPI = async () => {
        const res = await fetch(`${formatted_api}`)
        if (!res.ok) {
            console.error("Something broke up")
            return
        }

        const data = await res.json()
        setMealDetails(data.meals)
    }

    useEffect(() => {
        handleAPI();
    } , [id])


    const handleLike = async(value : string | null) => {
        
        const res = await fetch(`api/add_rating` , {
            method : "POST",
            headers : {
                "Content-type" : "application/json" 
            }, 
            body : JSON.stringify({"Recipe_name" : value})
        })

        if(!res.ok) {
            console.log("Response failed");
        }

        const data = res.json()
    }


    const get_rating = async() => {
        
        const res = await fetch(`api/get_rating?Recipe_name=${name}` , {
            method : "GET"
        })

        if(!res.ok) {
            console.log(`API not working on frontend`)
        }

        const data = await res.json()
        setRating(data.result.Counter)
        
    }


    const Like = (value : string | null) => {

        setFilledHeart(true)
        setRawHeart(false)

        console.log(`Recipe name is ${value}`);

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


    useEffect(() => {
        get_rating();
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



    return (

    <div className="w-full flex justify-center flex-col items-center mt-20 mb-20">
        <div className="w-[80%] bg-white p-10 flex rounded-xl">
            {/* Left Section */}
            <div className="w-[40%] flex flex-col">
                <div className='w-full flex justify-between items-center'>
                    <p className="text-5xl font-Capra">{name}</p>

                    {rawHeart && (
                        <Image src={heart} alt='Raw heart' className='w-[4%] h-7 hover:cursor-pointer' onClick={() => { Like(name); }} />
                    )}

                    {filledHeart && (
                        <Image src={heart_filled} alt='Filled Heart' className='w-[4%] h-7 hover:cursor-pointer' onClick={ ()=> { Like(name); }} />
                    )}

                </div>

                <div className="w-[60%] mt-12 flex">
                    {mealDetails.map((md) => (
                        <Image key={md.idMeal} src={md.strMealThumb} alt="Meal" width={300} height={300} loading='eager' />
                    ))}
                </div>
            </div>
            

            {/* Divider */}
            <div className="w-[5%] flex items-center ml-5 justify-center">
                <div className="h-90 bg-amber-500 p-0.5 rounded-full" />
            </div>


            {/* Ingredients Section */}
            <div className="w-[50%] flex flex-col">
                <div className="w-full flex ml-15 items-center">
                    <p className="text-3xl font-Capra">Ingredients</p>
                    <Image src={ing} alt="Ingredients" className="object-contain w-[5%] p-1 ml-3" />
                </div>

                <div className="w-full flex mt-10 ml-15 flex-col">
                    {ingredients.map((item, index) => (
                    <div key={index} className="flex items-center mb-3">
                        <div className="w-[3%]">
                            <Image src={uten} alt="steps" />
                        </div>

                        <div className="w-full ml-5 bg-amber-50 p-2 rounded-lg">
                            <p className="font-medium text-lg text-gray-700 flex justify-between">
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
        <div className="w-[80%] bg-white flex flex-col mt-10 rounded-xl">
            <div className="w-full flex ml-5 mt-5 mb-4 items-center">
                <p className="font-Capra text-4xl">Preparation</p>
                <Image src={cook} alt="Prepare" className="object-contain w-[3%] ml-3 p-0.5" />
            </div>

            <div className="w-full flex justify-center">
                <div className='w-[97%] mt-2 mb-5'> 
                    {mealDetails.map((meal) => ( <p key={meal.idMeal} className='font-Poppins p-2 pl-0'>{meal.strInstructions.split(/\d+\.\s*/g)}</p> ))} 
                </div> 
            </div>
        </div>

        <div className='w-[80%] bg-white mt-10 rounded-xl'>
            <div className='w-full p-2 mt-4'>
                <p className='font-Capra text-4xl ml-2'>Other Details</p>
            </div>

            <div className='w-full p-2 mt-10 pl-4 flex'>
                <p className='font-Mogra text-2xl'>Catagory     -</p>
                {mealDetails.map((meal) => (
                    <p key={meal.idMeal} className='font-Poppins text-[20px] ml-5'>{meal.strCategory}</p>
                ))}
            </div>

            <div className='w-full p-2 mt-5 pl-4 flex'>
                <p className='font-Mogra text-2xl'>Area     -</p>
                {mealDetails.map((meal) => (
                    <p key={meal.idMeal} className='font-Poppins text-[20px] ml-5'>{meal.strArea}</p>
                ))}
            </div>

            <div className='w-full p-2 mt-5 flex pl-4 mb-5'>
                {mealDetails.map((meal) => (
                    <div className='w-full flex' key={meal.idMeal}>  
                        <p className='font-Mogra text-2xl'>YT Link -</p>
                        <p key={meal.idMeal} className='font-Poppins text-[20px] ml-5 text-blue-500 hover:cursor-pointer'  onClick={() => {handleClickToLink(meal.strYoutube); }}>{meal.strYoutube || `NA` }</p>
                    </div>
                ))}
            </div>
        </div>

    </div>

    )
}

export default Recipe
