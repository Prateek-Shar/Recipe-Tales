import Image from "next/image"
import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";


const Cards = () => {

    return (
        <div className="w-full flex justify-between">
            <div className="w-[55%] bg-white flex flex-col justify-center items-center rounded-2xl border-2 border-[#e5e0dc] pb-15 hover:cursor-pointer">

                <div className="w-full h-140 bg-[url(/Images/recipe_pasta.jpg)] bg-cover rounded-t-2xl" />

                <div className="w-full mt-8">
                    <p className="font-Poppins text-2xl pl-3">Classic Italian Pasta with Fresh Tomatoes & Basil</p>
                </div>

                <div className="w-full mt-5">
                    <p className="font-Poppins text-[#a2706a] pl-3">Discover the secrets to making authentic Italian pasta with the simplest, freshest ingredients. This timeless recipe brings restaurant-quality flavor to your home kitchen.</p>
                </div>

                <div className="w-full mt-3">
                    <div className="w-[60%] flex">
                        <div className="w-[45%] flex ml-3">
                            <div className="w-[10%]">
                                <Image src={person} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                            </div>
                        </div>

                        <div className="w-[45%] flex items-center">
                            <div className="w-[8%]">
                                <Image src={clock} alt="person" />
                            </div>

                            <div className="w-full">
                                <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">12  min</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[40%] flex flex-col justify-between">

                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl pb-5 hover:cursor-pointer">
                    <div className="w-full flex h-50">
                        <div className="w-full h-full bg-cover rounded-t-2xl" style={{backgroundImage : "url('/Images/recipe_bread.jpg')"}} />
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-2xl">Artisan Sourdough Bread: A Beginner's Guide</p>
                    </div>

                    <div className="w-full pl-2  mt-5">
                        <p className="font-Poppins text-[#a2706a]">Learn to bake crusty, golden artisan bread with this comprehensive guide perfect for beginners and seasoned</p>
                    </div>

                    <div className="w-full mt-3">
                        <div className="w-[60%] flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[15%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">12 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-2 border-[#e5e0dc] rounded-2xl pb-5 hover:cursor-pointer">
                    <div className="w-full flex flex-col h-50">
                        <div className="w-full h-full bg-cover rounded-t-2xl" style={{backgroundImage : "url('/Images/recipe_bread.jpg')"}} />
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins text-2xl">Artisan Sourdough Bread: A Beginner's Guide</p>
                    </div>

                    <div className="w-full pl-2 mt-5">
                        <p className="font-Poppins text-[#a2706a]">Learn to bake crusty, golden artisan bread with this comprehensive guide perfect for beginners and seasoned</p>
                    </div>

                    <div className="w-full mt-3">
                        <div className="w-[60%] flex">
                            <div className="w-[45%] flex ml-2">
                                <div className="w-[15%] flex items-center">
                                    <Image src={person} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">Maria Romano</p>
                                </div>
                            </div>

                            <div className="w-[45%] flex items-center ml-8">
                                <div className="w-[8%]">
                                    <Image src={clock} alt="person" />
                                </div>

                                <div className="w-full">
                                    <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">12 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>

            </div>

            
        </div>
    )
}



export default Cards