const errorsRouter = require('./error.router');
const todosRouter = require('./todos.router');
const express = require('express');
const router = express.Router();

router.use('/error', errorsRouter);
router.use('/todos', todosRouter);

module.exports = router;
