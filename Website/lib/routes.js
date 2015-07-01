Router.route('/', function () {
    this.render("homePage");
});

Router.route('/about_us', function () {
    this.render('aboutUs');
});

Router.route('/jscript_grapher', function () {
    this.render('grapher')
});

Router.route('/otherProjects', function () {
    this.render('otherProjects')
});

Router.route('/project_expo', function () {
    this.render('projectExpo')
});

Router.route('/contact_us', function () {
    this.render('contactUs');
});