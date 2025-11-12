import Footer_Links from "@/components/Footer/footer_links";
import Footer_Intro from "@/components/Footer/footer_intro";
import Footer_Contact from "@/components/Footer/footer_contact";


const Footer = () => {

    return (
        
        <div className="w-full bg-[#1a212d] flex justify-evenly p-15">

          <Footer_Intro />

          <div className="xl:flex xl:items-center">
              <div className="w-0.5 h-25 bg-[#d9d9d9]" />
          </div>

          <Footer_Links />

          <div className="xl:flex xl:items-center">
              <div className="w-0.5 h-25 bg-[#d9d9d9]" />
          </div>

          <Footer_Contact />

        </div>

    )
}



export default Footer;