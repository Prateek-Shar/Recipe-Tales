import person from "@/public/Images/person.png";
import clock from "@/public/Images/blog_clock.png";
import Image from "next/image";


const CardsTwo = () => {

    return (
        <div className="w-full flex justify-evenly items-center">

            <div className="w-[25%] flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                <div className="w-full h-100 flex">
                    <div className="w-full h-full bg-[url(/Images/recipe_desert.jpg)] bg-cover rounded-t-2xl" />
                </div>
                
                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-2xl">Decadent Chocolate Tart with Fresh Berries</p>
                </div>

                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-[#a2706a]">Indulge in this elegant chocolate tart with a buttery crust and rich ganache filling, topped with fresh seasonal berries.</p>
                </div>

                <div className="w-full mt-6 mb-4 flex">
                    <div className="w-[45%] flex ml-2">
                        <div className="w-[13%] flex items-center">
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



            <div className="w-[25%] flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                <div className="w-full h-100 flex">
                    <div className="w-full h-full bg-[url(/Images/recipe_salad.jpg)] bg-cover rounded-t-2xl" />
                </div>
                
                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-2xl">Mediterranean Summer Salad</p>
                </div>

                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-[#a2706a]">A refreshing combination of crisp greens, juicy tomatoes, cucumber, and creamy feta cheese with a zesty lemon.</p>
                </div>

                <div className="w-full mt-6 mb-4 flex">
                    <div className="w-[45%] flex ml-2">
                        <div className="w-[13%] flex items-center">
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
                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">5 min read</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-[25%] flex flex-col rounded-2xl border-2 border-[#e5e0dc]">
                <div className="w-full h-100 flex">
                    <div className="w-full h-full bg-[url(/Images/recipe_soup.jpg)] bg-cover rounded-t-2xl" />
                </div>
                
                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-2xl">Cozy Autumn Vegetable Soup</p>
                </div>

                <div className="w-full pl-2  mt-5">
                    <p className="font-Poppins text-[#a2706a]">Warm up with this hearty vegetable soup packed with seasonal produce and aromatic herbs. Perfect for chilly.</p>
                </div>

                <div className="w-full mt-6 mb-4 flex">
                    <div className="w-[45%] flex ml-2">
                        <div className="w-[13%] flex items-center">
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
                            <p className="font-Poppins text-[#a2706a] text-[14px] pl-2">20 min read</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
} 


export default CardsTwo;