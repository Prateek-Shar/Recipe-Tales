import Link from "next/link";
import Image from "next/image";
import blog from "@/public/Images/blog.png"

const Links = () => {

    return (

        <div className="w-[8%] flex justify-center items-center ml-30">
            <div className="w-[70%] flex justify-center hover:cursor-pointer border-b-2 border-gray-500 rounded-full">
                <div className="w-[20%] flex items-center ml-3">
                    <Image src={blog} alt="Blog Iamge" />
                </div>

                <div className="w-[70%]">
                    <Link className="font-Poppins pl-3 text-white" href="/blogs">Blogs</Link>
                </div>
            </div>
        </div>
    )
}


export default Links;