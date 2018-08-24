var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'blog';

	locals.data = {
		postsImm: [],
	};

  view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 5,
			maxPages: 100,
			filters: {
				state: 'published',
				categories: "移民",
			},
		})
			.sort('-publishedDate')
			.populate('author');

		q.exec(function (err, results) {
			locals.data.postsImm = results;
			next(err);
		});
	});

  view.render('newsPage/imm');
};
