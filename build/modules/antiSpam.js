define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Run through the DOM and inject Base64-encoded email addresses.
     * Seek out [data-email] attributes, assume their contents are base-64 encoded strings, decode them, and insert the result as the element's text content.
     */
    function antiSpam(document) {
        if (document === void 0) { document = window.document; }
        var emailLinks = [].slice.call(document.querySelectorAll("a[data-email]"));
        for (var _i = 0, emailLinks_1 = emailLinks; _i < emailLinks_1.length; _i++) {
            var a = emailLinks_1[_i];
            var email = atob(a.getAttribute("data-email"));
            a.href = "mailto:" + email;
            a.textContent = email;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = antiSpam;
});
//# sourceMappingURL=antiSpam.js.map