const express=require("express");
const bodyParser=require("body-parser");
const axios=require("axios");

// config
require("dotenv").config();
const app=express();
const port=process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`server is running on port number ${port}`);
})
