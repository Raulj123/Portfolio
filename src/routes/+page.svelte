<script lang="ts">
import { AppBar} from "@skeletonlabs/skeleton";
import type { navLink, projects } from "../app";
	


let navInfo : navLink[] = [
	{
	title: "About",
	href: "#about",
	},

	{
	title: "Projects",
	href: "#projects",
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

let projectDetail : projects[] = [
	{
		href:"https://github.com/Raulj123/Notess",
		image: "./Notess.png",
		title: "Notess",
		badges: ["PHP","MySQL"],
		badgesPic: ["./PhP.png","MySql.png"],
		content: "Notess is a web-based note-taking application that allows users to create accounts, log in securely, and save notes. The app is designed to provide a user-friendly platform for taking and storing notes. Users can retrieve and edit their notes at any time",
	},

	{
		href:"https://github.com/Raulj123/CodeSnippet",
		image:"./CodeShare.png",
		title:"CodeShare",
		badges: ["Svelte","TypeScript"],
		badgesPic: ["./svelte.png","./ts.png"],
		content:"Code share is a web-based code snippet manager that simplifies the process of storing and organizing code snippets. Users can add a title, programming language, and code snippet, which are displayed in a easy-to-read format using the Skeleton UI framework. The application allows users to delete unwanted code snippets or mark important ones as favorites.",
	},
	{
		href:"https://github.com/Raulj123/CodeSnippet",
		image:"./CodeShare.png",
		title:"filler",
		badges: ["PHP","MySQL"],
		badgesPic: ["sad"],
		content:"teststasd"
	}


];


</script>

<AppBar class="flex justify-between items-center w-[75%] mx-auto py-6 rounded-md">
	
	<ul>
		{#each navInfo as navLink }
		<a class="hover:text-blue-500 ml-11" style=" font-weight: bold;"href={navLink.href}> {navLink.title}</a>
	
		{/each}
	</ul>
</AppBar>

	<section id="about">
		<h1 class="text-center p-40" style=" font-weight: bold;">Hey, I'am Raul</h1>
		<img  class="text-center u-max-full-width centered-img h-40 w-25" style="margin-top: -150px; margin-bottom:20px;"src="/me.png" alt="3d pic of me ">

		<h3 class="text-center " style=" font-weight: bold;">CSUF'24 | Aspiring Software Enginer</h3>
	  </section>
	
	<hr>

	<section id="projects">
		<h1 class="text-center p-20"style=" font-weight: bold;">Projects</h1>
		<div class="cardContainer">
		{#each projectDetail as projects}
		
		<div class="card">
			<a href={projects.href} style="text-decoration: none; color: #cdf0f6;" target="_blank">
			<img class="text-center centered-img h-50 w-90" style="border-radius-bottom:9px;"src={projects.image} alt="Notess web screenshot">
		</a>
			<h3 class="text-left p-2" style=" font-weight: bold;">{projects.title}</h3>
			{#each projects.badges as badge,i}
			<span class="badge variant-filled ml-3 ">{badge}
			<img class="text-center u-max-full-width centered-img h-5 w-5 p-1" src={projects.badgesPic[i]} alt={badge}>
			</span>
			{/each}
			
			<p class="text-center py-3">{projects.content}</p>
		
		</div>

		{/each}
	</div>
	</section>
	

	




























<style>
	a{
		font-size: 20px;
	}
	.centered-img {
 		 display: block;
  		margin: 0 auto;
	}
	hr {
	
    margin-top: 100px;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
    }
	.card {
    display: block;
    max-width: 320px;
    padding-top: 0px;
    margin-right:20px;
	margin-left:20px;
	border-radius: 20px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease-in-out;
	transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.card:hover {
  		/* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);   didnt like how this one looked*/ 
		  transform: scale(1.15);
	}

	.cardContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
</style>


<!-- <AppBar class="with-1">
	<svelte:fragment slot="lead">Projects</svelte:fragment>
	<svelte:fragment slot="trail">About</svelte:fragment>
	<svelte:fragment slot="default">Experience</svelte:fragment>
	<svelte:fragment slot="default">Contact</svelte:fragment>
</AppBar> -->