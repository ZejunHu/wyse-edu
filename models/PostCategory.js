var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
  nocreate: true,
	noedit: true,
});

PostCategory.add({
	name: { type: String, required: true },
	priority: { type: Number, default: 9999 },
});

PostCategory.relationship({ ref: 'Post', path: 'posts', refPath: 'categories' });

PostCategory.register();
