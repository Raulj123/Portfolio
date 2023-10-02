<script lang="ts">
  import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
  import type {ToastSettings} from '@skeletonlabs/skeleton'

 function copyToClipboard(){
    const t: ToastSettings={
      message: 'raulj123#5611 copied to clipboard!',
    };
    toastStore.trigger(t)
  }
</script>


<hr>
  <section id="contact" class="md:block hidden">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5">Currently seeking a Software Engineer internship opportunity for the Summer/Fall of 2024.</h3>
	<div class="logo-cloud mx-auto  [&>.logo-item]:!bg-transparent grid-cols-4"style="width: 60%;">
		<a class="logo-item" href="https://github.com/Raulj123" target="_blank" style="color:var(--color-surface-500);" >
		<i class="fa-brands fa-github text-2l" />
		<span>GitHub</span>
		</a>

		<a class="logo-item" href="https://www.linkedin.com/in/rauljarquin/" target="_blank" style="color:var(--color-surface-500);">
			<i class="fa-brands fa-linkedin text-2l" />
			<span>LinkedIn</span>
		</a>

		<a class="logo-item" href="mailto:jarquinr121@gmail.com" target="_blank" style="color:var(--color-surface-500);">
			<i class="fa-solid fa-envelope text-2l" />
			<span>Mail</span>
		</a>
		<p class="logo-item me-2" style="color:var(--color-surface-500);">
        <i class="fa-brands fa-discord text-2l"/>
        <span on:click={copyToClipboard} on:keydown={copyToClipboard} use:clipboard={'raulj123#5611'} >raulj123#5611</span>
			</p>


	</div>
</section>

<section id="contact" class="md:hidden">
	<h1 class="text-center pt-20" style=" font-weight: bold;">Contact Me</h1>

	<h3 class="text-center  font-bold py-5" style="font-size:.93rem;">Currently seeking a Software Engineer internship opportunity for the Summer/Fall of 2024.</h3>
	<div class=" mx-auto  [&>.logo-item]:!bg-transparent  justify-center align-items-center flex flex-direction-row gap-10"style="width: 80%;">
		<a class="logo-item me-2" href="https://github.com/Raulj123" target="_blank"style="color:var(--color-surface-500);">
		
		<i class="fa-brands fa-github fa-lg" >
		<!-- <span style="font-size:.8rem;">GitHub</span> -->
	
		</a>
		

		<a class="logo-item me-2"  href="https://www.linkedin.com/in/rauljarquin/" target="_blank" style="color:var(--color-surface-500);">
			<i class="fa-brands fa-linkedin fa-lg" />
			<!-- <span style="font-size:.8rem;">LinkedIn</span> -->
		</a>

		<a class="logo-item me-2" href="mailto:jarquinr121@gmail.com" target="_blank" style="color:var(--color-surface-500);">
			<i class="fa-solid fa-envelope fa-lg"/>
			<!-- <span style="font-size:.8rem;">Mail</span> -->
		</a>
     <p class="logo-item me-2" style="color:var(--color-surface-500);">
        <i class="fa-brands fa-discord fa-lg " on:click={copyToClipboard} on:keydown={copyToClipboard} use:clipboard={'raulj123#5611'}/>
        <!-- <span style="font-size:.8rem;" on:click={copyToClipboard} on:keydown={copyToClipboard} use:clipboard={'raulj123#5611'}>raulj123#5611</span> -->
      </p>
	</div>
</section>


<style>
  a:hover{
    @apply text-blue-500;
  }
  hr {
		margin-top: 100px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	
	
</style>

