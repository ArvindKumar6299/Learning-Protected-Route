const express = require("express");
const router = require("./routes/user")
const mongoose = require("mongoose");
const cors = require("cors"); // importing the cors middleware
const cookieParser = require("cookie-parser");
const userVerification = require("./middleware/authMiddleware");

const app = express();


const URI = "mongodb://127.0.0.1:27017/blogsite";

 const dbConnect = async ()=>{
  try {
    await mongoose.connect(URI, {
      // useNewUrlParser: true, // Ensures the new URL parser is used
      // useUnifiedTopology: true, // Use the new topology engine
    });
    console.log("database connection established")
  } catch (error) {
    console.log("Unsuccessful database connection",error);
  }
}
// const routes = express.Router();
// async function dbConnect(){
//   try {
//     await mongoose.connect(URI );
//     console.log("database connection established")
//   } catch (error) {
//     console.log("Unsuccessful database connection",error);
//   }
// }
dbConnect();

app.use((req, res, next) => {
  console.log('Request Origin:', req.headers.origin);
  next();
});

app.use(express.json());
app.use(cookieParser());




app.use(cors({
    origin: ' http://localhost:5173',
    methods: ["GET","POST","PUT", "DELETE"],
    credentials: true,
})); //CORS middleware is being used to handle cross-origin requests, allowing the server to specify which domains are allowed to access resources. In this case, you're setting up CORS to allow requests from http://localhost:5716 ,
//credentials: true option indicates that cookies or authorization headers can be included with the requests.


app.use("/auth",router);  // public route

app.use(userVerification);

app.get("/", (req,res)=>{
  res.json({message: "You are at home page"});
});
app.get("/dashboard", (req,res)=>{
  res.status(200).json({name: req.user.name , email:req.user.email});
})

app.get("/protected",(req, res) => {
  res.json({ message: "You are authenticated!" });
})

app.use("/test", (req, res) => {
  res.status(200).json({ message: "Middleware worked!", userId: req.userId });
});



app.listen(9000, (err)=>{
   if(err) console.log(err + "server not created");
   console.log("server is running !");
})