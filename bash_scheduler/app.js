let express = require("express");
let http = require("http");
let nodemon = require("nodemon");
let path = require("path");
let jquery = require("jquery");
var fs = require("fs");
let bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/statics", express.static(path.join(__dirname, "statics")));
app.use("/views", express.static(path.join(__dirname, "views")));
app.get("/", (req, res) => res.render("index"));
app.get("/schedule", (req, res) => res.render("schedule"));

function handleRedirect(req, res) {
	console.log("Returning to index page....");
	res.redirect("/");
}

// file name (w/o extension in 'name'
app.put("/read", function(req, res) {
	console.log("READ");
	console.log(req.body);

	let file_name = "data/" + req.body.name + ".json";
	fs.readFile(file_name, function(err, data) {
		if (err) throw err;
		res.send(JSON.parse(data));
	});
});

// file name (w/o extension in 'name'
// json data in 'data'
app.put("/write", (req, res) => {
	console.log("WRITE");
	console.log(req.body);

	let file_name = "data/" + req.body.name + ".json";
	let data = JSON.stringify(req.body.data);
	fs.writeFile(file_name, data, err => {
		if (err) throw err;
		console.log("Data written to " + file_name);
		res.send("Successful write")
	});
});

// app.get("/test", function(req, res) {
// 	console.log("\n *START* \n");

// 	let data = read_file("data.json");
// 	console.log("User Name:", data.username);
// 	console.log("Email:", data.email);
// 	console.log("Password:", data.password);

// 	console.log("Returning to index page....");
// 	res.redirect("/");
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));
