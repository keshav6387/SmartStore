const mongoose=require("mongoose");

const databaseConnect=async()=>{
    try{

        const database= await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database Connected Successfully on PORT: ${database.connection.port}`)

    }catch(err){
        console.log(err.message)
    }
}

module.exports=databaseConnect