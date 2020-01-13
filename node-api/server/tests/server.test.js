const expect =  require('expect');
const request = require('supertest');
var {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: "Finish this module"
}, {
    _id: new ObjectID(),
    text: "Get a new fan",
    completed: true,
    completedAt: 433,
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = "Testing code";

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
    });
    
    it('should not create a todo', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2);
                done();
            }).catch((e) => done(e));
        });
    });
});


describe('GET /todos', () => {
    it('should fetch all todo', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2);
        })
        .end(done);
    });
});

describe('GET /todo/:id', () => {
    it('should fetch todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);
    });
 
    it('should return 404 if todo not found', (done) => {
        var id = "5e1815016261a9cc0f60fa17";
        request(app)
        .get(`/todos/${id}`)
        .expect(404)
        .end(done);
    });
 
    it('should return 404 if for non-object id', (done) => {
        request(app)
        .get(`/todos/122`)
        .expect(404)
        .end(done);
    });
});

describe('DELETE todo', () => {
    it('should delete todo with id', (done) => {
        var hexId = todos[0]._id.toHexString();
        request(app)
        .delete(`/todos/${hexId}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.findById(hexId).then((todo) => {
                expect(todo).toNotExist();
                done();
            }).catch((e) => done(e));

        });
    });
    
    it('should return 404 when id not found', (done) => {
        request(app)
        .delete(`/todos/5e1ae625d7b981f4169cd8d7`)
        .expect(404)
        .end(done);
    })

    it('should return 404 when object id is invalid', (done) => {
        request(app)
        .delete(`/todos/66633`)
        .expect(404)
        .end(done);
    })

});

describe('UPDATE /todos', () => {
    it('should update todo', (done) => {
        var hexId = todos[0]._id.toHexString();
        var text = "Testing code";
        var completed = true;

        request(app)
        .patch(`/todos/${hexId}`) 
        .send({text, completed})
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(text);
            expect(res.body.todo.completed).toBe(completed);
            expect(res.body.todo.completedAt).toBeA('number');
        })
        .end((err, res) => {
            if(err){
                return done(err);
            }
            Todo.find({text}).then((todos) => {
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => done(e));
        });
        // .end(done);
    });

    
    it('should clear completedAt when not completed', (done) => {
        var hexId = todos[1]._id.toHexString();
        var completed = false;

        request(app)
        .patch(`/todos/${hexId}`) 
        .send({completed})
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.completed).toBe(completed);
            expect(res.body.todo.completedAt).toNotExist();
        })
        .end(done);
    });
    
});