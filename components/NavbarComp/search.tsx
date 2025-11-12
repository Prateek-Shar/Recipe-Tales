"use client"

import Image from "next/image"
import search from "@/public/Images/search.png"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation";


interface meals_det {
    idMeal : string,
    strMeal : string
}


const SearchBar = () => {

    const searchBox =  useRef<HTMLInputElement>(null)
    const recipeName = useRef<HTMLInputElement>(null)
    const searchBoxDiv =  useRef<HTMLInputElement>(null)

    const api_db = process.env.NEXT_PUBLIC_SEARCH_API;
    console.log("api db : " , api_db)
    
    const [searchPlaceholder , setSearchPlaceholder] = useState<string>("Search Recipes...")

    const [MealDet , setMealDet] = useState<meals_det[]>([])
    const [SearchDiv , setSearchDiv] = useState(false)

    const handleSearch = async() => {

        if(searchBoxDiv.current) {
            searchBoxDiv.current.style.borderBottom = "none"
            searchBoxDiv.current.style.borderBottomLeftRadius = "0px"
            searchBoxDiv.current.style.borderBottomRightRadius = "0px"
        }


        const sv = searchBox.current?.value;    
        
        if(!sv) {
            console.log("Text not found")
            setSearchPlaceholder("Search Recipes...")
            setSearchDiv(false)

            if (searchBoxDiv.current) {
                searchBoxDiv.current.style.borderBottom = "2px solid #f5f5f4";
                searchBoxDiv.current.style.borderBottomLeftRadius = "15px";
                searchBoxDiv.current.style.borderBottomRightRadius = "15px";
            }
            
            return
        }

        setSearchPlaceholder("Search Recipes...")

        try {
            
            const formatted_api = api_db + sv;

            const response = await fetch(`${formatted_api}` , {
                method: "GET",
            })
            
            if(!response.ok) {
                console.error("No Meals Found")
            }

            const data = await response.json()

            if(data.meals) {
                setMealDet(data.meals)
                setSearchDiv(true)
            }

        }
    
        catch(error) {
            console.error("Error : " , error)
        }

    }


    const ResetSearch = () => {
        if (searchBoxDiv.current) {
            searchBoxDiv.current.style.borderBottom = "2px solid #f5f5f4";
            searchBoxDiv.current.style.borderBottomLeftRadius = "15px";
            searchBoxDiv.current.style.borderBottomRightRadius = "15px";
        }

        if(searchBox.current) {
            searchBox.current.value = ""
        }
    }


    const router = useRouter()

    const handleClickToRecipeDet = (value : string , id : string) => {
        router.push(`/recipe/recipeName?Meal_name=${value}&id=${id}`)
    }



    return (

        <div className="w-[15%] bg-white flex border-2 border-[#f5f5f4] rounded-2xl relative mr-10" ref={searchBoxDiv}>
            <div className="w-[8%] p-1 flex justify-center items-center ml-2">
                <Image src={search} alt="Serach Icon" />
            </div>

            <div className="w-[90%] border-0 flex items-center" >
                <input type="text" placeholder={searchPlaceholder} className=" w-full p-2 outline-0 font-Poppins" ref={searchBox} onChange={handleSearch}/>
            </div>


            {SearchDiv && (
            <div className="w-full bg-white border-2 border-[#f5f5f4] border-t-0 rounded-b-2xl absolute top-10 flex flex-col z-50">
                {MealDet.map((md) => (
                    <div key={md.idMeal} className="p-2 hover:bg-gray-100 cursor-pointer border-2 border-t-0 border-l-0 border-r-0 border-[#f5f5f4] nth-last-[1]:hover:rounded-b-2xl ml-1 mr-1">
                        <p className="font-Poppins text-[13px]" ref={recipeName} onClick={ ()=>{ setSearchDiv(false); ResetSearch(); handleClickToRecipeDet(md.strMeal , md.idMeal)}} >{md.strMeal}</p>
                    </div>
                ))}
            </div>
            )}

        </div>
        
    )
}


export default SearchBar;