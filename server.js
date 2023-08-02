const http = require("http"); 
const app = require("./app/app");
require('dotenv').config(); //uses information in .env file

//Create server to wait and listen for a request and respond
http.createServer(app).listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`)
});