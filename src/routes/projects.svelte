<script lang="ts">
  import {projects} from './projects.ts'

	let innerWidth = 0
	$: mobile = innerWidth < 1080; 
	$:{
		console.log(innerWidth)
	}
</script>

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
</style>
