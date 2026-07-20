"use client"

import Image from "next/image";
import navbar_logo from "@/public/Images/logo.png"


const Footer_Intro = () => {

    
    return (
        
        <div className="xl:w-[30%] mm:w-full flex flex-col">

            <div className="w-full flex">
                <div className="xl:w-[8%] mm:w-[15%] xl:p-1 mm:p-2">
                    <Image src={navbar_logo} alt="Logo Image" />
                </div>

                <div className="xl:w-[70%] mm:w-[80%] flex items-center">
                    <p className="pl-2 font-Capra text-[#d9d9d9] text-2xl">TastyTales</p>
                </div>
            </div>

            <div className="w-full p-1 mt-7">
                <p className="font-Poppins text-[#6a7282]">Bringing delicious recipes to your kitchen. Our mission is to inspire home cooks of all levels</p>
            </div>

        </div>

    )
}



export default Footer_Intro;