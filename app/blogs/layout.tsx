const Layout = ({children , cards , cardsTwo} : {children:React.ReactNode , cards:React.ReactNode , cardsTwo:React.ReactNode}) => {

    return (
        <html lang="en">
            <body>

                <div className="w-full">
                    {children}
                </div>

                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-[75%] mt-15 mb-20">
                        {cards}
                    </div>

                    <div className="w-[85%] mt-5 mb-35">
                        {cardsTwo}
                    </div>
                </div>

            </body>
        </html>
    )
}

export default Layout;