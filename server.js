var express       = require("express"),
mongoose          = require("mongoose"),
app               = express(),
bodyParser        = require("body-parser"),
Product           = require("./models/product"),
seedDB            = require("./public/seeds");

var url = process.env.DATABASEURL || "mongodb://localhost/surfin";
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
seedDB();

// CORS support
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET', 'PUT', 'POST', 'DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// root route (landing page)
app.get("/", function(req, res){
    res.render("landing.html");
});

// shop
app.get("/main", function(req, res){
  res.render("index.html");
});

// search results
app.get("/search", function(req, res){
  Product.find({}, function(err, allProducts){
    if (err){
      console.log(err);
    } else {
    res.json(allProducts);
    }
  });
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Surfin on the server...");
});
