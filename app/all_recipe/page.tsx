import Image from "next/image";
import AllRecipeTable from "@/components/all_recipe/all_recipe_table";
import arr from "@/public/Images/arrow_down.png"

const all_recipe = () => {

    return (

        <div className="w-full">

            <div className="w-full flex flex-col items-center justify-evenly backdrop-blur-lg"  style={{backgroundImage : 'url(/Images/all_recipe.png)' , backgroundRepeat : "no-repeat" , backgroundSize : "cover" , backgroundPosition : "center" , height : 500}}>
                
                <div className="w-[30%] mt-10">
                    <p className="font-Capra text-4xl text-stone-200 text-shadow-lg text-center">Discover Every Recipe in One Place</p>
                </div>

                <div className="w-[60%] flex items-center flex-col">
                    <p className="font-Capra text-3xl text-stone-200 text-shadow-lg text-center">Explore our complete collection of delicious recipes, from quick snacks and comforting meals to desserts and refreshing beverages. Find the perfect dish for every occasion.</p>
                    <Image src={arr} alt="scroll down" className="animate-bounce mt-8" height={30} width={30} />
                </div>

            </div>

            <div className="w-full flex justify-center mt-20 mb-20">
                <AllRecipeTable />
            </div>

        </div>


    )
}

export default all_recipe;