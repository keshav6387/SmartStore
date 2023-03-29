const express=require("express")
const dotenv=require("dotenv")
const path = require("path")
const productRoutes=require("./routes/productRoutes")
const databaseConnect = require("./config/db")
const ErrorMiddleware=require("./middleware/error")

process.on('uncaughtException',(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting down the server due to uncaught Exception")
    process.exit(1)

})

dotenv.config({path:"backend/config/.env"})
databaseConnect()

const app=express()

app.use(express.json())


app.use("/api/v1",productRoutes)

app.use(ErrorMiddleware)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})

process.on('unhandledRejection',(err)=>{
    console.log(`Error : ${err.message}`)
    console.log("Shutting down the server due to unhandled promise rejection")

    server.close(()=>{
        process.exit(1)
    })
})