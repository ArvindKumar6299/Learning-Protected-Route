const express = require("express");

const router = express.Router();


router.get("/dashboard", (req,res)=>{
    res.status(200).json({message: "Welcome to the protected dashboard!"});
})



module.exports = router;