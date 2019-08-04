var expres = require ('express')
var bodyParse = require ('body-parser')

var app = expres ()
app.use(bodyParse.urlencoded({extended:false}))

app.get ('/profile/:id/:name', function (req, res) {
  console.dir (req.params)
  res.send ('这是 主页',)
  // res.send({name:'asdf','Agent':23})
  // var responseObj=[{name:'asdf'},{name:'cx2'}]
  // console.log(`%c---- `, 'color:blue;', req)
  // res.json(responseObj)
})
//正则        todo
app.get ('/ab?cd', function (req, res) {
  res.send ('ab?cd')
})
app.get ('/', function (req, res) {
  // console.log (`%c---- `, 'color:blue;', req.query)
  res.send ('--')
})
app.post ('/', function (req, res) {
  console.dir (req.body)
  res.send (req.body)
})

app.listen (3000)
