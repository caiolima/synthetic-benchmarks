/* Generated from Java with JSweet 2.0.0 - http://www.jsweet.org */
function Point(x, y) {
    this._x = x;
    this._y = y;
}
Object.defineProperty(Point.prototype, "x", {
    get: function() {
        return this._x;
    }
});
Object.defineProperty(Point.prototype, "y", {
    get: function() {
        return this._y;
    }
});

Point.prototype.distance = function (p) {
    var xAux = this.x - p.x;
    var yAux = this.y - p.y;
    return Math.sqrt(xAux * xAux - yAux * yAux);
};
noInline(Point.prototype.distance);
Point.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
};

function findClosest(points, query) {
    var dist = Number.MAX_VALUE;
    var closest = null;
    for (var index5243 = 0; index5243 < points.length; index5243++) {
        var p = points[index5243];
        {
            if (p.distance(query) < dist) {
                closest = p;
                dist = p.distance(query);
            }
        }
    }
    return closest;
};

function genPoints(numPoints) {
    var points = ([]);
    for (var i = 0; i < numPoints; i++) {
        /* add */ (points.push(new Point(3.14 * i, 2.76 * i)) > 0);
    }

    return points;
};

let runs = 50;
while (runs--) {
    var points = genPoints(/* parseInt */ parseInt(160000));

    var closest = findClosest(points, new Point(1.5, 1.5));
}

print(closest);

