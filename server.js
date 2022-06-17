//require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');
const router = require("./routes");
const { PORT, CLIENT_URL } = require("./constants");
const cookieParser = require('cookie-parser')
const passport = require('passport')
const path = require('path')



require('./middleware/passport-middleware')

app.use(express.json(),cookieParser());
app.use(cors({origin:CLIENT_URL,credentials: true}));
app.use(passport.initialize())

if(process.env.NODE_ENV === "production"){
    //serve static content from a directory we specified, in this case the content of the build folder from client folder
    //absolut path
    
    app.use(express.static(path.join(__dirname, "client/build"))) //dirname: supplies the piece of path before client/build
}

const {cookie} = require('express-validator')

app.use(router)


// Value of port is stored in environment variable File .env

app.listen(PORT,() =>{
    console.log(`server is up and listening on pot ${PORT}`)
});