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

