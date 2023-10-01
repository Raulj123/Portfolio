<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/all.css';
	import { AppShell} from "@skeletonlabs/skeleton";
</script>

<AppShell >

	<slot />
	<footer class="text-center py-5  mx-auto m-5 ">Made with 💙 by Raul</footer>
	<div>
		<img src="./flag/mexico-flag.jpg" alt="mx-flag" class="w-[100%]" />
	</div>
</AppShell>






