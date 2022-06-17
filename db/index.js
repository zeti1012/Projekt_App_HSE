/*const {Pool} =require("pg");

// PG-Liabriary automatically looks for the environment variables which are used to connect to the database

const pool = new Pool()

module.exports = {
    query: (text, params) => pool.query(text,params),
}
*/
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
}
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig,
);

module.exports = pool;

