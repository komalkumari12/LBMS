const router=require('express').Router()
const authorized=require('../middleWare')

router
.get('/private',authorized,(req,res)=>{
    res.send("private data")
    console.log(req.body)
})

module.exports=router