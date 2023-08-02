const express = require("express");
const assignmentRouter = express.Router();

assignmentRouter.get("/", (req,res)=>{
    res.status(200).json({
        message: "Successful GET",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
});

assignmentRouter.get("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: "Successful GET by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
});

assignmentRouter.patch("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: "Successful PATCH by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
});

assignmentRouter.delete("/:id", (req,res)=>{
    const id = req.params.id
    res.status(200).json({
        message: "Successful DELETE by ID",
        id: id,
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
});

assignmentRouter.post("/", (req,res)=>{
    res.status(200).json({
        message: "Successful POST",
        metadata: {
            hostname: req.hostname,
            method: req.method
        }
    })
});

module.exports = assignmentRouter