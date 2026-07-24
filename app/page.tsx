"use client"

import Image from "next/image";
import Main_Heading from "@/components/BannerComp/heading";
import Buttons from "@/components/BannerComp/buttons";
import Catagory_Cards from "@/components/Catagory/catagoryCards";
import RecipeCards from "@/components/recipeCards/cards";
import email from "@/public/Images/email.png";
import arrow from "@/public/Images/arrow.png"
import { useRef, useState } from "react";
import Check from "@/public/Images/check.png"
import construction from "@/public/Images/under_construction.png"
import prohib from "@/public/Images/prohibition.png";



export default function Home() {

  const [renderMsgDiv , setRenderMsgDiv] = useState(false)
  const [renderErrorDiv , setRenderErrorDiv] = useState(false)
  const [successSubscribe , setSuccessSubscribe] = useState(false)  

  const subscribeText = useRef<HTMLInputElement>(null)

  const handleAlert = () => {
    setRenderMsgDiv(true)

    setTimeout(() => {
      setRenderMsgDiv(false)
    } , 2000)
  }


  const RenderSuccessSubsribe = () => {

    const text = subscribeText.current?.value;

    if(!text) {
      setRenderErrorDiv(true);

      setTimeout(() => {
        setRenderErrorDiv(false)
      } , 2000);

      if(subscribeText.current) {
       subscribeText.current.value = ""
      }

      return;
    }

    
    setSuccessSubscribe(true);
    setTimeout(() => {
      setSuccessSubscribe(false)
    } , 2000)


  }



  return (

    <div className="flex flex-col mm:relative">

      <div className="xl:w-full mm:w-screen bg-[url(/Images/banner_img.png)] xl:h-[600px] bg-cover bg-no-repeat py-1">

        <Main_Heading />  

        <Buttons />

      </div>

      <div className="w-full flex flex-col xl:justify-center items-center">

        <div className="xl:w-[30%] mm:w-full flex items-center xl:justify-center mm:justify-normal mt-10">
            <h2 className="p-2 xl:text-4xl mm:text-2xl font-Capra">Browse By Catagory</h2>
        </div>

        <div className="xl:w-[60%] mm:w-full flex justify-center items-center mt-4">
            <p className="p-2 text-[18px] font-Poppins">Explore our wide varity of recipes organized by meal type , cuisine and dietary preferences</p>
        </div>

        <div className="w-full flex justify-evenly items-center mt-10 mb-10">
          <Catagory_Cards />
        </div>

        <div className="xl:w-[30%] mm:w-[70%] flex justify-center items-center mt-5">
          <Image src={construction} className="xl:w-8 xl:h-8 mm:h-5 mm:w-5" alt="Not Working" />
          <p className="font-Capra mm:text-[13px] xl:text-[16px] ml-2">Currently Not Working . Working on it</p>
        </div>

      </div>

      <div className="w-full flex flex-col">

        <div className="w-full flex justify-between items-center mt-20">
          <div className="xl:w-[40%] mm:w-full ml-3">
            <div className="w-full">
              <p className="p-1 xl:text-3xl mm:text-2xl font-Capra">Featured Recipes</p>
            </div>

            <div className="w-full">
              <p className="p-1 font-Poppins">Our most popular and trending recipes</p>
            </div>
          </div>

          {renderMsgDiv && (
            <div className="w-full flex justify-center items-center fixed mm:top-2">
              <div className="xl:w-[8%] mm:w-[35%] bg-[#f2f1ff] flex p-2 border-2 border-[#eeeeee] rounded-2xl">
                  <div className="w-[10%] flex items-center">
                      <Image src={Check} width={50} height={50} alt="Check Image"/>
                  </div>

                  <div className="w-full flex items-center ml-2">
                      <p className="font-Poppins text-blue-400">Link Coppied</p>
                  </div>
              </div>
            </div>
          )}
          
        </div>

        <div className="w-full flex xl:flex-row mm:flex-col justify-evenly items-center my-10">
          <RecipeCards setMsgDiv={handleAlert}/>
        </div>

      </div>

      <div className="w-full bg-[#f2f1ff] flex flex-col mt-10">
        <div className="w-full flex justify-center xl:mt-10 xl:mb-5 mm:my-5">
          <div className="xl:w-[2%] mm:w-[6%]">
            <Image src={email} alt="email" />
          </div>
        </div>

        <div className="w-full flex justify-center mm:items-center">
          <p className="p-2 xl:text-3xl mm:text-[20px] font-Capra">Get Weekly Recipe Inspiration</p>
        </div>

        <div className="w-full flex justify-center">
          <div className="xl:w-[25%] mm:w-[90%] flex justify-center">
            <p className="font-Poppins p-1 text-center">Subscripe to our newsletter and recieve delicious recipes</p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center my-5">
          <div className="xl:w-[30%] mm:w-[70%] flex justify-between items-center">
            <div className="w-[70%]">
              <input type="email" className="w-full border-2 border-[#ebebf0] text-[#5820d7] p-3 rounded-2xl outline-0 bg-white font-Poppins text-[14px]" placeholder="Enter Email Address . . . . ." ref={subscribeText}/>
            </div>

            <div className="xl:w-[20%] mm:w-[25%] bg-[#641bff] rounded-full flex justify-center">
              <button type="button" className="text-white xl:text-[15px] mm:text-[10px] p-2 font-Poppins" onClick={RenderSuccessSubsribe}>Subscribe</button>
            </div>
          </div>

          <div className="xl:w-[30%] mm:w-[70%] flex justify-center items-center mt-8">
            <Image src={construction} className="xl:w-8 xl:h-8 mm:h-5 mm:w-5" alt="Not Working" />
            <p className="font-Capra mm:text-[13px] xl:text-[16px] ml-2">Currently Not Working . Working on it</p>
          </div>
        </div>

        {successSubscribe && (
          <div className="w-full flex justify-center items-center mb-6">
            <div className="w-[14%] bg-[#f2f1ff] flex p-2 border-2 border-[#eeeeee] rounded-2xl">
                <div className="w-[6%] flex items-center">
                    <Image src={Check} width={50} height={50} alt="Check Image"/>
                </div>

                <div className="w-full flex items-center ml-2">
                    <p className="font-Poppins text-blue-400 pl-2">Subscribed Successfully</p>
                </div>
            </div>
          </div>
        )}

        {renderErrorDiv && (
          <div className="w-full flex justify-center items-center mb-6">
            <div className="w-[7%] bg-[#f2f1ff] flex p-2 border-2 border-[#eeeeee] rounded-2xl">
                <div className="w-[13%] flex items-center">
                    <Image src={prohib} width={50} height={50} alt="Prohibited Image"/>
                </div>

                <div className="flex items-center ml-2">
                    <p className="font-Poppins text-blue-400 pl-2">No Text</p>
                </div>
            </div>
          </div>
        )}

      </div>

    </div>

  );

}

