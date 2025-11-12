import email from "@/public/Images/email.png";
import contact from "@/public/Images/contact.png"
import Image from "next/image";

const Footer_Contact = () => {

    return (
        <div className="w-[25%]">

            <div className="w-full flex items-center">
                <p className="p-1 font-Capra text-[#d9d9d9] text-2xl">Contact Us</p>
            </div>

            <div className="w-full flex flex-col mt-6">
                <div className="w-[40%] flex items-center">
                    <div className="w-[15%] flex items-center">
                        <Image src={email} alt="Email" className="p-1" />
                    </div>

                    <div className="w-[85%] flex items-center  p-1">
                        <p className="font-Poppins text-[#6a7282]">abc@gmail.com</p>
                    </div>
                </div>

                <div className="w-[40%] flex  mt-2">
                    <div className="w-[15%] flex items-center">
                        <Image src={contact} alt="Email" className="p-1"/>
                    </div>

                    <div className="w-[85%] p-1">
                        <p className="font-Poppins text-[#6a7282]">+91-xxxxx000000</p>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Footer_Contact;