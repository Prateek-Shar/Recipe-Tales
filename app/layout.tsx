import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/NavbarComp/header_main";
import Footer from "@/components/Footer/footer_main";


export const metadata : Metadata = {
  title : "Recipe Book",
  description : "EBook of Recipes",
  icons : "/Images/logo.png"
}


const RootLayout = ({children}: {children: React.ReactNode}) => {


  return (
    
    <html lang="en">
      <body>

        <Header />

        {children}  

        <Footer />
      </body>

    </html>
  );
}



export default RootLayout;
