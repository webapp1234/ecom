require("dotenv").config();
let http = require("http");
let express = require("express");
const dbConnect = require("./db/dbConnect");
const routes = require("./routes");
let cors = require("cors");

let app = express();

//json body
app.use(express.json());

//cross origin resource sharing
app.use(cors());

//template engine
app.set("view engine", "ejs");

//ejs routes
app.get("/", (req, res) => {
  let name = "User";
  res.render("index", { name });
});

app.get("/about", (req, res) => {
  res.render("about");
});

//routes
app.use("/v1", routes);

//database connection
dbConnect();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT} `);
});
