const express = require('express');
var body_parser = require('body-parser');
const app = express();
app.listen(3000);
app.use(express.static('public'));
app.use(body_parser.json())
app.use(body_parser.urlencoded({extended: true}))

app.post("/user",function (request, response) {
    
    if(!request.body) return response.sendStatus(400);

    let user = request.body;

    if (request.headers["user-agent"] == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36") {
        response.json([user.name,user.phonenumber]);

    }else {
        response.json("Only Chrome!!!")
    }
});
  
app.get("/user", function(request, response){
    if (request.headers["user-agent"] == "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36") {
    response.sendFile(__dirname + "/public/index.html");
    }else {
    response.json("Only Chrome!!!")
    }
});