<template>
<div class="row">
	<div>
	  <base-dropdown>
	    <base-button slot="title" type="secondary" class="dropdown-toggle">
	      Regular
	    </base-button>
	    <a class="dropdown-item" href="#">Action</a>
	    <a class="dropdown-item" href="#">Another action</a>
	    <a class="dropdown-item" href="#">Something else here</a>
	  </base-dropdown>
	  <base-dropdown>
	     <base-button slot="title" type="default" class="dropdown-toggle">
	        <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/US.png" /> Flags
	     </base-button>
	       <li>
	          <a class="dropdown-item" href="#">
	            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/DE.png" /> Deutsch
	          </a>
	      </li>
	      <li>
	          <a class="dropdown-item" href="#">
	            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/GB.png" /> English(UK)
	          </a>
	      </li>
	      <li>
	          <a class="dropdown-item" href="#">
	            <img src="https://demos.creative-tim.com/argon-design-system/assets/img/icons/flags/FR.png" /> Français
	          </a>
	      </li>
	  </base-dropdown>
	</div>
</div>
</template>
<script>
import BaseNav from "@/argon/components/BaseNav"
  export default {
    data(){
        return {
            
        }
     }
  }
</script>