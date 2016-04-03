define(["require", "exports"], function (require, exports) {
    "use strict";
    var Check = (function () {
        function Check() {
        }
        Check.prototype.check = function () { return true; };
        Check.check = true;
        return Check;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Check;
});
