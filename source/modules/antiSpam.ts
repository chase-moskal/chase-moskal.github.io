
/**
 * Run through the DOM and inject Base64-encoded email addresses.
 */
export default function antiSpam(document: Document = window.document) {
    for (let a of [].slice.call(document.querySelectorAll("[data-email]")))
        a.href = a.textContent = atob(a.getAttribute("data-email"));
}
