var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  if(req.headers['x-forwarded-proto']!=='https'){
    res.redirect(301, 'https://www.abcdefghijkl.ml'+req.url);
  }  
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})