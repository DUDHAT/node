const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({path:'config.env'})

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

const ejs = require("ejs");

//set view engine
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
})

const studRouter = require("./rout");
app.use("/student",studRouter);




const port = process.env.PORT || 1234
app.listen(port,()=>console.log(`server listing ${port}`));

//fallback function
app.use("/",(req,res)=>res.send("NO Page"));