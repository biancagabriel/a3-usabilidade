var express = require("express"); //framewok para request http
var http = require("http");
var path = require("path")


var app = express();
var server = http.createServer(app); // criar server


app.use('/css', express.static('css'))
app.use('/main.js', express.static('main.js'))

//server ouvindo
server.listen(3331, function(){
    console.log("Servidor pronto para requisiçoes na porta 3331.")
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});


