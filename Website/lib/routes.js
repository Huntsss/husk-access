Router.route('/', function () {
    this.render('homePage');
});

Router.route('/about_us', function () {
    this.render('aboutUs');
});

Router.route('/jscript_grapher', function () {
    this.render('jscriptGrapher')
});

Router.route('/second_project', function () {
    this.render('secondProject')
});

Router.route('/project_expo', function () {
    this.render('projectExpo')
});