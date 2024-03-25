<template>
 <div>
    <header-vue/>
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>



<script>
import HeaderVue from './Header.vue'


export default {
name:"DefaultLayout",
  components: {
    HeaderVue 
  }

}
</script>

<style>

</style>