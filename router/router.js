const express = require("express");
const router = express.Router();

//calling http://localhost:3000/exercise under middleware in app.js
// Status code 200 is for GET, 201 for POST
router.get("/", (req, res) => {
res.status(200).json({ 
    message: "Successful GET",
    metadata:{
        hostname: req.hostname,
        method:req.method
    },
});
});
// the above pops up in nodemon when using localhost:3000/exercise because in app /exercise has the root router next to it


//http://localhost:3000/exercise/34
router.get("/:id", (req,res) => { // the : declares a variable, the variable is id
    const id = req.params.id
res.status(200).json({
    message: `Successful Get by Id`,
    id: id,
    metadata: {
        hostname: req.hostname,
        method: req.method,
    },
});
});

//assignment additions






module.exports = router;