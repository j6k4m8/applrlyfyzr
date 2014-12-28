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
    }
});

