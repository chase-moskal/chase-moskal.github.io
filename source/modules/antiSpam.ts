
/**
 * Run through the DOM and inject Base64-encoded email addresses.
 * Seek out [data-email] attributes, assume their contents are base-64 encoded strings, decode them, and insert the result as the element's text content.
 */
export default function antiSpam(document: Document = window.document) {
  const emailLinks: HTMLAnchorElement[] = [].slice.call( document.querySelectorAll("a[data-email]") );
  for (const a of emailLinks) {
    const email = atob(a.getAttribute("data-email"));
    a.href = `mailto:${email}`;
    a.textContent = email;
  }
}
