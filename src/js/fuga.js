var Fuga = (function () {
    function Fuga() {
    }
    Fuga.prototype.piyo = function (message) {
        console.log('fuga piyo ' + message);
    };
    return Fuga;
})();
module.exports = Fuga;
