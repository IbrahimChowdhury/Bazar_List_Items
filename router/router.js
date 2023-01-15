const { getAllBazar, createBazar, getOneBazar, updateBazar, deleteItem } = require("../controller/user_contoller")


let router = require("express").Router()

router.get("/api/user",getAllBazar)
router.post("/api/user",createBazar)
router.get("/api/user/:id",getOneBazar)
router.patch("/api/user/:id",updateBazar)
router.delete("/api/user/:id",deleteItem)

module.exports=router


