var express = require('express');
var router = express.Router();
var BoardContents = require('../models/boardSchema');

router.get('/', function(req,res){
	BoardContents.find({}).sort({date:-1}).exec(function(err, rawContents) {
		if(err) throw err;

		res.render('board', {title: "Board", contents: rawContents});
	})
});

router.post('/', function(req,res){
	var title = req.body.addContentSubject;
	var writer = req.body.addContentWriter;
	var password = req.body.addContentPassword;
	var content = req.body.addContent;

	var newBoardContents = new BoardContents({title: title, writer: writer, password: password, contents: content})

	newBoardContents.save(function(error, data) {
		if(error)
			console.log(error);
		else {
			console.log('Save!');
			res.redirect('/boards');
		}

	})
});

module.exports = router