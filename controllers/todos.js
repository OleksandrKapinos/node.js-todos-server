const Model = require('../models');

module.exports = {getTodos, getTodo, createTodo, deleteTodo, toggleMarkTodo};

async function getTodos(req, res, next) {
    try {
        const todos = await Model.Todo.find({});
        res.status(200).json(todos);
    } catch(error) {
        res.send(error);
        next(error)
    }
}

async function getTodo(req, res, next) {
    try {
        const todoId = req.params.todoId;
        const todo = await Model.Todo.findById(todoId);
        res.status(200).json(todo);
    } catch(error) {
        res.send(error);
        next(error)
    }
}

async function createTodo(req, res, next) {
    try {
        const newTodo = await Model.Todo.create(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch(error) {
        res.send(error);
        next(error)
    }
}

async function deleteTodo(req, res, next) {
    try {
        const todoId = req.params.todoId;
        const todo = await Model.Todo.findByIdAndDelete(todoId);
        res.status(200).json(todo);
    } catch(error) {
        res.send(error);
        next(error)
    }
}

async function toggleMarkTodo(req, res, next) {
    try {
        const todoId = req.params.todoId;
        const todo = await Model.Todo.findById(todoId);
        todo.marked = !todo.marked;
        await todo.save();
        res.status(200).json(todo);
    } catch(error) {
        res.send(error);
        next(error)
    }
}
