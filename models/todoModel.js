const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    description: String,
    marked: { type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', todoSchema);
