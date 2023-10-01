
<section id="about" class="md:block hidden">
	<h1 class="text-center p-40" style=" font-weight: bold;">Hey, I'm Raul</h1>

	<img
		class="floating text-center u-max-full-width centered-img h-40 w-25"
		style="margin-top: -150px; margin-bottom:20px;"
		src="/me.png"
		alt="3d pic of me "
	/>

	<h3 class="text-center" style=" font-weight: bold;">CSUF'24 | Aspiring Software Enginer</h3>

	<div
		class="logo-cloud mx-auto [&>.logo-item]:!bg-transparent grid-cols-1 lg:!grid-cols-1 gap-2.5"
	>
		<a class="logo-item" href="./master_resume.pdf" target="_blank">
			<i class="fa-solid fa-file text-2l" />
			<span class="gradient-heading">My Resume</span>
		</a>
	</div>
</section>

<section id="about" class="md:hidden">
	<h1 class="p-20 justify-center flex" style=" font-weight: bold; font-size: 1.8rem;">
		Hey, I'am Raul
	</h1>
	<img
		class="floating text-center centered-img h-28 w-23"
		style="margin-top: -70px; margin-bottom:15px;"
		src="/me.png"
		alt="3d pic of me "
	/>
	<h3 class="text-center" style=" font-weight: bold; font-size:1.2rem">
		CSUF'24 | Aspiring Software Enginer
	</h3>

	<div class=" text-center [&>.logo-item]:!bg-transparent flex justify-center">
		<a class="logo-item" style="" href="./master_resume.pdf" target="_blank">
			<i class="fa-solid fa-file text-l" />
			<span class="gradient-heading" style="font-size:1.1rem;">My Resume</span>
		</a>
	</div>
</section>

<hr />

<style>
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
	.floating {
		animation: floating 3000ms ease-in-out infinite;
	}
	@keyframes floating {
		0% {
			transform: translate(0, opx);
		}
		50% {
			transform: translate(0, 10px);
		}
		100% {
			transform: translate(0, -0px);
		}
	}
	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}
		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}
</style>
