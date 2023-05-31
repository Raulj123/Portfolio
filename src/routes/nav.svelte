<script lang="ts">
	import { AppBar,LightSwitch} from '@skeletonlabs/skeleton';
  import {projects} from './projects.ts'
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

	let jobs: experience[] = [
		{
			title: 'CodeCampus | STEM Instructor | Irivne, CA',
			date: 'May 2022 – Aug 2022',
			content:
				'Instructed 20-25 students in programming, problem solving, and algorithm design using Minecraft Education Edition, with a 90% project completion rate. Developed and refined 10+ lesson plans and course materials tailored to meet the diverse learning needs of individual students. Conducted regular assessments of student performance, behavior, social development, and physical health, using various tools to identify areas for improvement.'
		},
		{
			title: 'Code Ninjas | STEM Instructor | Fullerton, CA ',
			date: 'Aug 2021 – Present',
			content:
				'Instructed small groups of children, usually with fewer than 20 students, ranging in age from 4 to 13, on coding and STEM conceptsusing various programming languages and tools, such as Scratch Jr., Scratch, Roblox Studio, Unity, and a game development platform (GDP) exclusive to the Code Ninjas curriculum which uses JavaScript.'
		}
	];
	
</script>


<svelte:window bind:innerWidth  />
{#if !mobile}
<LightSwitch class="ml-9 mt-5 "></LightSwitch>
<AppBar class= "flex justify-between items-center w-[75%] mx-auto py-6 rounded-md">
	
	<ul>
		{#each navInfo as navLink}
			<a on:click|preventDefault={() => scrollToSection(navLink.href)} class="hover:text-blue-500 ml-11 " style=" font-weight: bold;" href={navLink.href}>
				{navLink.title}</a
			>
		{/each}
	</ul>
	
	
</AppBar>
{:else}
<div class= " flex py-4 " style="padding-left:5vw; padding-right:5vw; justify-content:space-evenly; width:auto; align-items:center; padding:2rem;">
	
	<ul>
		{#each navInfo as navLink}
			<a on:click|preventDefault={() => scrollToSection(navLink.href)} class="hover:text-blue-500 ml-2 mr-2 " style=" font-weight: bold; font-size:1.1rem; text-decoration: none; color: #cdf0f6; " href={navLink.href}>
				{navLink.title}</a
			>
		{/each}
	</ul>
	
</div>
{/if}

