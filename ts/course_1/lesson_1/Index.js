var extractCoordinate = function (poin) {
    if (Array.isArray(poin)) {
        return { x: poin[0], y: poin[1] };
    }
    return poin;
};
var getDistance = function (point1, point2) {
    var _a = extractCoordinate(point1), x1 = _a.x, y1 = _a.y;
    var _b = extractCoordinate(point2), x2 = _b.x, y2 = _b.y;
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
};
var point1 = { x: 10, y: 14 };
var point2 = [16, 22];
console.log('Distance is', getDistance(point1, point2));
var hasSeed = function (some) {
    if ('hasSeed' in some) {
        console.log(some.hasSeed);
    }
};
var tmp = { name: 'Some', hasSeed: true, sweetness: 290 };
hasSeed(tmp);
