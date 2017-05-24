var Users = require('../controllers/users')
var Messages = require('../controllers/messages')
var Comments = require('../controllers/comments')


module.exports = function(app){
	app.get('/users', Users.index)
	app.post('/users', Users.create)
	app.post('/sessions', Users.login)
	app.get('/users/:id', Users.show)

	app.get('/messages', Messages.index)
	app.post('/messages', Messages.create)
	app.delete('/messages/:id', Messages.destroy)

	app.post('/messages/:id', Comments.create)
	app.put('/comments/:id', Comments.addingLikes)
	app.delete('/comments/:id', Comments.destroy)
}