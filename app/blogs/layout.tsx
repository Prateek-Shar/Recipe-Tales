"use client"

import { useEffect, useRef, useState } from "react";
import Cards from "./@cards/page";
import CardsTwo from "./@cardsTwo/page";

const Layout = ({children , cards , cardsTwo} : {children:React.ReactNode , cards:React.ReactNode , cardsTwo:React.ReactNode}) => {

    const [stepNum , setStepNum] = useState<number>(1)
    const [firstDiv , setFirstDiv] = useState<boolean>(true)
    const [secondDiv , setSecondtDiv] = useState<boolean>(false)

    const Second_card = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(stepNum == 2) {
            setFirstDiv(false)
            setSecondtDiv(true)
        }

        else {
            setFirstDiv(true)
            setSecondtDiv(false)
        }
    } , [stepNum])


    const reset = () => {
        setStepNum(prev => prev - 1);
    }

    return (
        <>
            {/* <div className="w-full xl:flex mm:hidden">
                {children}
            </div>

            <div className="w-full xl:flex xl:flex-col mm:hidden justify-center items-center flex-col">
                <div className="w-[75%] mt-15 mb-20">
                    {cards}
                </div>

                <div className="xl:flex xl:flex-col mm:hidden w-[85%] mt-5 mb-35">
                    {cardsTwo}
                </div>
            </div> */}
        
            <div className="w-full">
                {children}
            </div>

            <div className="w-full xl:hidden mm:flex justify-center items-center flex-col">
                {firstDiv && (
                    <div className="w-[75%] xl:flex mt-15 mb-20">
                        <Cards stepCount={stepNum} setStepCount={setStepNum} />
                    </div>
                )}

                {secondDiv && (
                    <div className="w-[85%]  mt-5 mb-35" ref={Second_card}>
                        <CardsTwo OnBack={reset}/>
                    </div>
                )}
            </div>

            <div className="w-full xl:flex mm:hidden justify-center items-center flex-col">
                <div className="w-[75%] xl:flex mt-15 mb-20">
                    <Cards />
                </div>

        
                <div className="w-[85%]  mt-5 mb-35" ref={Second_card}>
                    <CardsTwo />
                </div>
            </div>
        </>
           
        
    )
}

export default Layout;