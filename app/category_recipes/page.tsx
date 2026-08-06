"use client"

import { useSearchParams , useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Skeleton , Pagination} from "antd";
import Image from "next/image";
import Cook from "@/public/Images/cook_time.png";
import serve from "@/public/Images/servings_table.png";
import cap from "@/public/Images/cap.png";
import dish from "@/public/Images/dish.png"
import next from "@/public/Images/next.png";   
import gsap from "gsap";

interface data {
    Tags : string,
    Recipe_name : string,
    Author_name : string,
    Servings : number,
    Cook_Time : number,
    _id : string
}

const Category_recipe = () => {

    const route = useRouter()

    let tl = gsap.timeline()

    const [recipeData , setRecipeData] = useState<data[]>([])
    const [count , setCount] = useState<number>(0)

    const [showStats , setShowStats] = useState<boolean>(false)
    const [showSkeleton , setShowSkeleton] = useState<boolean>(true) 

    const [hovered , setHovered] = useState<boolean>(false)

    const [boxOneData , setBoxOneData] = useState<boolean>(true)
    const [viewRecipeBt , setViewRecipeBt] = useState<boolean>(false)
    const boxOneBt = useRef<HTMLDivElement>(null)

    const box1 = useRef<HTMLDivElement>(null);
 
    const search_params = useSearchParams()
    const category = search_params.get("Category")

    const handleData = async() => {
        const res = await axios.get(`/api/get_category_recipe?category=${category}`)

        if (!res) {
            console.log("Api hit un-expectedly")
            return;
        }

        setShowSkeleton(false)
        setShowStats(true)
        setRecipeData(res.data.recipe_data)
        setCount(res.data.cou);
        // console.log("Api ran")
        // console.log(typeof recipeData)
    }

    const renderRecipe = (value : string) => {
        route.push(`/blog_recipe/blog_recipes?Meal_name=${value}`)
    }   

    useEffect(() => {
        handleData()
    } ,[])

    useEffect(() => {
        console.log("Data : " , recipeData)
    })

    const handleRecipe = (value : string) => {
        route.push(`/blog_recipe/blog_recipes?Meal_name=${value}`)
    }

    useEffect(() => {
        if (!hovered || !box1.current) return;
    
        if(hovered == true) {
            gsap.to(box1.current, {
                rotationY: 180,
                duration: 1,
                onComplete: () => {
                    setBoxOneData(false);
                    setViewRecipeBt(true);
                }
            });
        }

    }, [hovered]);

    useEffect(() => {
        if(!boxOneBt) {
            console.log("Element Not Found")
            return;
        }

        tl.to(boxOneBt.current , {rotateY : 180 , duration : 2})
            .to(boxOneBt.current , {x : 70 , duration : 1})
    } , [viewRecipeBt])

    useEffect(() => {
        console.log("Hovered status : " , hovered)
    } , [hovered])


    return (
        <>
        
        <div className="xl:w-full mm:w-screen bg-[url(/Images/banner_img.png)] xl:h-[500px] bg-cover bg-no-repeat py-1 flex justify-evenly items-center flex-col ">

            <div className="w-full flex justify-center items-center xl:mt-0 mm:mt-8">
                <p className="text-3xl font-Capra">{category} Recipes</p>
            </div>

            <div className="w-full flex justify-center items-center xl:my-0 mm:my-4">
                <div className="xl:w-[50%] mm:w-[90%]">
                <p className="flex font-Mogra xl:text-2xl mm:text-[16px] text-center">Discover a curated collection of delicious recipes crafted for every taste. Explore, cook, and enjoy dishes from a variety of cuisines and categories.</p>
                </div>
            </div>

            <div className="w-full xl:flex mm:hidden justify-center items-center">
                <div className="xl:w-[30%] mm:w-[80%] flex xl:justify-between mm:justify-center xl:my-0 mm:my-4">
                <p className="flex font-Mogra xl:text-2xl mm:text-[18px]">{count} Recipes</p>
                <p className="xl:flex mm:hidden font-Mogra text-[20px]">Communtiy Favourites</p>
                </div>
            </div>

        </div>


        <div className="w-full">

            {showStats && (
                <div className="xl:flex mm:hidden p-2 my-5">
                    <p className="font-Capra text-2xl">{category} Collection</p>
                </div>
            )}

            {showStats && (
                <div className="xl:hidden mm:flex p-2 my-5">
                    <p className="font-Capra xl:text-2xl mm:text-[18px]">Showing {count} recipes from {category} Collection</p>
                </div>
            )}

            <div className="xl:flex mm:hidden p-2">
                <p className="font-Capra text-2xl">Browse all recipes in this collection - </p>
            </div>

            {showSkeleton && (
                <div className="w-[80%] my-10">
                    <Skeleton paragraph={{rows : 10}} active />
                </div>
            )}

            {showStats && (
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-[90%] flex xl:flex-row mm:flex-col justify-evenly items-center my-10">
                        {recipeData[0] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl" key={recipeData[0]._id} ref={box1} onMouseEnter={ ()=>{setHovered(true)} } onMouseLeave={ ()=>{setHovered(false)} }>

                            {boxOneData && (
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[0].Recipe_name)} }>{recipeData[0].Recipe_name || "NA"}</p>
                            </div>
                            )}
        
                            {boxOneData && (
                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[0].Author_name || "NA"}</p>
                            </div>
                            )}

                            {boxOneData && (
                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[0].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[0].Servings} person</p>
                                </div>
                            </div>
                            )}

                            {viewRecipeBt && (
                            <div className="w-[50%] flex hover:cursor-pointer  rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[0].Recipe_name)} } ref={boxOneBt}>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[16px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div>
                            )}
                        </div>
                        ) : (null
                        )}


                        {/* Recipe 2 */}
                        {recipeData[1] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[1]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[1].Recipe_name)} }>{recipeData[1].Recipe_name || "NA"}</p>
                            </div>
        
                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[1].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[1].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[1].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[1].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}

                        {/* Recipe 3 */}
                        {recipeData[2] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[2]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[2].Recipe_name)} }>{recipeData[2].Recipe_name || "NA"}</p>
                            </div>
        
                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[2].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[2].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[2].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[2].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}


                        {/* Recipe 4 */}
                        {recipeData[3] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[3]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[3].Recipe_name)} }>{recipeData[3].Recipe_name || "NA"}</p>
                            </div>
        
                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[3].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[3].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[3].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[3].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}
                    </div>

                    <div className="w-[90%] flex justify-evenly items-center xl:mt-10 mm:mt-0">
                        {recipeData[4] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl" key={recipeData[4]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[0].Recipe_name)} }>{recipeData[4].Recipe_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[4].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[4].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[4].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[4].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}


                        {/* Recipe 2 */}
                        {recipeData[5] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[1]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[1].Recipe_name)} }>{recipeData[5].Recipe_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[5].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[5].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[5].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[5].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}

                        {/* Recipe 3 */}
                        {recipeData[6] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[6]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[6].Recipe_name)} }>{recipeData[6].Recipe_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[6].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[6].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[6].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[6].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}


                        {/* Recipe 4 */}
                        {recipeData[7] ? (
                        <div className="xl:w-[20%] mm:w-[90%] flex flex-col bg-[#dee2e6] py-2 rounded-3xl xl:mt-0 mm:mt-10" key={recipeData[7]._id}>
                            <div className="flex p-2 justify-normal items-center ml-1">
                                <Image src={dish} alt="Cook" className="object-contain w-[7%]"/>
                                <p className="font-Poppins hover:cursor-pointer text-center ml-2" onClick={ ()=>{renderRecipe(recipeData[7].Recipe_name)} }>{recipeData[7].Recipe_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 justify-normal items-center">
                                <Image src={cap} alt="Cook" className="object-contain w-[8%]"/>
                                <p className="font-Poppins xl:flex mm:hidden flex justify-center ml-2">{recipeData[7].Author_name || "NA"}</p>
                            </div>

                            <div className="flex p-2 ml-1">
                                <div className="flex items-center justify-normal">
                                    <Image src={Cook} alt="Cook Time" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[7].Cook_Time} mins</p>
                                </div>

                                <div className="flex">
                                    <Image src={serve} alt="Servings" className="object-contain w-[12%]" />
                                    <p className="font-Poppins ml-2">{recipeData[7].Servings} person</p>
                                </div>
                            </div>

                            {/* <div className="w-[40%] flex hover:cursor-pointer hover:bg-[#f2f1ff] rounded-[20px] p-2 ml-2" onClick={ ()=>{handleRecipe(recipeData[7].Recipe_name)} }>
                                <div className="w-[75%] flex items-center">
                                    <p className="text-[15px] font-Poppins">View Recipe</p>
                                </div>

                                <div className="w-[10%] flex items-center">
                                    <Image src={next} alt="next page" className="" />
                                </div>
                            </div> */}
                        </div>
                        ) : (null
                        )}
                    </div>

                    <div className="w-full p-2 flex justify-end items-center my-15">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>

                </div>


            )}
        </div>
        </>
    )}
    




export default Category_recipe;