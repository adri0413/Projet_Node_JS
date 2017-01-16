var mongoose = require('mongoose')
    , Todo = mongoose.model('Todo');
module.exports = {
    all: function (req, res) {
        Todo.find({}, function (err, todos) {
            if (err) res.render('error', {
                error: 'imposible de récupérez les item dans la base de donnée'
            });
            res.render('todos', {
                todos: todos
            });
        });
    }
    , viewOne: function (req, res) {
        Todo.find({
            _id: req.params.id
        }, function (err, todo) {
            res.render('todo', {
                todo: todo[0]
            })
        });
    }
    , create: function (req, res) {
        var todoContent = req.body.content;
        
        Todo.create({
            content: todoContent
        }, function (err, todo) {
            if (err) res.render('error', {
                    error: 'une erreur est survenue a la création du todo'
                })
            
            res.redirect('/todos');
        });
    }
    , destroy: function (req, res) {
        var id = req.params.id;
        Todo.findByIdAndRemove(id, function (err, todo) {
            if (err) res.render('error', {
                error: 'une erreur est survenu a la duppretion du todo'
            });
            res.redirect('/todos');
        });
    }
    , edit: function (req, res) {
        Todo.findOneAndUpdate({
            _id: req.params.id
        }, {
            content: req.body.content
        }, function (err, todo) {
            res.redirect('/todos');
        });
    }
};