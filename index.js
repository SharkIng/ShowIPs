const request = require('request')
const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res) {
  var ips = request('http://ipinfo.io', function(error, ipinfo_res, body) {
    res.render('index', { title: "Check Your IP Address.", message: JSON.parse(body)})
  })
})

app.get('/:ip', function(req, res) {
  var ips = request('http://ipinfo.io/'.concat(req.params.ip), function(error, ipinfo_res, body) {
    res.render('index', { title: "Check Your IP Address..", message: JSON.parse(body)})
  })
})

app.listen(3000)