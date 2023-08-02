const express = require("express");
const router = require("../router/router");
const app = express(); //documentation states to call express in order to use request listener, takes request and give response, request listener is app

// create middleware and use to parse json payloads into ourt request model
app.use(express.json()); //documentation says to do this
//req.body.username req.body.password

// service actuator - calling local host 3000
app.get("/", (req, res) => {
res.status(200).json({message:"service is up"}) // this message comes up in nodeman when localhost:3000 is put in for GET in nodemon
});

// use middleware to define router
app.use("/exercise", router); // can only have one contex going to one router

// use middleware catch bad urls/paths/errors
app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status = 404; //RIGHT HERE!! Changed from error.status(404)
    next(error);
});

app.use((error, req, res,next)=>{
    res.status(error.status || 500).json({
        error: {
            message: error.message, //shows us what is wrong in json form i.e error.status is not a function
            status: error.status
        }
    })
});

module.exports = app;