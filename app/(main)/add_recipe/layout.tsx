const Layout  = ({children} : {children : React.ReactNode}) => {

    return (
        <html lang="en">
            <body>

            <div className="w-full flex flex-col">

                <div className="w-full">
                    {children}
                </div>
                
            </div>

            </body>
        </html>
    )
}

export default Layout;