let config=require("./config")
let URL=config.db.Url
let mongoose =require("mongoose")

mongoose.connect(URL)
.then(()=>{
    console.log("mongodb Atlas is connected")
})
.catch((error)=>{
    console.log(error)
})

