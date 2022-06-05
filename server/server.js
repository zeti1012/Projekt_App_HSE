require("dotenv").config();
const express = require("express");
const cors = require('cors');
const router = require("./routes")

const app = express();

app.use(cors());
app.use(express.json(),router);

// Value of port is stored in environment variable File .env
const port = process.env.PORT || 3002;
app.listen(port,() =>{
    console.log(`server is up and listening on pot ${port}`)
});