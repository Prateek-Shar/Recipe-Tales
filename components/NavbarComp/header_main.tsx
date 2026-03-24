import Links from "@/components/NavbarComp/links"
import NavbarHeading from "@/components/NavbarComp/heading";
import SearchBar from "@/components/NavbarComp/search";

const Header = () => {

    return (

        <div className="w-full bg-[#f8f5f2] flex justify-between items-center p-2 border-b-[#2d2d2d]">

            <NavbarHeading />

            <Links />

            <SearchBar />

        </div>
        
    )   
}


export default Header;