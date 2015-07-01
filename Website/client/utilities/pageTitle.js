if (Meteor.isClient) {
    Template.homePage.rendered = function() {
        document.title = "Home Page";
    };
    Template.aboutUs.rendered = function() {
        document.title = "About Us";
    };
    Template.contactUs.rendered = function() {
        document.title = "Contact Us";
    };
    Template.projectExpo.rendered = function() {
        document.title = "Project Expo";
    };
    Template.otherProjects.rendered = function() {
        document.title = "Other Projects";
    };
    Template.grapher.rendered = function() {
        document.title = "Grapher";
    };
}