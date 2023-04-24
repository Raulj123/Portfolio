<script lang="ts">
	import { AppBar, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { experience, navLink, projects } from '../app';
	let innerWidth = 0
	

	$: mobile = innerWidth < 1080; 
	$:{
		console.log(innerWidth)
	}
	
	function scrollToSection(id: string): void {
    const section = document.getElementById(id);
	if(section){
		section.scrollIntoView({ behavior: 'smooth' });
	}
  
  	}

	let navInfo: navLink[] = [
		{
			title: 'About',
			href: 'about',
		},

		{
			title: 'Projects',
			href: 'projects',
		},
		{
			title: 'Experience',
			href: 'experience',
		},
		{
			title: 'Contact',
			href: 'contact',
		}
	];

	let projectDetail: projects[] = [
		{
			href: 'https://github.com/Raulj123/Notess',
			image: './Notess.png',
			title: 'Notess',
			badges: ['PHP', 'MySQL'],
			badgesPic: ['./php.svg', 'MySql.svg'],
			content:
				'Notess is a web-based note-taking application that allows users to create accounts, log in securely, and save notes. The app is designed to provide a user-friendly platform for taking and storing notes. Users can retrieve and edit their notes at any time'
		},

		{
			href: 'https://github.com/Raulj123/CodeSnippet',
			image: './CodeShare.png',
			title: 'CodeShare',
			badges: ['Svelte', 'TypeScript'],
			badgesPic: ['./svelte.png', './ts.svg'],
			content:
				'Code share is a web-based code snippet manager that simplifies the process of storing and organizing code snippets. Users can add a title, programming language, and code snippet, which are displayed in a easy-to-read format using the Skeleton UI framework. The application allows users to delete unwanted code snippets or mark important ones as favorites.'
		},
		{
			href: 'https://github.com/Raulj123/c-vis',
			image: './vis.png',
			title: 'Sorting Visualizer',
			badges: ['C++', 'SDL'],
			badgesPic: ['./c.svg', 'SDL.svg'],
			content:
				'Program that implements a visualization of various sorting algorithms. The user is prompted to select a sorting algorithm and the program generates a vector of 100 random integers. The chosen sorting algorithm is then applied to the vector, and at each step of the algorithm, the program visually displays the current state of the vector as a series of vertical lines on a window.'
		}
	];

	let jobs: experience[] = [
		{
			title: 'CodeCampus | STEM Instructor | Irivne, CA',
			date: 'May 2022 – Aug 2022',
			content:
				'Instructed 20-25 students in programming, problem solving, and algorithm design using Minecraft Education Edition, with a 90% project completion rate. Developed and refined 10+ lesson plans and course materials tailored to meet the diverse learning needs of individual students. Conducted regular assessments of student performance, behavior, social development, and physical health, using various tools to identify areas for improvement.'
		},
		{
			title: 'Code Ninjas | STEM Instructor | Fullerton, CA  Aug 2021 – Present',
			date: 'Aug 2021 – Present',
			content:
				'Instructed small groups of children, usually with fewer than 20 students, ranging in age from 4 to 13, on coding and STEM conceptsusing various programming languages and tools, such as Scratch Jr., Scratch, Roblox Studio, Unity, and a game development platform (GDP) exclusive to the Code Ninjas curriculum which uses JavaScript.'
		}
	];
	
</script>

{#if mobile}
  <p>You are on a mobile device</p>
{:else}
  <p>You are not on a mobile device</p>
{/if}
<svelte:window bind:innerWidth  />
{#if !mobile}
<AppBar class= "flex justify-between items-center w-[75%] mx-auto py-6 rounded-md">
	
	<ul >
		{#each navInfo as navLink}
			<a on:click|preventDefault={() => scrollToSection(navLink.href)} class="hover:text-blue-500 ml-11" style=" font-weight: bold;" href={navLink.href}>
				{navLink.title}</a
			>
		{/each}
	</ul>
	
</AppBar>
{:else}
<AppBar class= "flex justify-center text-center rounded-md w-[25%]">
	
	<ul >
		{#each navInfo as navLink}
			<a on:click|preventDefault={() => scrollToSection(navLink.href)} class="hover:text-blue-500 ml-11" style=" font-weight: bold;" href={navLink.href}>
				{navLink.title}</a
			>
		{/each}
	</ul>
	
</AppBar>
{/if}

<section id="about">
	<h1 class="text-center p-40" style=" font-weight: bold;">Hey, I'am Raul</h1>
	<img
		class="text-center u-max-full-width centered-img h-40 w-25"
		style="margin-top: -150px; margin-bottom:20px;"
		src="/me.png"
		alt="3d pic of me "
	/>

	<h3 class="text-center" style=" font-weight: bold;">CSUF'24 | Aspiring Software Enginer</h3>
	
	<div class="logo-cloud mx-auto [&>.logo-item]:!bg-transparent grid-cols-1 lg:!grid-cols-1 gap-2.5 ">
	<a class="logo-item" href="./master_resume.pdf" target="_blank" >
		<i class="fa-solid fa-file text-2l" />
		<span>My Resume</span>
	</a>
	</div>
</section>

<hr />

<section id="projects">
	<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
	<div class="cardContainer">
		{#each projectDetail as projects}
			<div class="card">
				<a href={projects.href} style="text-decoration: none; color: #cdf0f6;" target="_blank">
					<img
						class="text-center centered-img h-50 w-90"
						style="border-radius-bottom:9px;"
						src={projects.image}
						alt="Notess web screenshot"
					/>
				</a>
				<h3 class="text-left p-2" style=" font-weight: bold;">{projects.title}</h3>
				{#each projects.badges as badge, i}
					<span class="badge variant-filled ml-3"
						>{badge}
						<img
							class="text-center u-max-full-width centered-img h-5 w-5 p-1"
							style="background-color: transparent;"
							src={projects.badgesPic[i]}
							alt={badge}
						/>
					</span>
				{/each}

				<p class="text-center py-3">{projects.content}</p>
			</div>
		{/each}
	</div>
	<!-- <a href="https://github.com/Raulj123"style="text-decoration: none; color: #cdf0f6; " >See more on my GitHub</a> -->
</section>

<hr />

<section id="experience">
	<h1 class="text-center p-20" style=" font-weight: bold;">Experience</h1>
	<Accordion class="card py-6 w-[65%] mx-auto rounded-md m-20">
		{#each jobs as experience}
			<AccordionItem>
				<svelte:fragment slot="lead">
					<i class="fas fa-laptop-code text-xl w-6 text-center" />
				</svelte:fragment>
				<svelte:fragment slot="summary"
					><p class="font-bold">{experience.title}<br />{experience.date}</p></svelte:fragment
				>
				<svelte:fragment slot="content">{experience.content}</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</section>

<hr />
<section id="contact">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5"> Currently looking for Summer 2023 Software Engineer internship</h3>
	<div class="logo-cloud mx-auto [&>.logo-item]:!bg-transparent grid-cols-1 lg:!grid-cols-3 gap-2.5 ">
		<a class="logo-item" href="https://github.com/Raulj123" target="_blank" >
		<i class="fa-brands fa-github text-2l" />
		<span>GitHub</span>
		</a>

		<a class="logo-item" href="https://www.linkedin.com/in/rauljarquin/" target="_blank" >
			<i class="fa-brands fa-linkedin text-2l" />
			<span>LinkedIn</span>
		</a>

		<a class="logo-item" href="mailto:jarquinr121@gmail.com" target="_blank" >
			<i class="fa-solid fa-envelope text-2l" />
			<span>Mail</span>
		</a>

	</div>
</section>



<style>

	a {
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
		max-width: 320px;
		padding-top: 0px;
		margin-right: 20px;
		margin-left: 20px;
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
	.logo-cloud{
		width:30em;
		border-radius: 0.5rem;
	}
	.logo-item {
  border-radius: 0.5rem;
	}
	.logo-item:hover {
  background-color: #f2f2f2; /* change background color when hovering */
  color:#3B82F6; /* change text color when hovering */
}

</style>
