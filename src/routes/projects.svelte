<script lang="ts">
  import {projects} from './projects.ts'

	let innerWidth = 0
	$: mobile = innerWidth < 1080; 
	$:{
		console.log(innerWidth)
	}
</script>
	<svelte:window bind:innerWidth/>
{#if !mobile}
<section id="projects">
	<h1 class="text-center p-20" style=" font-weight: bold;">Projects</h1>
	<div class="cardContainer">
		{#each projects as projects}
			<div class="card">
									<img
						class="centered-img h-45 w-90 "
						style="border-radius:10px; object-fit: contain; height:180px; width:350px;"
						src={projects.image}
						alt="project"
					/>
				<h3 class="text-left p-2" style=" font-weight: bold;">{projects.title}</h3>
				{#each projects.badges as badge, i}
					<span class="badge variant-filled ml-3 m-1 h-6 w-100%"
						>{badge}
						<img
							class="text-center u-max-full-width centered-img h-5 w-5 p-0.5"
							style="background-color: transparent;"
							src={projects.badgesPic[i]}
							alt={badge}
						/>
					</span>
				{/each}
        <div class="content-container">
				<p class="text-center py-3">{projects.content}</p>
        </div>
 <a href={projects.href} class="py-3 "         onmouseover="this.style.color='#3B82F6'" onmouseout="this.style.color='#cdf0f6'"style=" color: white;text-decoration: none; text-align:center; display:flex; align-items:center; flex-direction:row; border: 1px solid #658594; width:100px; height:50px; margin:0 auto;
 margin-top:10px; margin-bottom:10px; border-radius:10px;"><i class="fa-solid fa-link fa-bounce m-3"></i>Link</a>
        </div>

		{/each}

	</div>

</section>
{:else}
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
				<h3 class="text-left p-2" style=" font-weight: bold; font-size:1.1rem;">{projects.title}</h3>
				{#each projects.badges as badge, i}
					<span class="badge variant-filled ml-3" style="font-size:.5rem;"
						>{badge}
						<img
							class="text-center  centered-img h-3 w-3 "
							style="background-color: transparent;"
							src={projects.badgesPic[i]}
							alt={badge}
						/>
					</span>
				{/each}
 <div class="content-container">
				<p class="text-center py-3" style="font-size:.7rem;">{projects.content}</p>
        </div>
 <a href="" class="py-3 "         onmouseover="this.style.color='#3B82F6'" onmouseout="this.style.color='#cdf0f6'" style=" color: white;text-decoration: none; text-align:center; display:flex; align-items:center; flex-direction:row; border: 1px solid #658594; width:100px; height:45px; margin:0 auto;
 margin-top:10px; margin-bottom:10px; border-radius:10px;"><i class="fa-solid fa-link fa-bounce m-3"></i>Link</a>
        </div>

		{/each}
	</div>
	<!-- <a href="https://github.com/Raulj123"style="text-decoration: none; color: #cdf0f6; " >See more on my GitHub</a> -->
</section>
{/if}
<hr />
<style>
.content-container {
  max-height: 250px; /* Adjust the maximum height as needed */
  overflow: hidden;
}

	a {
		font-size: 20px;
    text-decoration: none;
    color: #658594;

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
    border: 1px solid #658594;
		max-width: 320px;
		padding-top: 0px;
		margin-right: 20px;
		margin-left: 20px;
		margin-bottom: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in-out;
		transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
	.cardMobile{
 border: 1px solid #658594;

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
		transform: scale(1.15);
	}

	.cardContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

	}
</style>
