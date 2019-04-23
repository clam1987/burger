let express = require("express");
let bodyParser = require("body-parser");

let PORT = process.env.PORT || 1230;
let app = express();

//Serves content from views folder
app.use(express.static("view"))

//parse application
app.use(bodyParser.urlencoded({extended: true}));

//parse json
app.use(bodyParser.json());

// Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes
let routes = require("./controllers/burgers_controller");

app.use(routes);

//Start our server so that it can listen to client requests
app.listen(PORT, function() {
    //log when server is started
    console.log("Server listening on: http//localhost:" + PORT);
})