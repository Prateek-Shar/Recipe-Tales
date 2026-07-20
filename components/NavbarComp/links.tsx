"use client"

import Link from "next/link";
import Image from "next/image";
import blog from "@/public/Images/blog.png"
import { useRef } from "react";

const Links = () => {

    const blogBorder = useRef<HTMLDivElement>(null)

    const change = () => {

        if(blogBorder.current) {
            blogBorder.current.style.borderBottomColor = "#16a34a";
        }
    }

    const defaultColor = () => {
        if(blogBorder.current) {
            blogBorder.current.style.borderBottomColor = "#364153";
        }
    }

    return (

        <div className="xl:w-[8%] mm:w-[18%] flex justify-center items-center xl:ml-30 mm:ml-0">
            <div className="xl:w-[70%] mm:w-full flex justify-center hover:cursor-pointer border-b-2 border-gray-700 rounded-full" ref={blogBorder} onMouseEnter={change} onMouseLeave={defaultColor}>
                <div className="w-[20%] xl:flex mm:hidden items-center xl:ml-3 mm:ml-1">
                    <Image src={blog} alt="Blog Iamge" />
                </div>

                <div className="w-[70%]">
                    <Link className="font-Poppins xl:pl-3 mm:pl-0" href="/blogs">Blogs</Link>
                </div>
            </div>
        </div>
    )
}


export default Links;