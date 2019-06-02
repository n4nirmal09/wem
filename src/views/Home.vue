<template>
  <div class="home">
    
    <router-link tag="li" to="/en/">
	  <a>English</a>
	</router-link>
	<router-link tag="li" to="/kor/">
	  <a>Korean</a>
	</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

//import banner from '@/components/banner/banner.vue'
export default {
  name: 'home'
}
</script>
