const request = require("supertest");
const assert = require("assert");

const app = require("./index").app;

describe("test", function(){
    it("should return Hello Test", function(done){

        request(app)
            .get("/")
            .expect("Hello Test")
            .end(done);
    });

    it("should return NotFound with status 404", function(done){

        request(app)
            .get("/error")
            .expect(404)
            .expect("NotFound")
            .end(done);
    });

    it("should return todo with name Clean room, marked true", function(done){

        request(app)
            .get("/todos/5f638010b4726344ad38f18a")
            .expect( function(response){
                assert.deepEqual(response.body, {"_id": "5f638010b4726344ad38f18a", name: 'Clean room', marked: true, "__v": 0});
            })
            .end(done);
    });
});
