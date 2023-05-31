<script lang="ts">
	import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
	import type { experience, navLink, projects } from '../app';
  import type {ToastSettings} from '@skeletonlabs/skeleton'
  import {projects} from './projects.ts'
  import Nav from './nav.svelte' 
	let innerWidth = 0
  function pokeMe(){
    const t: ToastSettings ={
      message: 'Probably playing Siege or coding 🤷',
    };
    toastStore.trigger(t)
    //console.log("test")
  }
  
  function copyToClipboard(){
    const t: ToastSettings={
      message: 'raulj123#5611 copied to clipboard!',
    };
    toastStore.trigger(t)
  }
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

<Nav/>
{#if !mobile}
<section id="about">
	<h1 class="text-center p-40 " style=" font-weight: bold;">Hey, I'am Raul</h1>
	<img
		class="floating text-center u-max-full-width centered-img h-40 w-25"
		style="margin-top: -150px; margin-bottom:20px;"
		src="/me.png"
		alt="3d pic of me "
    on:click={pokeMe}
	/>

	<h3 class="text-center" style=" font-weight: bold;">CSUF'24 | Aspiring Software Enginer</h3>
	
	<div class="logo-cloud mx-auto [&>.logo-item]:!bg-transparent grid-cols-1 lg:!grid-cols-1 gap-2.5 ">
	<a class="logo-item" href="./master_resume.pdf" target="_blank" >
		<i class="fa-solid fa-file text-2l" />
		<span class="gradient-heading">My Resume</span>
	</a>
	</div>
</section>
{:else}
<section id="about">
	<h1 class="p-20 justify-center flex " style=" font-weight: bold; font-size: 1.8rem;">Hey, I'am Raul</h1>
	<img
		class="floating text-center  centered-img h-28 w-23"
		style="margin-top: -70px; margin-bottom:15px;"
		src="/me.png"
		alt="3d pic of me "
    on:click={pokeMe}
	/>

	<h3 class="text-center" style=" font-weight: bold; font-size:1.2rem">CSUF'24 | Aspiring Software Enginer</h3>
	
	<div class=" text-center [&>.logo-item]:!bg-transparent flex justify-center  ">
	<a class="logo-item " style="" href="./master_resume.pdf" target="_blank" >
		<i class="fa-solid fa-file text-l  " />
		<span class = "gradient-heading" style="font-size:1.1rem;">My Resume</span>
	</a>
	</div>
</section>
{/if}


<hr />


{#if !mobile}
<section id="projects">
	<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
	<div class="cardContainer">
		{#each projects as projects}
			<div class="card">
				<a href={projects.href} style="text-decoration: none; color: #cdf0f6;" target="_blank">
					<img
						class="centered-img h-45 w-90 "
						style="border-radius-bottom:9px; object-fit: contain;"
						src={projects.image}
						alt="project"
					/>
				</a>
				<h3 class="text-left p-2" style=" font-weight: bold;">{projects.title}</h3>
				{#each projects.badges as badge, i}
					<span class="badge variant-filled ml-3 m-1 h-6 w-100%"
						>{badge}
						<img
							class="text-center u-max-full-width centered-img h-5 w-5 p-1 "
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
{:else}
<section id="projects">
	<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
	<div class="cardContainer">
		{#each projects as projects}
			<div class="cardMobile">
				<a href={projects.href} style="text-decoration: none; color: #cdf0f6;" target="_blank">
					<img
						class="text-center centered-img h-35 w-75"
						style="border-radius-bottom:9px;"
						src={projects.image}
						alt="Notess web screenshot"
					/>
				</a>
				<h3 class="text-left p-2" style=" font-weight: bold; font-size:1.1rem;">{projects.title}</h3>
				{#each projects.badges as badge, i}
					<span class="badge variant-filled ml-3" style="font-size:.5rem;"
						>{badge}
						<img
							class="text-center u-max-full-width centered-img h-4 w-4 p-1"
							style="background-color: transparent;"
							src={projects.badgesPic[i]}
							alt={badge}
						/>
					</span>
				{/each}

				<p class="text-center py-3" style="font-size:.8rem;">{projects.content}</p>
			</div>
		{/each}
	</div>
	<!-- <a href="https://github.com/Raulj123"style="text-decoration: none; color: #cdf0f6; " >See more on my GitHub</a> -->
</section>
{/if}


<hr />

{#if !mobile}
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
{:else}
<section id="experience">
	<h1 class="text-center p-20" style=" font-weight: bold;">Experience</h1>
	<Accordion class="card py-6 w-[85%] mx-auto rounded-md m-10 ">
		{#each jobs as experience}
			<AccordionItem>
				<svelte:fragment slot="lead">
					<i class="fas fa-laptop-code text-xl w-6 text-center" />
				</svelte:fragment>
				<svelte:fragment slot="summary"
					><p class="font-bold" style="font-size: .9rem;">{experience.title}<br />{experience.date}</p></svelte:fragment
				>
				<svelte:fragment slot="content" >
				<p style="font-size:.8rem;">{experience.content}</p>
				</svelte:fragment>
			</AccordionItem>
		{/each}
	</Accordion>
</section>


{/if}


<hr />

{#if !mobile}
<section id="contact">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5"> Currently looking for Summer 2023 Software Engineer internship</h3>
	<div class="logo-cloud mx-auto  [&>.logo-item]:!bg-transparent grid-cols-4"style="width: 60%;">
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
    <a class="logo-item"  >
        <i class="fa-brands fa-discord text-2l"/>
        <span on:click={copyToClipboard} use:clipboard={'raulj123#5611'}>raulj123#5611</span>
    </a>


	</div>
</section>
{:else}
<section id="contact">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5" style="font-size:.93rem;"> Currently looking for Summer 2023 Software Engineer internship</h3>
	<div class="logo-cloud mx-auto  [&>.logo-item]:!bg-transparent  justify-center align-items-center grid-cols-2"style="width: 100%;">
		<a class="logo-item " href="https://github.com/Raulj123" target="_blank" >
		<i class="fa-brands fa-github text-s" style="margin-left:0px;" />
		<span style="font-size:.8rem;">GitHub</span>
		</a>

		<a class="logo-item "  href="https://www.linkedin.com/in/rauljarquin/" target="_blank" >
			<i class="fa-brands fa-linkedin text-s" style="margin-left:0px;" />
			<span style="font-size:.8rem;">LinkedIn</span>
		</a>

		<a class="logo-item " href="mailto:jarquinr121@gmail.com" target="_blank" >
			<i class="fa-solid fa-envelope text-s" style="margin-left:0px;" />
			<span style="font-size:.8rem;">Mail</span>
		</a>
     <p class="logo-item " >
        <i class="fa-brands fa-discord text-s" style="margin-left:0px;"/>
        <span style="font-size:.8rem;" on:click={copyToClipboard} use:clipboard={'raulj123#5611'}>raulj123#5611</span>
      </p>
	</div>
</section>
{/if}


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
		margin-bottom: 25px;
		border-radius: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in-out;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.cardMobile{
		max-width: 250px;
		padding-top: 0px;
		margin-right: 20px;
		margin-left: 20px;
		margin-bottom: 25px;
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
.floating{
    animation: floating 3000ms ease-in-out infinite;
  }
  @keyframes floating{
    0%{
      transform: translate(0,opx);
    }
    50%{
      transform: translate(0,10px);
    }
    100%{
      transform: translate(0, -0px);
    }
  }
</style>
