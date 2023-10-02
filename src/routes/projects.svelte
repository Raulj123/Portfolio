<script lang="ts">
	import { projects } from './projects';
	import { onMount } from 'svelte';
	let innerWidth = 0;

	$: mobile = innerWidth < 1080;
	function getRandomColor() {
		const colors = ['blue', 'green', 'red', 'orange', 'purple', 'pink', 'yellow', 'cyan', 'teal'];
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}
	let aggregatedData: { [key: string]: any } = {};
	// onMount(async () => {
	// 	try {
	// 		const url = `https://api.github.com/users/Raulj123/repos`;
	// 		const result = await fetch(url);
	// 		const repo_data = (await result.json()) as any[];
	// 		let repo_counter = 0;
	// 		repo_data.forEach((repo) => {
	// 			if (repo_counter >= 6) {
	// 				return;
	// 			}
	// 			const currentDate = new Date();
	// 			const createdDate = new Date(repo.created_at);
	// 			const updatedDate = new Date(repo.updated_at);
	// 			const month_create = createdDate.toLocaleString('en-US', { month: 'short' });
	// 			const year_create = createdDate.getUTCFullYear();

	// 			const timeDiff = currentDate.getTime() - updatedDate.getTime();
	// 			const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
	// 			let formattedUpdateDate: any;

	// 			if (daysDiff <= 1) {
	// 				formattedUpdateDate = 'Updated today';
	// 			} else if (daysDiff <= 30) {
	// 				formattedUpdateDate = `Updated ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
	// 			} else {
	// 				const monthsDiff = Math.floor(daysDiff / 30);
	// 				formattedUpdateDate = `Updated ${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
	// 			}

	// 			const formattedCreatedDate = `Created ${month_create}, ${year_create}`;

	// 			aggregatedData[repo.name] = {
	// 				description: repo.description || null,
	// 				languages: repo.language || null,
	// 				created: formattedCreatedDate,
	// 				updated: formattedUpdateDate,
	// 				href: repo.html_url || null,
	// 				demo: repo.homepage || null,
	// 				stars: repo.stargazers_count || null,
	// 				forks: repo.forks || null
	// 			};
	// 			repo_counter++;
	// 		});
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// });
</script>

