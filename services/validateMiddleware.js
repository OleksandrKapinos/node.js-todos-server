const TodoValidate = require('../validators/todoValidate');


const middleware = (property) => {
    return (req, res, next) => {
        const { error } = TodoValidate.validate(req[property]);
        const valid = error == null;
        if (valid) { next(); }
        else {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            console.log("error", message);
            res.status(422).json({ error: message })
        }
    }
};

module.exports = middleware;
