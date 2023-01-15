let mongoose=require("mongoose")

let bazar_schema= mongoose.Schema({
  title:{
    type:String,
    required:[true,"title name must be added"]
  },
  price:{
    type:Number,
    required:[true,"price must be added"]
  },
  weight:{
    type:String,
    required:[true,"weight must be added"]
  }

})


module.exports=mongoose.model("Bazar_List",bazar_schema)