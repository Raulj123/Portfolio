<script lang=ts>
  import {techStack} from './techStack'
  import {techStack_titles} from './techStack'

</script>
<section class="tech-stack-section card w-100% p-4">
   <h2 class="">Tech stack 💻</h2>
    <p class="sub-info ml-7">
     
    </p>
    <p class="sub-info mt-3  font-light">
    These are the technologies I've used so far, along with the projects I've done with them. I'm actively seeking to learn as much as I can and explore new technologies.
           </p>
    {#each Object.entries(techStack) as [stackName, stackItems]} 
    <div class="stack-table ">
      <div class="stack-name mt-3 mb-3">
        
        <h3 class="font-bold">{stackName}</h3>
      </div>
      <div class="stack-section ">
        {#each stackItems as info} 
          <div class="stack-row flex mb-4 border-b-2 border-dashed border-gray-500 mt-3">
            <div>
            <img src={info.badge} alt={info.badge} class="stack-label"  >
            </div>
            
            <div class="stack-projects flex flex-wrap mb-2" style="width: 90%; justify-content: flex-end;">
              
              {#each info.href as href, i}
                <a class="repo-link underline-none" target="_blank" rel="noreferrer" style="text-decoration: none !important; margin-right:10px;"
                  href={info.href[i]}>
               
                  <span><i class="fa-brands fa-github mr-2"></i>{info.project[i]}</span>
                </a>
                {/each}
               
         
            </div>
            
          </div>
          {/each}
         
      </div>
     
    </div>
    {/each}
   
   
  </section>



  <style>
    .tech-stack-section{
       
    }
   
  </style>
