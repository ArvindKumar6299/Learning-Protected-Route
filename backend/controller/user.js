const User = require("../models/user");
const jwt = require("jsonwebtoken")
const secretKey = process.env.JWT_SECRET || "Arvind121";
const bcrypt = require("bcrypt");


const SignUp = async(req,res) =>{
    // console.log("Request body: ", req.body); //log incoming request data
   const {name,email,password} = req.body; //extracting user data from request body
   //hashing the passward before saving to data base 
   const hashedPassword = await bcrypt.hash(password, 10);

   try {

    const user = new User({name,email,password:hashedPassword}); //creating new user document
    console.log("User Document: ", user);  // log user object
    await user.save();     //saving user inside database
    
    res.status(201).json({message:"user registered  successfully",success:true});
   } catch (error) {
      res.status(400).json({message: 'error in register user'},error);
      console.log("signup err");
   }
}

const login = async(req,res)=>{
    

    try {
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({ message:"invalid credential",error});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
       //This is a bcrypt function used to compare the plain text password (password) with the hashed password (user.password).Internally, bcrypt:Hashes the plaintext password again using the same salt stored in the hash.Compares the newly hashed password with the stored hash
        if(!passwordMatch){
            return res.status(401).json({error: 'authentication failed try again'})
        }
    
        const token = jwt.sign({id: user._id}, secretKey);
        
        console.log("token after login",token);

        // return res.cookie("tokValue", token);
         
         res.cookie('token', token,{
            httpOnly: false,
            secure: false,
         });
         res.status(200).json({message:"user logged in successfully",success:true});
        // return res.status(201).json({message:"user logged in successfully", success:true});
       
    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({message:'Error in login', error});
    }
}



module.exports = {SignUp, login};