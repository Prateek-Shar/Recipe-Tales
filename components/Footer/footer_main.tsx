import Footer_Links from "@/components/Footer/footer_links";
import Footer_Intro from "@/components/Footer/footer_intro";
import Footer_Contact from "@/components/Footer/footer_contact";


const Footer = () => {

    return (
        
        <div className="w-full bg-[#1a212d] flex xl:flex-row mm:flex-col justify-evenly xl:p-15 mm:p-10">

          <Footer_Intro />

          <div className="xl:flex mm:hidden xl:items-center">
              <div className="w-0.5 h-25 bg-[#d9d9d9]" />
              {/* <hr className="xl:hidden w-full h-[3px] bg-[#d9d9d9] my-10" /> */}
          </div>

          <Footer_Links />

          <div className="xl:flex mm:hidden xl:items-center">
              <div className="w-0.5 h-25 bg-[#d9d9d9]" />
          </div>

          <Footer_Contact />

        </div>

    )
}



export default Footer;