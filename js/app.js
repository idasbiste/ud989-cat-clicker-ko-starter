var Cat = function () {
    var levels = ["Newborn", "Tiny", "Teen", "Adult"];

    var textLevels = {
        Newborn: 10,
        Tiny: 100,
        Teen: 200,
        Adult: Number.MAX_VALUE
    };
    
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
    this.imgAttribution = ko.observable("https://www.flickr.com");
    
    this.level = ko.computed(function () {
        for (var i = 0, l = levels.length; i < l; i++) {
            if (this.clickCount() < textLevels[levels[i]]) {
                return levels[i];
            }
        }
    }, this);
    
    this.nicknames = ko.observableArray(["Banano", "Baludi", "Trickens"]);
};

var ViewModel = function () {
    this.currentCat = ko.observable(new Cat());
    
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
};

ko.applyBindings(new ViewModel());