const express=require("express")
const dotenv=require("dotenv")
const path = require("path")
const productRoutes=require("./routes/productRoutes")

dotenv.config({path:"backend/config/.env"})

const app=express()

app.use(express.json())


app.use("/api/v1",productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})