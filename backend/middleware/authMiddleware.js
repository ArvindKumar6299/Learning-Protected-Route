const jwt = require("jsonwebtoken");
const User = require("../models/user");
const secretKey = process.env.JWT_SECRET ||"Arvind121";



function userVerification(req,res,next){

    
    console.log("hekloo skdhf")
    
    const tokenValue = req.cookies.token; 
    console.log("tokenValue: ", tokenValue);
  
    if(!tokenValue){
        return res.json({message: "token is not provied during user verification"}) //If the token is missing, the function immediately returns a response indicating unauthorize
        // console.log("Token is not provided during user verification")
        // return next(); //// Call next() if no token, to avoid blocking the request.
    }

      // Log the retrieved token value
      console.log("Retrieved Token:", tokenValue);
    try {
        const decoded =  jwt.verify(tokenValue,secretKey);
        req.user = decoded;  //attact the user info to the request object
          // Log the decoded user information
          console.log("Decoded Token Payload:", decoded);

          next(); //proceed to the next middleware or route handler.
    
    } catch (error) {
        // return next();
        return res.status(403).json({message: "Invalid token",error});
    }

}
   

module.exports = userVerification;

// function verifyToken(req,res,next){ 
//     //Purpose: Ensures only authenticated users can access protected routes.
//     //The token is being extracted from the Authorization header of the incoming HTTP request.

//     const authHeader = req.headers['authorization']; //get the token from header
//     const token = authHeader && authHeader.split('')[1];

//     if(!token) return res.status(401).json({error: 'Access denied no token provided!'})

//      try {
//        const decoded = jwt.verify(token, secretKey);// The token is verified in this line using the jsonwebtoken (jwt) library, which checks if the provided token is valid and not tampered with
//        req.user = decoded; //attach user info to the request object
//     //  req.user = {userId: decoded.userId, email: decoded.email};
//        next();   
//      } catch (error) {
//         return res.status(403).json({error: "invalid token", error});
//      }   
// }

// module.exports = userVerification;