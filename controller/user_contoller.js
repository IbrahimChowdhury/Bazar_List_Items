const { json } = require("body-parser")
let bazar = require("../model/bazar_model")


// get all bazar list
let getAllBazar= async(req,res)=>{
    try {
        let bazars= await bazar.find()
    if(bazars)
    {
        res.status(200).json(bazars)
    }
    else{
        res.status(404).json({message:"bazar not found"})
    }
    } catch (error) {
       res.status(500).json(error.message) 
    }
}



// get single bazar 
let getOneBazar= async(req,res)=>{
    try {
        let id=req.params.id;
        let singleBazar= await bazar.findOne({_id:id})
        if(singleBazar)
        {
            res.status(200).json(singleBazar)
        }
        else
        {
            res.status(404).json({message:"bazar not found"})
        }
    } catch (error) {
        res.status(500).json({message:"something wrong"})
    }
}



// create bazar
let createBazar= async(req,res)=>{
    try {
        let bazaar= bazar({
            title:req.body.title,
            price:req.body.price,
            weight:req.body.weight
        })
        bazaar.save()
        res.status(202).json(bazaar)

    } catch (error) {
        res.status(404).json(error)        
    }
}


// update bazar list
let updateBazar=async(req,res)=>{
    try {
        let id=req.params.id
        let updatedItems =await bazar.findByIdAndUpdate(
            {
                _id:id
            },
            {
                $set:{
                    title:req.body.title,
                    price:req.body.price,
                    weight:req.body.weight
                }
            },
            {
                new:true
            }
        )

        res.status(202).json(updatedItems)
    } catch (error) {
        res.status(404).json(error.message)
    }
}



// delete bazar item
let deleteItem=async(req,res)=>{
    try {
        let id=req.params.id
        let deleteBazar=await bazar.findByIdAndDelete({_id:id})
        res.status(202).json(deleteBazar)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
   

}


module.exports={getAllBazar,createBazar,getOneBazar,updateBazar,deleteItem}