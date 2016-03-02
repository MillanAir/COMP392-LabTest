/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationFirst, rotationSecond, rotationThird, rotationFourth, rotationFifth) {
            this.rotationFirst = rotationFirst;
            this.rotationSecond = rotationSecond;
            this.rotationThird = rotationThird;
            this.rotationFourth = rotationFourth;
            this.rotationFifth = rotationFifth;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
