import Image from "next/image"
import breakfast from "@/public/Images/breakfast.png";
import dinner from "@/public/Images/dinner.png";
import lunch from "@/public/Images/lunch.png"
import deserts from "@/public/Images/deserts.png"


const Catagory_Cards = () => {

    return (
        <>

            <div className="xl:w-[15%] mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                    <Image src={breakfast} alt="breakfast" className="object-contain xl:w-[30%] mm:w-[40%]"/>
                </div>

                <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                    <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Breakfast</p>
                </div>
            </div>

            <div className="xl:w-[15%] mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full xl:p-4 mm:p-1 flex justify-center xl:mt-0 mm:mt-2">
                    <Image src={lunch} alt="breakfast" className="object-contain xl:w-[30%] mm:w-[40%]"/>
                </div>

                <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                    <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Lunch</p>
                </div>
            </div>

            <div className="xl:w-[15%] mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full xl:p-4 xl:mt-0 mm:p-1 flex justify-center mm:mt-2">
                    <Image src={dinner} alt="breakfast" className="object-contain xl:w-[30%] mm:w-[42%]"/>
                </div>

                <div className="w-full flex justify-center xl:my-2 mm:mt-1 mm:mb-3">
                    <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Dinner</p>
                </div>
            </div>

            <div className="xl:w-[15%] mm:w-[18%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full xl:p-4 mm:p-0 flex justify-center xl:mt-0 mm:mt-2">
                    <Image src={deserts} alt="breakfast" className="object-contain xl:w-[30%] mm:w-[40%]"/>
                </div>

                <div className="w-full flex justify-center xl:mb-2 xl:my-0 mm:my-2">
                    <p className="font-Poppins xl:text-[16px] mm:text-[10px]">Deserts</p>
                </div>
            </div>


        </>
    )
}


export default Catagory_Cards;