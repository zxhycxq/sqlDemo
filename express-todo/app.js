var express = require ('express')

var todoController = require ('./controllers/todoController')
var mongoose = require ('mongoose')
mongoose.connect ('mongodb://zxhy:zxhy.mlab.com:51068/todos')

var todoSchema = new mongoose.Schema ({
  item: String
});

var Todo=mongoose.model('Todo',todoSchema);
var itemOne=Todo({
  item:'asdf'
}).save(function (err) {
  if(err){
    throw new Error('Error description', 'app');
  }else{
    console.log(`%c--666-- `, 'color:blue;', 666)
  }
})
var app = express ()

app.set ('view engine', 'ejs')

app.use (express.static ('./public'))

todoController (app)

app.listen (3000)

console.log (`%c--123-- `, 'color:blue;', 123)
