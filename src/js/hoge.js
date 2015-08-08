var Hoge = (function () {
    function Hoge() {
    }
    Hoge.prototype.piyo = function (message) {
        console.log('hoge piyo ' + message);
    };
    return Hoge;
})();
module.exports = Hoge;
