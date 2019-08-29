const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	// console.log(req);
	res.render('form', {
		title: 'Get Form',
		data: JSON.stringify([])
	});
});

router.post('/', (req, res) => {
	var todo = req.body.todo;
	var data;
	if (!('data' in req.body)){
		data = []
	} else {
		data = JSON.parse(req.body.data)
	}
	if (!(data.includes(todo))){
		data.push(todo)
	}	
	res.render('form', {
		'title': 'Post Form',
		'data': JSON.stringify(data)
	});
});

module.exports = router;