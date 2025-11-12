import Image from "next/image"
import cap from "@/public/Images/cap.png"
import exp_recipe from "@/public/Images/explore_recipe.png"
import Link from "next/link"

const Banner = () => {

    const hanldeClickToNewRecipes = () => {
        
    }

    return (
        <div className="w-full bg-[url(/Images/blog_banner.jpg)] bg-cover p-1 opacity-90">
            <div className="w-full flex justify-center mt-50 animate-bounce">
                <Image src={cap} alt="Chef Cap" width={50} height={50} />
            </div>

            <div className="w-full flex justify-center">
                <p className="font-Capra text-7xl text-white">Recipe Tales</p>
            </div>

            <div className="w-full flex justify-center items-center mt-5">
                <div className="w-[40%] flex items-start justify-center text-center">
                    <p className="font-Mogra text-2xl text-white">Discover delicious recipes, cooking tips, and culinary inspiration from around the world</p>
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-10 mb-20">
                <div className="w-[11%] flex bg-[#ca6441] rounded-2xl">
                    <div className="w-[10%] ml-2 flex justify-center items-center">
                        <Image src={exp_recipe} alt="Explore Recipe" width={100} height={100} />
                    </div>
                    <div className="w-[90%] ml-2 p-3">
                        <button type="button" className="text-[16px] font-Poppins text-white">Explore Recipes</button>
                    </div>
                </div>

                <div className="w-[10%] flex bg-[#ca6441] rounded-2xl ml-8">
                    <div className="w-[10%] ml-2 flex justify-center items-center">
                        <Image src={exp_recipe} alt="Explore Recipe" width={100} height={100} />
                    </div>
                    <div className="w-[90%] ml-2 p-3">
                        <Link href="/add_recipe" className="text-[16px] font-Poppins text-white">Add Recipes</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}



export default Banner;