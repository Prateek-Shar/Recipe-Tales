import Image from "next/image";
import not from "@/public/Images/not_found.png"


const error_page = () => {

    return (

        <div className="w-full h-screen flex flex-col justify-center items-center bg-[#e4e9ec]">
            
            <div className="w-[40%] flex justify-center">
                <Image src={not} alt="Not Found Image" />
            </div>

            <div className="w-[50%] flex justify-center mt-5">
                <h1 className="font-Capra text-4xl">Requested resource was not found</h1>
            </div>

        </div>

    )
}



export default error_page;


