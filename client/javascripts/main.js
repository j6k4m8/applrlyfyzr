Template.main.helpers({
    random_app: function() {
        return Apps.findOne();
    }
});


Template.show_app.helpers({
    app_title: function() {
        return this.title;
    },

    app_tagline: function() {
        return this.tagline;
    },

    splash_to_css: function() {
        return "url(" + this.splash + ") no-repeat center center";
    },

    current_year: function() {
        return (new Date()).getUTCFullYear();
    }
});

