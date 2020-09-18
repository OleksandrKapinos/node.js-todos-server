const {Router} = require('express');
const Todo = require('../models/todoModel');
const ValidateMiddleware = require('../services/validateMiddleware');

const router = Router();


//Get all todos
router.get('/todos',
    async (req, res) => {
        Todo.find({}, function(err, todos){
            console.log(todos);
            if(err) return console.log(err);
            res.send(todos);
        });
    });

//Create new todo
router.post('/todos',
    ValidateMiddleware('body'),
    async (req, res) => {
        if(!req.body) return res.sendStatus(400);
        const newTodo = await Todo.create(req.body);
        newTodo.save(function(err) {
            if (err) return console.log(err);
            res.send(newTodo);
        });
    });

//Get todo by id
router.get('/todos/:id',
    async (req, res) => {
        const id = req.params.id;
        Todo.findOne({_id: id}, function(err, todo){
            console.log(todo);
            if(err) return console.log(err);
            res.send(todo);
        });
    });

//Delete todo by id
router.delete('/todos/:id',
    async (req, res) => {
        const id = req.params.id;
        Todo.findByIdAndDelete(id, function(err, todo){
            if(err) return console.log(err);
            res.send(todo);
        });
    });

//Change todo by id
router.put('/todos/:id',
    ValidateMiddleware('body'),
    async (req, res) => {
        if(!req.body) return res.sendStatus(400);
        const id = req.params.id;
        const todoName = req.body.name;
        const todoDescription = req.body.description;
        const todoMarked = req.body.marked;
        const newTodo = {name: todoName, description: todoDescription, marked: todoMarked};
        Todo.findOneAndUpdate({_id: id}, newTodo, {new: true}, function(err, todo){
            if(err) return console.log(err);
            res.send(todo);
        });
});


module.exports = router;
