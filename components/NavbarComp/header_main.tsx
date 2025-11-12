import Links from "@/components/NavbarComp/links"
import NavbarHeading from "@/components/NavbarComp/heading";
import SearchBar from "@/components/NavbarComp/search";

const Header = () => {

    return (

        <div className="w-full bg-[#1a212d] flex justify-between items-center p-2">

            <NavbarHeading />

            <Links />

            <SearchBar />

        </div>
    )   
}


export default Header;