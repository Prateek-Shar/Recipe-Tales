"use client"

import Image from "next/image"
import search from "@/public/Images/search.png"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation";
import { Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons';


interface meals_det {
    idMeal : string,
    strMeal : string
}


const SearchBar = () => {

    const router = useRouter()

    const searchBox =  useRef<HTMLInputElement>(null)
    const recipeName = useRef<HTMLInputElement>(null)
    const searchBoxDiv =  useRef<HTMLInputElement>(null)

    
    const [searchPlaceholder , setSearchPlaceholder] = useState<string>("Search Recipes...")

    const [MealDet , setMealDet] = useState<meals_det[]>([])
    const [SearchDiv , setSearchDiv] = useState(false)
    const [Loader , setLoader] = useState<boolean>(false)

    const loaderDiv = useRef<HTMLDivElement>(null);

    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearch = () => {
        // Cancel the previous timer
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    
        setLoader(true);
    
        // Create a new timer
        timerRef.current = setTimeout(() => {
            Search();
        }, 300);
    };

    
    const Search = async () => {

        const api_db = process.env.NEXT_PUBLIC_SEARCH_API;
        const sv = searchBox.current?.value.trim();  

        if(!sv) {
            setSearchPlaceholder("Search Recipes...")
            setSearchDiv(false)
            setMealDet([])
            setLoader(false)

            if (searchBoxDiv.current) {
                searchBoxDiv.current.style.border = "2px solid #f5f5f4";
                searchBoxDiv.current.style.borderBottomLeftRadius = "15px";
                searchBoxDiv.current.style.borderBottomRightRadius = "15px";
            } 
            
            return;
        }

        setLoader(true);

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
                setMealDet(data.meals);
                setSearchDiv(true);
                setLoader(false);
            }

        }
    
        catch(error) {
            console.error("Error : " , error)
        }
        

        if(loaderDiv.current) {
            loaderDiv.current.style.borderBottomLeftRadius = "10px"
            loaderDiv.current.style.borderBottomRightRadius = "10px"
        } 

        if(searchBoxDiv.current) {
            searchBoxDiv.current.style.borderBottom = "none"
            searchBoxDiv.current.style.borderBottomLeftRadius = "0px"
            searchBoxDiv.current.style.borderBottomRightRadius = "0px"
        }

        return;
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


    const handleClickToRecipeDet = (value : string , id : string) => {
        router.push(`/recipe/recipeName?Meal_name=${value}&id=${id}`)
    }


    return (

        <div className="xl:w-[15%] mm:w-[40%] bg-white flex flex-col border-2 border-[#f5f5f4] rounded-2xl relative xl:mr-10 mm:mr-0" ref={searchBoxDiv}>

            <div className="flex">
                <div className="xl:w-[9%] mm:hidden p-1 xl:flex justify-center items-center ml-2">
                    <Image src={search} alt="Serach Icon" />
                </div>

                <div className="w-[90%] border-0 flex items-center">
                    <input type="text" placeholder={searchPlaceholder} className=" w-full p-2 outline-0 font-Poppins xl:text-[16px] mm:text-[13px] xl:placeholder:text-[16px] mm:placeholder:text-[12px]" ref={searchBox} onChange={handleSearch}/>
                </div>
            </div>

            {Loader && (
                <div className="w-full flex justify-center z-10 absolute top-10 bg-white py-2 border-b-2 border-l-2 border-r-2 border-[#f5f5f4]" ref={loaderDiv}>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} className="" />
                </div>
            )}

            {SearchDiv && (
                MealDet.length > 0 ? (
                <div className="w-full h-50 overflow-auto overflow-x-hidden bg-white rounded-b-2xl absolute border-b-2 border-b-[#f5f5f4] top-10 flex flex-col z-50 no-scrollbar">
                    {MealDet.map((md) => (
                        <div key={md.idMeal} className="p-2 hover:bg-gray-100 cursor-pointer nth-last-[1]:hover:rounded-b-2xl">
                            <p className="font-Poppins text-[13px]" ref={recipeName} onClick={ ()=>{ setSearchDiv(false); ResetSearch(); handleClickToRecipeDet(md.strMeal , md.idMeal)}} >{md.strMeal}</p>
                        </div>
                    ))}
                </div>
                )  : (
                    <div className="w-full">
                        <p>No Results Found</p>
                    </div>
                )
            )}

        </div>
        
    )
}


export default SearchBar;