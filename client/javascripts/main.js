Template.main.helpers({
    random_app: function() {
        request = document.location.toString().split('/').slice(-1)[0].replace('?','');
        if (Apps.findOne({title: request})) return Apps.findOne({title: request});
        if (Apps.findOne({original: request})) return Apps.findOne({original: request});
        else return Apps.find().fetch()[parseInt(Math.random()*Apps.find().fetch().length)];
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

Template.show_app.events = {
    'click .btn-default': function() {
        var newNoun = $('.new-noun-input').val();
        if (!newNoun) return;
        else {
            Meteor.call('newApp', newNoun, function(err, val) {
                if (!err) location = location + "/" + newNoun;
            });
        }
    }
};
