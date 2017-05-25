var Users = require('../controllers/users')
var Topics = require('../controllers/topics')
var Answers = require('../controllers/answers')
var Comments = require('../controllers/comments')

module.exports = function(app){
	//users route
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.post('/sessions', Users.login)
	app.get('/users/show/:id', Users.show)
	app.delete('/users/:id', Users.destroy)
	app.put('/users/:id', Users.update)

	//topic route
	app.get('/topics', Topics.index)
	app.post('/topics', Topics.create)
	app.get('/topic/show/:id', Topics.show)
	app.delete('/topics/:id', Topics.destroy)

	//answers route
	app.get('/answers', Answers.index)
	app.post('/answers/:id', Answers.create)
	app.put('/answers/likes/:id', Answers.likes)
	app.put('/answers/dislikes/:id', Answers.dislikes)
	app.delete('/answers/:id', Answers.destroy)

	//comments route
	app.post('/comments/:id', Comments.create)
	app.delete('/comments/:id', Comments.destroy)
}