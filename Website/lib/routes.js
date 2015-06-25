Router.route('/', function () {
    this.render('homePage');
});

Router.route('/about_us', function () {
    this.render('aboutUs');
});

Router.route('/contact_us', function () {
    this.render('contactUs');
});