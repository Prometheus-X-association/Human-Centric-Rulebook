const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require('dotenv')

const webapp = require("./routes/webapp");
// API
const authenticate = require("./routes/authenticate");
const blockchain = require("./routes/blockchain");
const contracts = require("./routes/contracts");
const datasets = require("./routes/datasets");
const datatypes = require("./routes/datatypes");
const purposes = require("./routes/purposes");
const services = require("./routes/services");
const termsOfUse = require("./routes/termsOfUse");
const resources = require("./routes/odrlResources");

dotenv.config();

const connectDB = require('./config/db.js') ;
connectDB().connection;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.set("views", [
  path.join(__dirname, "views"),
]);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public/")));

app.use('/', webapp);

const api = process.env.API_URL;

// Endpoints
app.use(`${api}/authenticate`, authenticate);
app.use(`${api}/blockchain`, blockchain);
app.use(`${api}/contracts`, contracts);
app.use(`${api}/datatypes`, datatypes);
app.use(`${api}/datasets`, datasets);
app.use(`${api}/purposes`, purposes);
app.use(`${api}/services`, services);
app.use(`${api}/termsofuse`, termsOfUse);
app.use(`${api}/resources`, resources);

const port = process.env.PORT || 4050;
app.listen(port, () => {
  console.log("App running on port: " + port);
});
