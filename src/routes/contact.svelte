<script lang="ts">
  import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
  import type {ToastSettings} from '@skeletonlabs/skeleton'
let innerWidth = 0;
	$: mobile = innerWidth < 1080;
 function copyToClipboard(){
    const t: ToastSettings={
      message: 'raulj123#5611 copied to clipboard!',
    };
    toastStore.trigger(t)
  }
</script>

<svelte:window bind:innerWidth />

{#if !mobile}
  <section id="contact">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5">Currently seeking a Software Engineer internship opportunity for the Summer/Fall of 2024.</h3>
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

	<h3 class="text-center  font-bold py-5" style="font-size:.93rem;">Currently seeking a Software Engineer internship opportunity for the Summer/Fall of 2024.</h3>
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
  a:hover{
    color:#EC4899;
  }
</style>

