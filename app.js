var express = require("express"),
    app     = express();
var port = process.env.PORT|| 3000;
app.set("view engine","ejs");
//app.use(express.static(_dir="/public"));

app.get("/",function(req,res){
   res.render("home"); 
});

app.get("/about",function(req,res){
   res.render("about"); 
});
app.get("/projects",function(req,res){
   res.render("projects"); 
});
console.log(port);
app.listen(port,function(){
   console.log(`server started `); 
});