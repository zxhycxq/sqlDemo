var expres = require ('express')
var bodyParse = require ('body-parser')
var fs = require ('fs')
var multer = require ('multer')
var ejs = require('ejs');
var path = require("path");
// var upload = multer ({dest: 'uploads/'})
//app.use(express.static(__dirname + '/public'));
var app = expres ()
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
var createFolder = function (folder) {
  try {
    fs.accessSync (folder)
  } catch (err) {
    fs.mkdirSync (folder)
  }
}
var uploadFolder = './upload'

createFolder (uploadFolder)
var storage = multer.diskStorage ({
  destination: function (req, file, cb) {
    cb (null, uploadFolder)
  },
  filename: function (req, file, cb) {
    console.log (`%c--file.name-- `, 'color:blue;', file.name)
    // cb (null, file.fieldname + '-' + Date.now ())
    cb (null, file.originalname)
  }
})
var upload = multer ({storage: storage})

// app.use(bodyParse.urlencoded({extended:false}))
// app.use(bodyParse.json())

var jsonParser = bodyParse.json ()
var urlencodeParser = bodyParse.urlencoded ({extended: false})
app.get ('/', function (req, res) {
  
  res.send (req.body)
})
/*
app.get ('/profile/:id/:name', function (req, res) {
  console.dir (req.params)
  res.send ('这是 主页',)
  // res.send({name:'asdf','Agent':23})
  // var responseObj=[{name:'asdf'},{name:'cx2'}]
  // console.log(`%c---- `, 'color:blue;', req)
  // res.json(responseObj)
})*/

//正则        todo
app.get ('/ab?cd', function (req, res) {
  res.send ('ab?cd')
})

app.get ('/form/:name', function (req, res) {
 /* var form = fs.readFileSync ('./form.html', {
    encoding: 'utf8'
  })
  res.send (form)*/
 
 // var person=req.params.name;
 // res.sendFile(__dirname+'/form.html')
 // res.render('form',{person:person})
  var data={age:23,homepage: ["知乎","简书"]}
  res.render('form',{data:data})
 
 
})
/*app.post ('/', urlencodeParser, function (req, res) {
  // console.log (`%c---- `, 'color:blue;', req.query)
  res.send ('--')
})*/

// app.post ('/upload', jsonParser, function (req, res) {
//   console.dir (req.body)
//   res.send (req.body)
// })

app.post ('/upload', upload.single ('logo'), function (req, res) {
  console.dir (req.file)
  res.send ({'res_code': 0})
})

app.post('/views/about',function (req,res) {
  res.render('about')
})

app.listen (3000)
