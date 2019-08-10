var bodyParser = require ('body-parser')
var data = [{item: 'asdf'}, {item: 'asdf222'}]

var urlencodeParser = bodyParser.urlencoded ({extended: false});
module.exports = function (app) {
  app.get ('/todo', function (req, res) {
    Todo.find({},function (err,data) {
      if(err){ throw new Error('Error description', 'todoController');
        res.render ('todo', {todos: data})
      }
    })
    
  })
  
  app.post ('/todo', urlencodeParser, function (req, res) {
    data.push (req.body)
    res.json (data)
  })
  app.delete ('/todo/:item', function (req, res) {
    data = data.filter (function (todo) {
      return todo.item.replace (/ /g, '-') != req.params.item;
    })
    res.json (data)
  })
}
