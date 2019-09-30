var roll = [
    {
        url: "/assets/brim/brimlol-01.jpg",
        caption: "I love the story this peice tells"
    },
    {
        url: "/assets/brim/brimlol-02.jpg",
        caption: "Here we see Satan making some kind of a deal with the Pope"
    },
    {
        url: "/assets/brim/brimlol-03.jpg",
        caption: "Care for some pretzels?"
    },
    {
        url: "/assets/brim/brimlol-04.jpg",
        caption: "The classic bread boys are back"
    },
    {
        url: "/assets/brim/brimlol-05.jpg",
        caption: "The bravery of these blue-clad peoples, to willingly confront this cave dragon, is an inspiration to us all"
    },
    {
        url: "/assets/brim/brimlol-06.jpg",
        caption: "Let us turn over our hobgoblins to the clergy"
    },
    {
        url: "/assets/brim/brimlol-07.jpg",
        caption: "What a beautiful curled shield, it's like a sea shell"
    },
    {
        url: "/assets/brim/brimlol-08.jpg",
        caption: "The pen is mightier than the sword"
    },
    {
        url: "/assets/brim/brimlol-09.jpg",
        caption: "Keep your cool"
    }
];
function getUrlValue(urlKey, context) {
    if (context === void 0) { context = location.search; }
    if (!context)
        return undefined;
    for (var _i = 0, _a = context.substring(1).split("&"); _i < _a.length; _i++) {
        var v = _a[_i];
        if (v.includes("=")) {
            var _b = v.split("="), key = _b[0], value = _b[1];
            if (decodeURIComponent(key) == urlKey)
                return decodeURIComponent(value);
        }
    }
}
var slideOffset = parseInt(getUrlValue("slide-offset")) || 0;
var oneDay = 1000 * 60 * 60 * 24;
var now = Date.now() + (oneDay * slideOffset);
var days = Math.floor(now / 8.64e7);
var slide = roll[days % roll.length];
var img = document.querySelector("img.photoslide");
var p = document.querySelector("figcaption p:first-of-type");
img.src = slide.url;
p.textContent = "\"" + slide.caption + "\"";
//# sourceMappingURL=brim.js.map