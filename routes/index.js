/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.all('/', routes.views.index);

	//app.get('/blog/:category?', routes.views.blog);
	app.get('/blog', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/blog/edu', routes.views.newsPage.edu);
	app.get('/blog/imm', routes.views.newsPage.imm);
	app.get('/blog/live', routes.views.newsPage.live);
	app.get('/blog/work', routes.views.newsPage.work);

	app.get('/project', routes.views.immPage.imm1);
	app.get('/project/2', routes.views.immPage.imm2);
	app.get('/project/3', routes.views.immPage.imm3);
	app.get('/project/4', routes.views.immPage.imm4);
	app.get('/project/5', routes.views.immPage.imm5);

	app.all('/pass', routes.views.pass);

	app.get('/education', routes.views.education);
		app.get('/education/high/york', routes.views.school.high.york);
		app.get('/education/high/york-christian', routes.views.school.high.yorkChris);
		app.get('/education/high/toronto', routes.views.school.high.toronto);
		app.get('/education/high/toronto-christian', routes.views.school.high.torontoChris);
	app.get('/education/college', routes.views.school.collegePage);
		app.get('/education/college/centennial-college', routes.views.school.college.centennial);
		app.get('/education/college/seneca', routes.views.school.college.seneca);
		app.get('/education/college/sheridan', routes.views.school.college.sheridan);
		app.get('/education/college/george-brown', routes.views.school.college.georgebrown);
		app.get('/education/college/humber', routes.views.school.college.humber);
		app.get('/education/college/bcit', routes.views.school.college.bcit);
		app.get('/education/college/winnipeg-technical-college', routes.views.school.college.winnipegtc);
		app.get('/education/college/red-river', routes.views.school.college.redriver);
	app.get('/education/basic', routes.views.school.basicPage);
		app.get('/education/basic/uoit', routes.views.school.basic.uoit);
		app.get('/education/basic/lakehead', routes.views.school.basic.lakehead);
		app.get('/education/basic/brandon', routes.views.school.basic.brandon);
		app.get('/education/basic/winnipeg', routes.views.school.basic.winnipeg);
		app.get('/education/basic/cape-breton', routes.views.school.basic.capebreton);
		app.get('/education/basic/bishop', routes.views.school.basic.bishop);
	app.get('/education/doctor', routes.views.school.doctorPage);
		app.get('/education/doctor/toronto', routes.views.school.doctor.toronto);
		app.get('/education/doctor/ottawa', routes.views.school.doctor.ottawa);
		app.get('/education/doctor/western', routes.views.school.doctor.western);
		app.get('/education/doctor/queen', routes.views.school.doctor.queen);
		app.get('/education/doctor/mcmaster', routes.views.school.doctor.mcmaster);
		app.get('/education/doctor/british-columbia', routes.views.school.doctor.britishcolumbia);
		app.get('/education/doctor/manitoba', routes.views.school.doctor.manitoba);
		app.get('/education/doctor/montreal', routes.views.school.doctor.montreal);
	app.get('/education/complex', routes.views.school.complexPage);
		app.get('/education/complex/york', routes.views.school.complex.york);
		app.get('/education/complex/waterloo', routes.views.school.complex.waterloo);
		app.get('/education/complex/ryerson', routes.views.school.complex.ryerson);
		app.get('/education/complex/windsor', routes.views.school.complex.windsor);
		app.get('/education/complex/carleton', routes.views.school.complex.carleton);
		app.get('/education/complex/brock', routes.views.school.complex.brock);
		app.get('/education/complex/sfu', routes.views.school.complex.sfu);
		app.get('/education/complex/victoria', routes.views.school.complex.victoria);
		app.get('/education/complex/concordia', routes.views.school.complex.concordia);

	app.all('/visa', routes.views.visa);

	app.all('/camp', routes.views.camp);

	app.all('/contact', routes.views.contact);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
