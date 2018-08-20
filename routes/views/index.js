var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		posts1: [],
		posts2: [],
		posts3: [],
	};

	// Load the edu-news
	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 9,
			maxPages: 1,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');


		q.exec(function (err, results) {
			var res = results.results;
			var res1 = res.slice(0, 3);
			var res2 = res.slice(3, 6);
			var res3 = res.slice(6);
			locals.data.posts1 = res1;
			locals.data.posts2 = res2;
			locals.data.posts3 = res3;
			next(err);
		});
	});


	// Render the view
	view.render('index');
};
