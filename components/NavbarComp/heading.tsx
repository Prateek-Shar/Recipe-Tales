import Image from "next/image";
import navbar_logo from "@/public/Images/logo.png"
import Link from "next/link";

const NavbarHeading = () => {

    return (

        <>

        <div className="w-[10%] flex ml-10">
            <div className="w-[25%] p-1" >
                <Image src={navbar_logo} alt="Logo Image" />
            </div>

            <div className="w-[75%] flex items-center">
                <p className="pl-2 font-Capra text-2xl text-white">TastyTales</p>
            </div>
        </div>

        </>
    )
}

export default NavbarHeading;