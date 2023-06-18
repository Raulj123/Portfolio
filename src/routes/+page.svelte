<script lang="ts">
	import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
  import type {ToastSettings} from '@skeletonlabs/skeleton'
  import Nav from './nav.svelte' 
  import Hero from './hero.svelte'
  import Projects from './projects.svelte'
  import Experience from './experience.svelte'
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
	
	
</script>

<Nav/>
<Hero/>
<Projects/>
<Experience/>
<Toast/>


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
