<script lang="ts">
	import { experience } from './experience';
	import TechStack from './techStack.svelte';
	import {
		AppBar,
		Toast,
		toastStore,
		Accordion,
		AccordionItem,
		LightSwitch,
		clipboard
	} from '@skeletonlabs/skeleton';
	let innerWidth = 0;
	$: mobile = innerWidth < 1080;
	$: {
		console.log(innerWidth);
	}
</script>

<svelte:window bind:innerWidth />
<hr>
{#if !mobile}
	<section id="experience">
		<h1 class="text-center p-10" style=" font-weight: bold;">Experience</h1>
		<div class="Whole">
			<div class="exp_sec">
				{#each experience as experience}
					<div class="experience">
						<div class="line" />
						<img class="logo" src={experience.img} alt={experience.img} />
						<div class="info">
							<h5 class="title">
								<span class="position">{experience.title}</span>
								<span class="at">@</span>
								<a class="company" href={experience.href}>{experience.company}</a>
							</h5>
							<p class="date">{experience.date}</p>
							<p class="description">{experience.content}</p>

							<h6>Core Technologies</h6>
							<div class="technologies">
								{#each experience.badges as badge, i}
									<img src={experience.badges[i]} alt={experience.badges[i]} class="badge_img" />
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="tech_sec">
				<TechStack />
			</div>
		</div>
	</section>
{:else}
	<section id="experience">
		<h1 class="text-center p-10" style=" font-weight: bold;">Experience</h1>
		{#each experience as experience}
			<div class="experience">
				<div
					class="line"
					style="	transform: translateX(2.8rem);
"
				/>
				<img
					class="logo"
					src={experience.img}
					alt={experience.img}
					style="width:3.5rem; height:3.5rem;"
				/>
				<div class="info">
					<h5 class="title">
						<span class="position">{experience.title}</span>
						<span class="at">@</span>
						<a class="company" href={experience.href}>{experience.company}</a>
					</h5>
					<p class="date">{experience.date}</p>
					<p class="description" style="-webkit-line-clamp: 10;">{experience.content}</p>

					<h6>Core Technologies</h6>
					<div class="technologies">
						{#each experience.badges as badge, i}
							<img src={experience.badges[i]} alt={experience.badges[i]} class="badge_img" />
						{/each}
					</div>
				</div>
			</div>
		{/each}
		<div class="tech_sec w-5/6 mt-5" style="padding-left: 2.9rem;">
			<TechStack />
		</div>
	</section>
{/if}

<style>
	.Whole {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
		padding: 1rem;
		width: 95vw;
		margin: 0 auto;
		grid-column-gap: 1rem;
	}
	.exp_sec {
		grid-column-start: span 2;
	}
	.tech_sec {
		grid-column-start: 3;
	}
	.experience {
		padding-left: 0rem;
		display: flex;
		gap: 1rem;
	}
	.line {
		background: #808080;
		transform: translateX(3.3rem);
		width: 2px;
		z-index: 0;
		flex-grow: 0;
	}
	h5.title {
		font-size: 1.2rem;
		margin: 0.5rem 0;
		font-weight: 600;
	}
	p.description {
		font-size: 0.8rem;
	}
	.technologies img.badge_img {
		width: auto;
		height: auto;
		border-radius: none;
		filter: none;
	}
	p.date {
		margin: 0.25rem 0;

		font-style: italic;
		font-size: 0.8rem;
	}
	img.logo {
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 50%;
		z-index: 2;
		flex-grow: 0;
		border: 2px solid #808080;
		transition: all 0.25s ease-in-out;
	}
	img.logo:hover {
		transform: scale(1.1);
	}
	.info {
		flex-grow: 1;
		padding-bottom: 1rem;
	}
	h6 {
		margin: 0.5rem 0;
		font-size: 1rem;
		font-weight: bold;
	}

	p {
		font-weight: light;
		font-size: 0.8rem;
		min-width: 3rem;
		max-width: 50rem;
		margin: 0.2rem 0;

		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-clamp: 2;
		overflow: hidden;
	}

	.technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		transition: all 0.25s ease-in-out;
	}
	.technologies .badge_img:hover {
		transform: scale(1.1);
	}
	hr {
		margin-top: 100px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
</style>
