<script lang="ts">
	import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
	import type { experience, navLink, projects } from '../app';
  import type {ToastSettings} from '@skeletonlabs/skeleton'
  import Nav from './nav.svelte' 
  import Hero from './hero.svelte'
  import Projects from './projects.svelte'
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
<Hero/>
<Projects/>
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
	hr {
		margin-top: 100px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}

</style>
