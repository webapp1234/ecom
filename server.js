require("dotenv").config();
let http = require("http");
let express = require("express");
const dbConnect = require("./db/dbConnect");

let app = express();

//json body
app.use(express.json());

//database connection
dbConnect();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT} `);
});
