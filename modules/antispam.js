/**
 * Hide email addresses from dumb bots in base64 encoded data-attributes
 * - run through the dom
 * - read base64 encoded data-email attributes
 * - inject the email as text content
 */
export function antispam(anchorElements) {
    if (anchorElements === void 0) { anchorElements = document.querySelectorAll("a[data-email]"); }
    var elements = [].slice.call(document.querySelectorAll("a[data-email]"));
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var a = elements_1[_i];
        var email = atob(a.getAttribute("data-email"));
        a.href = "mailto:" + email;
        a.textContent = email;
    }
}
//# sourceMappingURL=antispam.js.map