var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'blog';
	locals.data = {
		posts1: [],
		posts2: [],
		posts3: [],
		postsEdu: [],
		postsImm: [],
		postsLive: [],
		postsWork: [],
	};

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
			.populate('author');


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

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 1,
			filters: {
				state: 'published',
				categories: "留学",
			},
		})
			.sort('-publishedDate')
			.populate('author');

		q.exec(function (err, results) {
			locals.data.postsEdu = results;
			next(err);
		});
	});

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 1,
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

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 1,
			filters: {
				state: 'published',
				categories: "生活",
			},
		})
			.sort('-publishedDate')
			.populate('author');

		q.exec(function (err, results) {
			locals.data.postsLive = results;
			next(err);
		});
	});

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 1,
			filters: {
				state: 'published',
				categories: "工作",
			},
		})
			.sort('-publishedDate')
			.populate('author');

		q.exec(function (err, results) {
			locals.data.postsWork = results;
			next(err);
		});
	});

	// Render the view
	view.render('blog');
};
