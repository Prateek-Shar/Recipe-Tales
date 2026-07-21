import Banner from "@/components/Blog/Banner";
import "@/app/globals.css"

const Blogs = () => {

    return (

        <div className="w-full bg-[#f9f7f5]">

            <Banner />

            <div className="w-full flex flex-col items-center xl:mt-25 mm:mt-10">
                <p className="font-Capra xl:text-5xl mm:text-3xl">Latest Recipes</p>

                <div className="xl:w-[30%] mm:w-[90%] mt-5">
                    <p className="font-Poppins text-center xl:text-[16px] mm:text-[15px]">From comfort food classics to innovative dishes, explore our collection of tried-and-tested recipes</p>
                </div>
            </div>
            
        </div>
    )
}


export default Blogs;