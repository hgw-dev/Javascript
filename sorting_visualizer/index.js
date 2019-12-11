let express = require("express");
let nodemon = require("nodemon");
let path = require("path");

const app = express();
const port = 3000;
app.set("views", path.join(__dirname, "/views"));
// app.set("view engine", "pug");
app.use("/statics", express.static(path.join(__dirname, "statics")));

app.use(express.static('statics'))
app.use("/views", express.static(path.join(__dirname, "views")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname+'/views/project.html')));

app.listen(port, () => console.log(`Listening on port ${port}!`));
