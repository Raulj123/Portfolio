<script lang="ts">
	import { AppBar, LightSwitch, Modal, modalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent } from '@skeletonlabs/skeleton';
	let isMenuOpen = false;
	function openMenu(event: MouseEvent) {
		isMenuOpen = !isMenuOpen;
		const element = event.currentTarget as HTMLElement;
		element.classList.toggle('change');
		console.log(element);
		const dropDownMenu = document.querySelector('.dropdown-container') as HTMLElement | null;
		if (dropDownMenu) {
			dropDownMenu.classList.toggle('open');
			console.log(dropDownMenu);
			const isOpen = dropDownMenu.classList.contains('open');
		}
	}

	function handleKeyPress(event: KeyboardEvent) {
		// Check if the pressed key is "Enter" or "Space"
		if (event.key === 'Enter' || event.key === 'Space') {
			// Your handleKeyPress logic here
		}
	}

	function scrollToSection(id: string): void {
		const section = document.getElementById(id);

		if (section) {
			if (id == 'about') {
				const modal: ModalSettings = {
					type: 'alert',
					title: 'About me',
					body: "I'm a first-gen student from Mexico City 🇲🇽 who moved to California when I was just a baby. Fun fact: I have a twin! I love staying active by working out, playing soccer, and hanging out with friends. (Me in the upside down bruh🌀)",
					image: '/me.jpg'
				};

				modalStore.trigger(modal);
			}
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	let navInfo = [
		{
			title: 'About',
			href: 'about'
		},

		{
			title: 'Projects',
			href: 'projects'
		},
		{
			title: 'Experience',
			href: 'experience'
		},
		{
			title: 'Contact',
			href: 'contact'
		}
	];
</script>

<Modal />
<div class="top-strip">
	<!-- <img src="./flag/mexico-flag.jpg" alt="mx-flag" class="w-[100%]" /> -->
</div>
<AppBar class="mt-1">
	<svelte:fragment slot="lead"><LightSwitch /></svelte:fragment>

	<ul class="text-center md:block hidden">
		{#each navInfo as navLink}
			<a
				on:click|preventDefault={() => scrollToSection(navLink.href)}
				class="hover:text-blue-500 ml-20"
				style="font-weight: bold;"
				href={navLink.href}
			>
				{navLink.title}</a
			>
		{/each}
	</ul>

	<svelte:fragment slot="trail">
		<div class="md:hidden">
			<div class="menu-icon" on:click={openMenu} on:keydown={handleKeyPress}>
				<div class:open={isMenuOpen} id="bar1" />
				<div class:open={isMenuOpen} id="bar2" />
				<div class:open={isMenuOpen} id="bar3" />
			</div>
		</div>
	</svelte:fragment>
</AppBar>
<nav class:open={isMenuOpen} class="md:hidden card">
	<ul class="nav-ul">
		{#each navInfo as navLink}
			<li>
				<a
					on:click|preventDefault={() => scrollToSection(navLink.href)}
					on:click={() => (isMenuOpen = false)}
					on:keydown={() => (isMenuOpen = false)}
					class="hover:text-blue-500"
					style="font-weight: bold; text-decoration:none;"
					href={navLink.href}
				>
					{navLink.title}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav.open {
		display: block;
		position: fixed !important;
		border-radius: 0;
		z-index: 100;
		width: 100%;
		overflow: hidden;
	}
	nav {
		display: none;
	}
	.nav-ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 5vh;
		margin-top: 2vh;
		margin-bottom: 4vh;
		list-style: none;
	}
	#bar1 {
		width: 30px;
		height: 3px;
		background-color: white;
		margin: 6px 0;
		transition: 0.4s;
	}
	#bar2 {
		width: 30px;
		height: 3px;
		background-color: pink;
		margin: 6px 0;
		transition: 0.4s;
	}
	#bar3 {
		width: 30px;
		height: 3px;
		background-color: white;
		margin: 6px 0;
		transition: 0.4s;
	}
	.menu-icon .open {
		transform: translate(0, 10px) rotate(-360deg);
	}

	.dropdown-container {
		margin-top: 10px;
		position: relative;
		right: 2rem;
		top: 60px;
		width: 300px;
		background-color: rgb(211, 15, 15);
		border-radius: 10px;
		transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			display 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		z-index: 9999;
	}

	.dropdown-container li {
		padding: 0.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (min-width: 768px) {
		nav.open {
			display: none;
		}
	}
	.top-strip {
		background-image: linear-gradient(
			102.02deg,
			#006341 0%,
			#006341 33.33%,
			#ffffff 33.33%,
			#ffffff 66.67%,
			#c8102e 66.67%,
			#c8102e 100%
		);
		background-repeat: no-repeat;
		background-repeat: no-repeat;
		display: flex;
		height: 0.5rem;
	}
</style>
