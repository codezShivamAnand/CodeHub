const express = require('express');
const app = express();
require ('dotenv').config();
const main = require('./config/db')
const cookieParser = require ('cookie-parser');
const authRouter = require("./routes/userAuth");

app.use(express.json());// to convert json -> js obj
app.use(cookieParser());

main()
.then(async ()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("server listening at port number: " + process.env.PORT);
    })
})
.catch(err=> console.log("Error Occurred: " + err));
