var express = require('express')
var config = require('./config')
var port = process.env.PORT || config.build.port
var app = express()
var route = express.Router()
route.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})
app.use(route)
let apiData = require('./data.json')
let seller = apiData.seller
let goods = apiData.goods
let ratings = apiData.ratings
let apiRouter = express.Router()
apiRouter.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
})
apiRouter.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
})
apiRouter.get('/ratings', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
})
app.use('/api', apiRouter)
app.use(express.static('./dist'))
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listen at http://localhost:' + port + '\n')
})
