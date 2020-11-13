const express = require('express');
const app = express();
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

app.listen(5000);

var config = {
    server: 'localhost',    //asdfsdafsdfsthe IP of the machine where SQL Server runs
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', // update me
            password: 'masterkey', // update me
        }
    },
    options: {
        encrypt: false,
        database: 'AbonentPlus',  //the username above should have granted permissions in order to access this DB.
    }
}

var connection = new Connection(config);
connection.on('connect', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected');
    }
})

app.get('/', function (req, res) {
    res.send('Hello World!')
});






