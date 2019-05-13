'use strict';

const Vector2 = function (x, y) {
    if (x === undefined) throw 'Constructor requires at least 1 parameter.';
    if (y === undefined) {
        this.x = x;
        this.y = x;
    }
    else {
        this.x = x;
        this.y = y;
    }
};

Vector2.fromRowVector = function (v) {
    return new Vector2(v[0][0], v[0][1]);
};
Vector2.fromColumnVector = function (v) {
    return new Vector2(v[0][0], v[1][0]);
};
Vector2.fromArray = function (arr) {
    return new Vector2(arr[0], arr[1]);
};
Vector2.random = function (xmin, xmax, ymin, ymax) {
    return new Vector2(
        xmin + Math.random() * (xmax - xmin),
        ymin + Math.random() * (ymax - ymin)
    );
};

Vector2.up = new Vector2(0, 1);
Vector2.down = new Vector2(0, -1);
Vector2.right = new Vector2(1, 0);
Vector2.left = new Vector2(-1, 0);
Vector2.zero = new Vector2(0, 0);
Vector2.one = new Vector2(1, 1);

Vector2.prototype.toRowVector = function () {
    return [[this.x, this.y]];
};
Vector2.prototype.toColumnVector = function () {
    return [[this.x], [this.y]];
};
Vector2.prototype.toArray = function () {
    return [this.x, this.y];
};
Vector2.prototype.toString = function () {
    return 'Vector2(' + this.x + ', ' + this.y + ')';
};

Vector2.prototype.add = function (v) {
    return new Vector2(this.x + v.x, this.y + v.y);
};
Vector2.prototype.substract = function (v) {
    return new Vector2(this.x - v.x, this.y - v.y);
};
Vector2.prototype.multiply = function (scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
};
Vector2.prototype.divide = function (scalar) {
    return new Vector2(this.x / scalar, this.y / scalar);
};
Vector2.prototype.negate = function () {
    return new Vector2(-this.x, -this.y);
};
Vector2.prototype.reciprocal = function () {
    return new Vector2(1 / this.x, 1 / this.y);
};

Vector2.prototype.map = function(func){
    return new Vector2(func(this.x), func(this.y));
};

Vector2.prototype.dot = function (v) {
    return this.x * v.x + this.y * v.y;
};
Vector2.prototype.sqrMagnitude = function () {
    return this.dot(this);
};
Vector2.prototype.magnitude = function () {
    return Math.sqrt(this.sqrMagnitude());
};
Vector2.prototype.normalize = function () {
    return this.divide(this.magnitude());
};
Vector2.prototype.norm = function (p) {
    return Math.pow(Math.pow(this.x, p) + Math.pow(this.y, p), 1 / p);
};
Vector2.prototype.maximumNorm = function () {
    return Math.max(this.x, this.y);
};
Vector2.prototype.distanceTo = function (v) {
    return v.substract(this).magnitude();
};
Vector2.prototype.lerp = function (v, t) {
    return this.add(v.substract(this).multiply(t));
};
Vector2.prototype.perpendicularTo = function (v) {
    return this.dot(v) === 0;
};
Vector2.prototype.floor = function () {
    return this.map(Math.floor);
};
Vector2.prototype.ceil = function(){
    return this.map(Math.ceil);
};

Vector2.prototype.clone = function (v) {
    return new Vector2(this.x, this.y);
};
Vector2.prototype.equals = function (v) {
    return this.x === v.x && this.y === v.y;
};
Vector2.prototype.hash = function () {
    return this.x * 31 + this.y;
};

exports = Vector2;