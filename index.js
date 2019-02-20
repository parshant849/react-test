var express = require('express')
var http = require("http");
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.writeHead(302,  {Location: "https://www.abcdefghijkl.ml"})
  // response.end();
  // if(request.headers['x-forwarded-proto']!=='https'){
  //   request.redirect(301, 'https://www.abcdefghijkl.ml'+request.url);
  // }  
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})