import Image from "next/image";
import navbar_logo from "@/public/Images/logo.png"
import Link from "next/link";

const NavbarHeading = () => {

    return (

        <>

        <div className="xl:w-[10%] mm:w-[12%] flex xl:ml-10 mm:ml-0">
            <div className="xl:w-[25%] mm:w-full p-1" >
                <Image src={navbar_logo} alt="Logo Image" />
            </div>

            <div className="w-[75%] xl:flex mm:hidden items-center">
                <p className="pl-2 font-Capra xl:text-2xl mm:text-[16px] cursor-default">TastyTales</p>
            </div>
        </div>

        </>
    )
}

export default NavbarHeading;