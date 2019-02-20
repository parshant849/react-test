const express = require('express');
const app = express();
const fs = require('fs');

app.get('/users', (req, res) => {
    
    res.send('I will give you users');
})
app.get('*', (req, res) => {
    console.log(req.headers.host);
    req.headers.host = '127.0.0.0.1:3001'
    // if(req.hostname === 'localhost') {
    //     res.redirect('http://127.0.0.1:3001');
    //     return;
    // };
    res.send('Helo');
})

app.listen('/tmp/nginx.socket', function () {
    fs.openSync('/tmp/app-initialized', 'w');
    console.log('app started');
})
