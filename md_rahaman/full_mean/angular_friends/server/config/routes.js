//import controllers
var Friends = require('../controllers/friends.js')

//define routes

module.exports = function(app){
	app.get('/friends', Friends.index),
	app.post('/friends', Friends.create),
	app.get('/friends/:id', Friends.show)
	app.put('/friends/:id', Friends.update),
	app.delete('/friends/:id', Friends.destroy)
}