newApp = function(noun) {
    var original = noun;
    // Maybe take off the last letter. Or not.
    if (Math.random() > 0.5) {
        noun = noun.slice(0, -1);
    }

    // Append an ending.
    var endings = ['ly', 'lr', 'zr', 'fy', 'r'];
    var vowels = "aeiouy".split('');

    if (!~vowels.indexOf(noun.slice(-1)) && Math.random() > 0.5) {
        noun += vowels[parseInt(Math.random()*vowels.length)];
    }
    noun += endings[parseInt(Math.random()*endings.length)];

    var result = HTTP.call("GET", "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + original);

    result = JSON.parse(result.content).responseData.results;
    var randomImage = result[parseInt(Math.random()*result.length)];

    var commonApps = ['Uber', 'Lyft', 'eBay', 'Twitter', 'Instagram', 'Ruby on Rails', 'Bitcoin'];

    var tagline = "Like " + commonApps[parseInt(Math.random()*commonApps.length)] + " for your " + original + ".";

    Apps.insert({
        title: noun,
        original: original,
        tagline: tagline,
        splash: randomImage.url
    });
};


Meteor.methods({
    'newApp': function(newNoun) {
        return newApp(newNoun);
    }
});
