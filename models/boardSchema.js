var mongoose = require('mongoose');

var boardSchema = mongoose.Schema({
	writer: String,
	password: String,
	title: String,
	contents: String,
	comments: [{
		name: String,
		memo: String,
		date: {type:Date, default: Date.now}
	}],
	count: {type:Number, default: 0},
	date: {type:Date, default: Date.now},
	update:[{contents: String, date: {type:Date, default: Date.now}}],
	delete: {type: Boolean, default: false}
});

module.exports = mongoose.model('BoarContents', boardSchema);