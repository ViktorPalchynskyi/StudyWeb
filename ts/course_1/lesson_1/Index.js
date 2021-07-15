var Seasons;
(function (Seasons) {
    Seasons[Seasons["winter"] = 0] = "winter";
    Seasons[Seasons["spring"] = 1] = "spring";
    Seasons[Seasons["summer"] = 2] = "summer";
    Seasons[Seasons["autum"] = 3] = "autum";
})(Seasons || (Seasons = {}));
;
function someEx(season) {
    switch (season) {
        case Seasons.winter:
            return 'WI';
        case Seasons.spring:
            return 'SP';
        case Seasons.summer:
            return 'SU';
        case Seasons.autum:
            return 'AU';
    }
}
console.log('Where is my fucning function???', someEx(Seasons.autum));
function someEx2(someState) {
    var initialState = someState;
    var useState = function (newState) { return console.log(newState); };
    return [initialState, useState];
}
;
var _a = someEx2('ulyalya'), state = _a[0], useState = _a[1];
useState('Lya');
