
/**
 * Hide email addresses from dumb bots in base64 encoded data-attributes
 * - run through the dom
 * - read base64 encoded data-email attributes
 * - inject the email as text content
 */
export function antispam(anchorElements: NodeListOf<Element> = document.querySelectorAll("a[data-email]")) {

	const elements: HTMLAnchorElement[] = [].slice.call(
		document.querySelectorAll("a[data-email]")
	)

	for (const a of elements) {
		const email = atob(a.getAttribute("data-email"))
		a.href = `mailto:${email}`
		a.textContent = email
	}
}
