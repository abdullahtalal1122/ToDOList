const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
var items = [];
app.get("/",function(req,res){

var today = new Date();
var currentDay = today.getDay();
var day="";

switch(currentDay){
    case 0:
        day = "Sunday";
    break;
    case 1:
        day = "Monday";
    break;
    case 2:
        day = "Tuesday";
    break;
    case 3:
        day = "Wednesday";
    break;
    case 4:
        day = "Thuesday";
    break;
    case 5:
        day = "Friday";
    break;
    case 6:
        day = "Saturday";
    break;
}

 res.render("list",{kindOfDay:day,newItems:items});

//zres.send("Hello");
});

app.get("/about",function(req,res){
    res.render("about");
})
app.post("/",function(req,res){

    var num = req.body.num1;
    items.push(num);
    res.redirect("/");
});




app.listen(3000,function(req,res){
    console.log("The Server is running ");
});
