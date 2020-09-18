const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    description: Joi.string()
        .max(60),
    marked: Joi.boolean()
        .default(false)
});


module.exports = schema;
