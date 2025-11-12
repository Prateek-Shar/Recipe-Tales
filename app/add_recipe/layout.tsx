const Layout  = ({children} : {children : React.ReactNode}) => {

    return (
        <html lang="eng">
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