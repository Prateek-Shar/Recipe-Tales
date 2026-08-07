import Image from "next/image"
import breakfast from "@/public/Images/breakfast.png";
import dinner from "@/public/Images/dinner.png";
import lunch from "@/public/Images/lunch.png"
import deserts from "@/public/Images/deserts.png"
import protein from "@/public/Images/protein.png"
import quick from "@/public/Images/hotdog.png"
import right from "@/public/Images/arrow.png"
import dosa from "@/public/Images/dosa.png"
import drink from "@/public/Images/drink.png";
import pizza from "@/public/Images/pizza.png"
import soup from "@/public/Images/soup.png"
import momo from "@/public/Images/momo.png"
import asian from "@/public/Images/noodle.png";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";


const Catagory_Cards = () => {

    const route = useRouter()

    const [seeAll , setSeeAll] = useState<boolean>(true)
    const [moreCategories , setMoreCategories] = useState<boolean>(false)

    const moreCategoriesDiv = useRef<HTMLDivElement>(null)

    const showAllCategories = () => {
        setSeeAll(false)
        setMoreCategories(true)

        if(moreCategoriesDiv.current) {
            moreCategoriesDiv.current.classList.replace("justify-end" , "justify-evenly");
        }
    }

    const Search_category = async(value : string) => {
        route.push(`/category_recipes?Category=${value}`)
    }

    return (

        <>
        <div className="w-full xl:hidden mm:flex flex-col">
            <div className="w-full flex justify-evenly">
                <div className="xl:hidden mm:flex flex-col mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Breakfast")} }>
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={breakfast} alt="breakfast" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Breakfast</p>
                    </div>
                </div>

                <div className="xl:hidden mm:flex flex-col mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={lunch} alt="breakfast" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Lunch</p>
                    </div>
                </div>

                <div className="xl:hidden mm:flex flex-col mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                    <div className="w-full xl:p-4 xl:mt-0 mm:p-1 flex justify-center mm:mt-2">
                        <Image src={dinner} alt="breakfast" className="object-contain w-[42%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins mm:text-[10px]">Dinner</p>
                    </div>
                </div>

                <div className="xl:hidden mm:flex flex-col mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={deserts} alt="breakfast" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins mm:text-[10px]">Deserts</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end">
                {seeAll && (
                    <div className="xl:flex mm:flex pt-8 pointer-events-auto mr-5">
                        <button className="group relative inline-flex items-center gap-3 px-6 py-2 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95" onClick={showAllCategories}>
                            <span className="relative z-10 xl:text-[16px] mm:text-[13px]">See All</span>
                            <Image src={right} alt="Redirect" className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-10"></div>
                        </button>
                    </div>
                )}

                {moreCategories && (
                <div className="flex flex-col">
                    <div className="w-full flex justify-evenly items-center mt-5">
                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("High Protein")} }>
                            <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={protein} alt="breakfast" className="object-contain mm:w-[35%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                                <p className="font-Poppins text-[10px]">High Protein</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Quick Meals")} }>
                            <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={quick} alt="breakfast" className="object-contain mm:w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                                <p className="font-Poppins text-[10px]">Quick Meals</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Italian")} }>
                            <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={pizza} alt="pizza" className="object-contain w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                                <p className="font-Poppins text-[10px]">Italian</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Asian")} }>
                            <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={asian} alt="Noodle" className="object-contain w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                                <p className="font-Poppins text-[10px]">Asian</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-evenly items-center mt-5">
                        <div className="w-[20%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("South Indian")} }>
                            <div className="w-full xl:p-4 xl:mt-0 mm:p-1 flex justify-center mm:mt-2">
                                <Image src={dosa} alt="Dosa" className="object-contain w-[42%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                                <p className="font-Poppins text-[10px]">South Indian</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Street Food")} }>
                            <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={momo} alt="Momo" className="object-contain mm:w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                                <p className="font-Poppins text-[10px]">Street Food</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Soups")} }>
                            <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={soup} alt="Soup" className="object-contain mm:w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                                <p className="font-Poppins text-[10px]">Soups</p>
                            </div>
                        </div>

                        <div className="w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Drinks")} }>
                            <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                                <Image src={drink} alt="Drinks" className="object-contain mm:w-[40%]"/>
                            </div>

                            <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                                <p className="font-Poppins text-[10px]">Drinks</p>
                            </div>
                        </div>
                    </div>

                </div>
                )}

            </div>

        </div>

        <div className="w-full xl:flex flex-col mm:hidden">

            <div className="w-full flex justify-evenly">
                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Breakfast")} }>
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={breakfast} alt="breakfast" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">Breakfast</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Lunch")} }>
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={lunch} alt="breakfast" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">Lunch</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Dinner")} }>
                    <div className="w-full xl:p-4 xl:mt-0 mm:p-1 flex justify-center mm:mt-2">
                        <Image src={dinner} alt="breakfast" className="object-contain w-[42%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">Dinner</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Deserts")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={deserts} alt="breakfast" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">Deserts</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("High Protein")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={protein} alt="breakfast" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">High Protein</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Quick Meals")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={quick} alt="breakfast" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">Quick Meals</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-end mt-10" ref={moreCategoriesDiv}>

                {seeAll && (
                <div className="xl:flex mm:flex pt-8 pointer-events-auto mr-5">
                    <button className="group relative inline-flex items-center gap-3 px-6 py-2 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95" onClick={showAllCategories}>
                        <span className="relative z-10">See All</span>
                        <Image src={right} alt="Redirect" className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-10"></div>
                    </button>
                </div>
                )}
                 
                {moreCategories && (
                <>
                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Italian")} }>
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={pizza} alt="pizza" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">Italian</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Asian")} }>
                    <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={asian} alt="Noodle" className="object-contain w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">Asian</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("South Indian")} }>
                    <div className="w-full xl:p-4 xl:mt-0 mm:p-1 flex justify-center mm:mt-2">
                        <Image src={dosa} alt="Dosa" className="object-contain w-[42%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                        <p className="font-Poppins text-[16px]">South Indian</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Street Food")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={momo} alt="Momo" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">Street Food</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Soups")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={soup} alt="Soup" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">Soups</p>
                    </div>
                </div>

                <div className="w-[10%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer" onClick={() => { Search_category("Drinks")} }>
                    <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                        <Image src={drink} alt="Drinks" className="object-contain mm:w-[40%]"/>
                    </div>

                    <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                        <p className="font-Poppins text-[16px]">Drinks</p>
                    </div>
                </div>
                </>
                )}
            </div>

        </div>
        </>
    )
}


export default Catagory_Cards;