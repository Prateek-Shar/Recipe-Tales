"use client"

import Link from "next/link"

interface links {
    Home? : () => void
    Recipes? : () => void
}


const Footer_Links:React.FC<links> = ({Home , Recipes}) => {


    return (
        
        <div className="w-[25%] flex flex-col">
            <div className="w-full">
                <p className="p-1 font-Capra text-[#d9d9d9] text-2xl">Quick Links</p>
            </div>

            <div className="w-full flex flex-col mt-4">
                <div className="w-[30%] hover:cursor-pointer">
                    <Link className="p-1 font-Poppins text-[#6a7282] hover:text-white" href="/">Home</Link>
                </div>

                <div className="w-[30%] mt-3 hover:cursor-pointer">
                    <Link className="p-1 font-Poppins text-[#6a7282] hover:text-white" href="/blogs">Blogs</Link>
                </div>

                <div className="w-[30%] mt-3 hover:cursor-pointer">
                    <Link className="p-1 font-Poppins text-[#6a7282] hover:text-white" href="/">Recipes</Link>
                </div>
            </div>
        </div>
    )
}



export default Footer_Links;