let express=require("express")
let app=express()
let cors=require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let user_router=require("./router/router")
app.use(user_router)

require("./config/connectDB")







// home page
app.get("/",(req,res)=>{
    res.send("this is home page")
})

module.exports=app