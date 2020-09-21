const {Router} = require('express');
const Model = require('../models');
const ValidateMiddleware = require('../services/validateMiddleware');
const todoController = require('../controllers/todos');

const router = Router();


//Get all todos
router.get('/', todoController.getTodos);

//Create new todo
router.post('/', ValidateMiddleware('body', Model.Todo), todoController.createTodo);

//Get todo by id
router.get('/:todoId', todoController.getTodo);

//Delete todo by id
router.delete('/:todoId', todoController.deleteTodo);

//Change todo by id
router.put('/:todoId', todoController.toggleMarkTodo);


module.exports = router;
