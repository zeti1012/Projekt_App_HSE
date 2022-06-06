//require("dotenv").config();
const express = require("express");
const cors = require('cors');
const router = require("./routes");
const { PORT, CLIENT_URL } = require("./constants");

const app = express();

app.use(cors({origin:CLIENT_URL,credentials: true}));
app.use(express.json(),router);

// Value of port is stored in environment variable File .env

app.listen(PORT,() =>{
    console.log(`server is up and listening on pot ${PORT}`)
});