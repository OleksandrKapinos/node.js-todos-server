const {Router} = require('express');

const router = Router();

router.get("/", function (request, response){

    response.send("Hello Test");
});

router.get("/error", function (request, response){

    response.status(404).send("NotFound");
});


module.exports = router;
