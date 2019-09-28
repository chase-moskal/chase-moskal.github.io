
interface PhotoSlide {
	url: string
	caption: string
}

const roll: PhotoSlide[] = [
	{
		url: "/assets/brim/brimlol-01.jpg",
		caption: "I love the story this peice tells"
	},
	{
		url: "/assets/brim/brimlol-02.jpg",
		caption: "Here we see Satan making some kind of a deal with the Pope"
	},
	{
		url: "/assets/brim/brimlol-03.jpg",
		caption: "Care for some pretzels?"
	},
	{
		url: "/assets/brim/brimlol-04.jpg",
		caption: "The classic bread boys are back"
	},
	{
		url: "/assets/brim/brimlol-05.jpg",
		caption: "The bravery of these blue-clad peoples, to willingly confront this cave dragon, is an inspiration to us all"
	},
	{
		url: "/assets/brim/brimlol-06.jpg",
		caption: "Let us turn over our hobgoblins to the clergy"
	},
	{
		url: "/assets/brim/brimlol-07.jpg",
		caption: "What a beautiful curled shield, it's like a sea shell"
	},
	{
		url: "/assets/brim/brimlol-08.jpg",
		caption: "The pen is mightier than the sword"
	},
	{
		url: "/assets/brim/brimlol-09.jpg",
		caption: "Keep your cool"
	}
]

function getUrlValue(urlKey: string, context: string = location.search): string {
	if (!context) return undefined
	for (const v of context.substring(1).split("&")) {
		if (v.includes("=")) {
			const [key, value] = v.split("=")
			if (decodeURIComponent(key) == urlKey)
				return decodeURIComponent(value)
		}
	}
}

const slideOffset = parseInt(getUrlValue("slide-offset")) || 0
const oneDay = 1000 * 60 * 60 * 24
const now = Date.now() + (oneDay * slideOffset)
const days = Math.floor(now / 8.64e7)

const slide: PhotoSlide = roll[days % roll.length]
const img = document.querySelector<HTMLImageElement>("img.photoslide")
const p = document.querySelector<HTMLParagraphElement>("figcaption p:first-of-type")
img.src = slide.url
p.textContent = `"${slide.caption}"`
