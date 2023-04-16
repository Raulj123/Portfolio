<script lang="ts">
import { AppBar } from "@skeletonlabs/skeleton";
import type { navLink } from "../app";


let navInfo : navLink[] = [
	{
	title: "About",
	href: "#about",
	},

	{
	title: "Projects",
	href: "Projects",
	},
	{
	title:"Experience",
	href: "Experience",
	},
	{
		title: "Contact",
		href:"Contact",
	}
	
];
</script>

<AppBar class="flex justify-between items-center w-[75%] mx-auto py-6 rounded-md">
	
	<ul>
		{#each navInfo as navLink }
		<a class="hover:text-blue-500 ml-11" href={navLink.href}> {navLink.title}</a>
	
		{/each}
	</ul>
</AppBar>

	<section id="about">
		<h2 class="text-center p-10">Hey, I'am Raul</h2>
		<img  class="text-center u-max-full-width centered-img h-40 w-25" style="margin-top:-40px; margin-bottom:10px;"src="/me.png" alt="3d pic of me ">

		<h3 class="text-center ">CSUF'24 | Aspiring Software Enginer</h3>
	  </section>
	


	  

<style>
	a{
		font-size: 20px;
	}
	.centered-img {
  display: block;
  margin: 0 auto;
}

</style>


<!-- <AppBar class="with-1">
	<svelte:fragment slot="lead">Projects</svelte:fragment>
	<svelte:fragment slot="trail">About</svelte:fragment>
	<svelte:fragment slot="default">Experience</svelte:fragment>
	<svelte:fragment slot="default">Contact</svelte:fragment>
</AppBar> -->