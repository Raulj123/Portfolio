<script lang="ts">
	import { AppBar, Toast, toastStore, Accordion, AccordionItem,LightSwitch, clipboard } from '@skeletonlabs/skeleton';
  import type {ToastSettings} from '@skeletonlabs/skeleton'
  import Nav from './nav.svelte' 
  import Hero from './hero.svelte'
  import Projects from './projects.svelte'
  import Experience from './experience.svelte'
  import Contact from './contact.svelte'

 </script>
<Nav/>
<Hero/>
<Projects/>
<Experience/>
<Toast/>
<Contact/>

