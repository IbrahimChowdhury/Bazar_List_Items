require("dotenv").config()

let dev = {
    app:{
        port:process.env.PORT || 4000
    },
    db:{
        Url:process.env.DB_URL 
    }
}


module.exports=dev