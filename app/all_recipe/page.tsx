import Image from "next/image";
import AllRecipeTable from "@/components/all_recipe/all_recipe_table";
import arr from "@/public/Images/arrow_down.png"

const all_recipe = () => {

    return (

        <div className="w-full">

            <div className="w-full flex flex-col items-center justify-evenly backdrop-blur-lg bg-[url(/Images/all_recipe.png)] bg-no-repeat bg-cover">
                
                <div className="xl:w-[30%] mm:w-[90%] xl:mt-25 mm:mt-20">
                    <p className="font-Capra xl:text-4xl mm:text-3xl text-stone-200 text-shadow-lg text-center">Discover Every Recipe in One Place</p>
                </div>

                <div className="xl:w-[60%] mm:w-[90%] flex items-center flex-col xl:my-10 mm:my-10">
                    <p className="font-Capra xl:text-3xl text-stone-200 mm:text-[18px] text-shadow-lg text-center">Explore our complete collection of delicious recipes, from quick snacks and comforting meals to desserts and refreshing beverages. Find the perfect dish for every occasion.</p>
                    <Image src={arr} alt="scroll down" loading="eager" className="animate-bounce mt-8 mm:w-5 mm:h-5 xl:w-10 xl:h-10" />
                </div>

            </div>

            <div className="w-full flex justify-center mt-20 mb-20">
                <AllRecipeTable />
            </div>

        </div>


    )
}

export default all_recipe;