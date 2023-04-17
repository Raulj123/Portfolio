// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
export interface navLink{
	title:string
	href:string 
}

export interface projects{
	href:string
	image:string
	title:string
	badges:string[]
	badgesPic: string[]
	content:string
}

export interface experience {
	title: string
	date: string
	content: string 
}