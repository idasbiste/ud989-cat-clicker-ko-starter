var levels = ["Newborn", "Tiny", "Teen", "Adult"];

var textLevels = {
    Newborn: 10,
    Tiny: 100,
    Teen: 200,
    Adult: Number.MAX_VALUE
};

var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
    this.imgAttribution = ko.observable("https://www.flickr.com");
    
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
    
    this.level = ko.computed(function () {
        for (var i = 0, l = levels.length; i < l; i++) {
            if (this.clickCount() < textLevels[levels[i]]) {
                return levels[i];
            }
        }
    }, this);
};

ko.applyBindings(new ViewModel());