"use client"

import Image from "next/image";
import Main_Heading from "@/components/BannerComp/heading";
import Buttons from "@/components/BannerComp/buttons";
import Catagory_Cards from "@/components/Catagory/catagoryCards";
import RecipeCards from "@/components/recipeCards/cards";
import email from "@/public/Images/email.png";
import arrow from "@/public/Images/arrow.png"
import { usePathname } from "next/navigation";
import { useState } from "react";
import Check from "@/public/Images/check.png"



export default function Home() {

  const path = usePathname()
  console.log(`Path name : ${path}`)

  const [renderMsgDiv , setRenderMsgDiv] = useState(false)

  const handleAlert = () => {
    setRenderMsgDiv(true)

    setTimeout(() => {
      setRenderMsgDiv(false)
    } , 2000)
  }

  return (
    <>

    <div className="w-full" style={{backgroundImage : `url("/Images/banner_img.png")` , height : "600px" , backgroundSize : "cover" , backgroundPosition: "center" , paddingTop: "1px" }}>

      <Main_Heading />

      <Buttons />

    </div>

    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-[30%] flex items-center justify-center mt-10">
          <h2 className="p-2 text-4xl font-Capra">Browse By Catagory</h2>
      </div>

      <div className="w-[60%] flex justify-center items-center mt-4">
          <p className="p-2 text-[18px] font-Poppins">Explore our wide varity of recipes organized by meal type , cuisine and dietary preferences</p>
      </div>

      <div className="w-full flex justify-evenly items-center mt-10 mb-10">
        <Catagory_Cards />
      </div>

    </div>

    <div className="w-full flex flex-col">

      <div className="w-full flex justify-between items-center mt-20">
        <div className="w-[40%] ml-3">
          <div className="w-full">
            <p className="p-1 text-3xl font-Capra">Featured Recipes</p>
          </div>

          <div className="w-full">
            <p className="p-1 font-Poppins">Our most popular and trending recipes</p>
          </div>
        </div>

        {renderMsgDiv && (
          <div className="w-[8%] bg-[#f2f1ff] flex p-2 border-2 border-[#eeeeee] rounded-2xl">
              <div className="w-[10%] flex items-center">
                  <Image src={Check} width={50} height={50} alt="Check Image"/>
              </div>

              <div className="w-full flex items-center ml-2">
                  <p className="font-Poppins text-blue-400">Link Coppied</p>
              </div>
          </div>
        )}

        <div className="w-[40%] flex flex-row-reverse">
          <div className="w-[15%] flex">
            <p className="p-1 font-Poppins">View all</p>

            <div className="w-[25%] p-1 flex justify-center">
              <Image src={arrow} alt="view all" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-evenly items-center mt-20 mb-10">
        <RecipeCards setMsgDiv={handleAlert}/>
      </div>

    </div>

    <div className="w-full bg-[#f2f1ff] flex flex-col mt-10">
      <div className="w-full flex justify-center mt-10 mb-5">
        <div className="w-[2%]">
          <Image src={email} alt="email" />
        </div>
      </div>

      <div className="w-full flex justify-center">
        <p className="p-2 text-3xl font-Capra">Get Weekly Recipe Inspiration</p>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[25%] flex justify-center">
          <p className="font-Poppins p-1">Subscripe to our newsletter and recieve delicious recipes</p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-5 mb-10">
        <div className="w-[30%] flex justify-between items-center">
          <div className="w-[70%]">
            <input type="text" className="w-full border-2 border-[#ebebf0] text-[#5820d7] p-3 rounded-2xl outline-0 bg-white font-Poppins text-[14px]" placeholder="Enter Email Address . . . . ."/>
          </div>

          <div className="w-[20%] bg-[#641bff] rounded-full flex justify-center">
            <button type="button" className="text-white text-[15px] p-2 font-Poppins">Subscribe</button>
          </div>
        </div>
      </div>

    </div>

    </>

  );

}