<svelte:window bind:innerWidth />
<!-- {#if !mobile} -->
<section id="projects">
	<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
	<div class="main_projects_container">
		{#each projects as project}
			<div class="card main_card">
				<img
					class="centered_img_main"
					style="max-width: 30%; height: auto; background-position: center; background-size: cover; border-radius:0;"
					src={project.image}
					alt="project"
				/>

				<div style="display: flex; flex-direction: column; justify-content:center flex-wrap: wrap;">
					<h3 class="gradient-heading p-2 m-1" style=" font-weight: bold;">{project.title}</h3>
					<div class="main_content-container">
						<p class="m-1 p-2">{project.content}</p>
					</div>
					<div
						style="display: flex; flex-direction: row; margin-top: 10px; flex-wrap: wrap; align-items:center; margin-bottom:10px;"
					>
						{#each project.badges as badge, i}
							<!-- <span class="badge variant-filled ml-3 m-1 h-6 w-100%"
							>{badge} -->

							<img
								class="m-1 p-3 dodo"
								style="border-radius:4px;"
								src={project.badgesPic[i]}
								alt={badge}
							/>
							<!-- </span> -->
						{/each}
						<div class="ml-auto">
							{#if project.demo }
							<a
								href={project.demo}
								class="btn btn-sm variant-filled-secondary"
								style="font-size:0.8rem;  margin-left: auto; margin-right:5px;"
							>
								<i style="margin-right: 5px;" class="fa-solid fa-globe" />View Demo
							</a>
							{/if}
							<a
								href={project.repo}
								class="btn btn-sm variant-filled-primary"
								style="font-size:0.8rem;  margin-right: 10px;"
							>
								<i style="margin-right: 5px;" class="fa-brands fa-github-alt" />
								Project Repo
							</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<!-- <h3 class="text-center">Explore My GitHub Portfolio</h3>
	<div class="project_grid">
		{#each Object.keys(aggregatedData) as repoName}
			<div class="cardContainer">
				<div class="card w-[100%]" style="width: 100%;">
					<img
						class="centered-img"
						style="height:125px; width:100%; background-position:center;background-size: 100%;transition: all 0.15s ease-in-out;"
						src=""
						alt="project"
					/>
					<div class="whole_content" style="height: 155px;">
						<h3 class="repo_name gradient-heading p-2">{repoName}</h3>
						<p class="content_p p-2">{aggregatedData[repoName].description}</p>
						<div class="flex flex-row">
							<div class="basis-1/2">
								{#if aggregatedData[repoName].languages}
									<img
										src={`https://img.shields.io/badge/${encodeURIComponent(
											aggregatedData[repoName].languages
										)}-${getRandomColor()}?logo=${encodeURIComponent(
											aggregatedData[repoName].languages
										)}`}
										alt={aggregatedData[repoName].languages}
										class="p-2 mt-2"
									/>
								{:else}
									<p class="content_p p-2">No language specified</p>
								{/if}
							</div>
							<div class="basis-1/2 p-2">
								{#if aggregatedData[repoName].forks}
									<i class="fa-solid fa-code-branch text-s me-2" />{aggregatedData[repoName].forks}
								{/if}
								{#if aggregatedData[repoName].stars}
									<span class="mx-2" />
									<i class="fa-solid fa-star text-s me-2" />{aggregatedData[repoName].stars}
								{/if}
							</div>
							<div class="basis-1/2">
								<p class="mt-2 content_p text-sm opacity-50" style="font-size:.7rem;">
									{aggregatedData[repoName].created}
								</p>
								<p class="content_p me-2 mb-2 opacity-50" style="font-size:.7rem;">
									{aggregatedData[repoName].updated}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div> -->
</section>

<!-- {:else}
	<section id="projects">
		<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
		<div class="cardContainer">
			{#each projects as projects}
				<div class="cardMobile">
					<a href={projects.href} style="text-decoration: none; color: #cdf0f6;" target="_blank">
						<img
							class="text-center centered-img h-30 w-75"
							style="border-radius-bottom:9px;"
							src={projects.image}
							alt={projects.title}
						/>
					</a>
					<h3 class="text-left p-2" style=" font-weight: bold; font-size:1.1rem;">
						{projects.title}
					</h3>
					{#each projects.badges as badge, i}
						<span class="badge variant-filled ml-3" style="font-size:.5rem;"
							>{badge}
							<img
								class="text-center centered-img h-3 w-3"
								style="background-color: transparent;"
								src={projects.badgesPic[i]}
								alt={badge}
							/>
						</span>
					{/each}
					<div class="content-container">
						<p class="text-center py-3" style="font-size:.7rem;">{projects.content}</p>
					</div>
					<a
						href="#"
						class="py-3"
						style=" color: white;text-decoration: none; text-align:center; display:flex; align-items:center; flex-direction:row; border: 1px solid #658594; width:100px; height:45px; margin:0 auto;
 margin-top:10px; margin-bottom:10px; border-radius:10px; font-size:0.8rem;"
						><i class="fa-solid fa-link fa-bounce m-3" />Link</a
					>
				</div>
			{/each}
		</div>
		<!-- <a href="https://github.com/Raulj123"style="text-decoration: none; color: #cdf0f6; " >See more on my GitHub</a> -->
<!-- </section> -->
<!-- {/if} -->

<style>
	.project_grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		padding: 1rem;
		margin: 1rem;
	}
	.content-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.content_p {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		max-height: 3em;
		line-height: 1.3;
		overflow: hidden;

		transition: max-height 0.3s ease-out;
	}
	.repo_name {
		max-height: 1.5em;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		margin-bottom: 10px;
	}
	.card:hover .repo_name {
		max-height: 3em;
		-webkit-line-clamp: 2;
	}
	.whole_content {
		max-height: none;
		transition: max-height 0.5s ease-out;
	}
	.card:hover .content_p {
		max-height: none;
		-webkit-line-clamp: 7;
	}
	.card:hover .centered-img {
		transform: translateY(-100%);
		opacity: 0;
		transition: transform 1.5s ease-out, opacity 1.5s ease-out;
	}
	.card:hover .whole_content {
		max-height: none;
		transform: translateY(-70%);
		transition: max-height 0.5s ease-out;
	}
	a {
		font-size: 20px;
		text-decoration: none;
		color: white;
	}
	hr {
		margin-bottom: 10px;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}
	.centered-img {
		display: block;
		margin: 0 auto;
	}

	.card {
		max-width: 360px;
		padding-top: 0px;
		margin-right: 10px;
		margin-left: 10px;
		margin-bottom: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		overflow: hidden;
	}
	.cardMobile {
		max-width: 260px;
		padding-top: 0px;
		margin-right: 20px;
		margin-left: 20px;
		margin-bottom: 25px;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in-out;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.card:hover {
		/* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);   didnt like how this one looked*/
		/* transform: scale(1.04); */
		/* border: 1px solid white;
		border-radius: 5px; */
	}
	.cardMobile:hover {
		/* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);   didnt like how this one looked*/
		transform: scale(1.04);
		border: 3px solid white;
		border-radius: 5px;
	}

	.cardContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	a:hover { 
		transition: all 150ms ease-in-out;
		transform: scale(1.1) rotate(5deg)
	}
	img {
		border-radius: 4px;
	}
	.main_projects_container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.main_card {
		max-width: 80%;
		max-height: 230px;
		display: flex;
		flex-direction: row;
		border-radius: 0;
		box-shadow: 0 0 0 0.5px #808080;
	}
	.main_content-container {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}
	.gradient-heading {
		filter: brightness(80%);
	}
	.dodo {
		filter: brightness(70%);
	}
	.main_card:hover .dodo {
		filter: brightness(110%);
	}
	.main_card:hover .gradient-heading {
		filter: brightness(110%);
	}
	@media (max-width: 868px) {
		.main_card {
			flex-direction: column;
			max-height: 540px;
		}
		.main_card .centered_img_main {
			max-width: 100% !important; 
  			height: auto; 
  			background-position: center;
		}
		.main_content-container {
			display: flex;
			flex-wrap: wrap;
		}
		.project_grid {
			grid-template-columns: repeat(1, 1fr);
		}
		.centered_img_main {
			height: 60% !important;
		}
	}
	.btn-sm {
		height: 30px !important;
		border-radius: 0;
		width: 110px !important ;
	}
	
</style>
