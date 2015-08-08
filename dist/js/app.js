(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Hoge = require("./hoge");
var Fuga = require("./fuga");
(new Hoge()).piyo('hello');
(new Fuga()).piyo('hello');

},{"./fuga":2,"./hoge":3}],2:[function(require,module,exports){
var Fuga = (function () {
    function Fuga() {
    }
    Fuga.prototype.piyo = function (message) {
        console.log('fuga piyo ' + message);
    };
    return Fuga;
})();
module.exports = Fuga;

},{}],3:[function(require,module,exports){
var Hoge = (function () {
    function Hoge() {
    }
    Hoge.prototype.piyo = function (message) {
        console.log('hoge piyo ' + message);
    };
    return Hoge;
})();
module.exports = Hoge;

},{}]},{},[1]);
