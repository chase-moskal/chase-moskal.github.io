define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Run through the DOM and inject Base64-encoded email addresses.
     */
    function antiSpam(document) {
        if (document === void 0) { document = window.document; }
        for (var _i = 0, _a = [].slice.call(document.querySelectorAll("[data-email]")); _i < _a.length; _i++) {
            var a = _a[_i];
            a.href = a.textContent = atob(a.getAttribute("data-email"));
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = antiSpam;
});
//# sourceMappingURL=antiSpam.js.map