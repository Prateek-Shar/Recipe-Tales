import Image from "next/image"
import breakfast from "@/public/Images/breakfast.png";
import dinner from "@/public/Images/dinner.png";
import lunch from "@/public/Images/lunch.png"
import deserts from "@/public/Images/deserts.png"


const Catagory_Cards = () => {

    return (
        <>

            <div className="w-[15%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full p-4 flex justify-center">
                    <Image src={breakfast} alt="breakfast" className="object-contain w-[30%]"/>
                </div>

                <div className="w-full flex justify-center mb-2">
                    <p className="font-Poppins">Breakfast</p>
                </div>
            </div>

            <div className="w-[15%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full p-4 flex justify-center">
                    <Image src={lunch} alt="breakfast" className="object-contain w-[30%]"/>
                </div>

                <div className="w-full flex justify-center mb-2">
                    <p className="font-Poppins">Lunch</p>
                </div>
            </div>

            <div className="w-[15%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full p-4 flex justify-center">
                    <Image src={dinner} alt="breakfast" className="object-contain w-[30%]"/>
                </div>

                <div className="w-full flex justify-center mb-2">
                    <p className="font-Poppins">Dinner</p>
                </div>
            </div>

            <div className="w-[15%] bg-[#f2f1ff] border-2 border-[#eeeeee] rounded-4xl hover:cursor-pointer">
                <div className="w-full p-4 flex justify-center">
                    <Image src={deserts} alt="breakfast" className="object-contain w-[30%]"/>
                </div>

                <div className="w-full flex justify-center mb-2">
                    <p className="font-Poppins">Deserts</p>
                </div>
            </div>


        </>
    )
}


export default Catagory_Cards;