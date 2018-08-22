var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'blog';
	// locals.filters = {
	// 	category: req.params.category,
	// };
	locals.data = {
		// posts: [],
		// categories: [],
		posts1: [],
		posts2: [],
		posts3: [],
		postsEdu: [],
		postsImm: [],
		postsLive: [],
		postsWork: [],
	};

	// Load all categories
	// view.on('init', function (next) {
	//
	// 	keystone.list('PostCategory').model.find().sort('name').exec(function (err, results) {
	//
	// 		if (err || !results.length) {
	// 			return next(err);
	// 		}
	//
	// 		locals.data.categories = results;
	//
	// 		// Load the counts for each category
	// 		async.each(locals.data.categories, function (category, next) {
	//
	// 			keystone.list('Post').model.count().where('categories').in([category.id]).exec(function (err, count) {
	// 				category.postCount = count;
	// 				next(err);
	// 			});
	//
	// 		}, function (err) {
	// 			next(err);
	// 		});
	// 	});
	// });
	//
	// // Load the current category filter
	// view.on('init', function (next) {
	//
	// 	if (req.params.category) {
	// 		keystone.list('PostCategory').model.findOne({ key: locals.filters.category }).exec(function (err, result) {
	// 			locals.data.category = result;
	// 			next(err);
	// 		});
	// 	} else {
	// 		next();
	// 	}
	// });
	//
	// // Load the posts
	// view.on('init', function (next) {
	//
	// 	var q = keystone.list('Post').paginate({
	// 		page: req.query.page || 1,
	// 		perPage: 10,
	// 		maxPages: 10,
	// 		filters: {
	// 			state: 'published',
	// 		},
	// 	})
	// 		.sort('-publishedDate')
	// 		.populate('author categories');
	//
	// 	if (locals.data.category) {
	// 		q.where('categories').in([locals.data.category]);
	// 	}
	//
	// 	q.exec(function (err, results) {
	// 		locals.data.posts = results;
	// 		next(err);
	// 	});
	// });

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

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 6,
			maxPages: 1,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

			q.where('categories').in('5b75933335216123504aa3d9');

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
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

			q.where('categories').in('5b75933f35216123504aa3da');

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
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

			q.where('categories').in('5b75934935216123504aa3db');

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
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

			q.where('categories').in('5b75934e35216123504aa3dc');

		q.exec(function (err, results) {
			locals.data.postsWork = results;
			next(err);
		});
	});

	// Render the view
	view.render('blog');
};
