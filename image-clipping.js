// Create the rectangle based into its 4 points
function Rectangle(x0, y0, width, height) {
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x0 + width;
    this._y1 = y0 + height;
}

Object.defineProperty(Rectangle.prototype, "x0", {
    get: function() {
        return this._x0;
    }
});

Object.defineProperty(Rectangle.prototype, "x1", {
    get: function() {
        return this._x1;
    }
});

Object.defineProperty(Rectangle.prototype, "y0", {
    get: function() {
        return this._y0;
    }
});

Object.defineProperty(Rectangle.prototype, "y1", {
    get: function() {
        return this._y1;
    }
});

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function isInside(rect, point) {
    if (point.x >= rect.x0 && point.x <= rect.x1 && point.y >= rect.y0 && point.y <= rect.y1)
        return true;
    return false;
}

function draw(points) { }

function clip(cArea, points) {
    let rPoints = [];
    for (let i = 0; i < points.length; i++) {
        if (isInside(cArea, points[i]))
            rPoints.push(points[i]);
    }
    return rPoints;
}
noInline(clip);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomPoints(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        let x = getRandomInt(1000);
        let y = getRandomInt(1000);
        arr[i] = new Point(x, y);
    }

    return arr;
}

let clippingArea = new Rectangle(10, 0, 10, 10);
let runs = 50;

while (runs--) {
    let randomPoints = generateRandomPoints(30000);
    let visiblePoints = clip(clippingArea, randomPoints);
    draw(visiblePoints);
}

print("Done");
