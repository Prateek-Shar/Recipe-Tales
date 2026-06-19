import mongoose from "mongoose"

const Connect = async() => { 

    const db_url = process.env.NEXT_PUBLIC_DB

    try {

        if (!db_url) {
            throw new Error("Database connection URL is missing in environment variables.");
        }

        await mongoose.connect(db_url , {
            dbName : "Recipe"
        })

        console.log(`DB Connected successfully`)
    }

    catch(error) {
        console.log("Error : " , error)
    }

}


export default Connect;