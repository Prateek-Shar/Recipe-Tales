import Banner from "@/components/Blog/Banner";
import "@/app/globals.css"

const Blogs = () => {

    return (

        <div className="w-full bg-[#f9f7f5]">

            <Banner />

            <div className="w-full flex flex-col items-center mt-25">
                <p className="font-Capra text-5xl mt-5">Latest Recipes</p>

                <div className="w-[30%] mt-5">
                    <p className="font-Poppins text-center">From comfort food classics to innovative dishes, explore our collection of tried-and-tested recipes</p>
                </div>
            </div>
            
        </div>
    )
}


export default Blogs;