//require("dotenv").config({path: "./.env"})  ---this is the old but simple way to load env variables---
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from "./app.js"

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.error("Error starting the server:", error)
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
    console.log("Database connection established, you can start your server here.")
    // You can start your server here, for example:
    // app.listen(process.env.PORT, () => {
    //     console.log(`Server is running on port ${process.env.PORT}`)
    // })
})
.catch((error) => {
    console.error("Failed to connect to the database:", error)
    process.exit(1) // Exit the process with an error code
})











// import express from "express"
// const app = express()

// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log("Connected to MongoDB successfully")
//         app.on("error", (error) => {
//             console.error("Error starting the server:", error)
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })


//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error)
//         throw error
//     }
// })()