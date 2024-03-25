<template>
    <div class="flex flex-col p-8 justify-center">
 
     

    <div class="flex justify-center gap-2 mt-2">
     <router-link :to="{ name: 'byLetter', params: { letter: letter } }" v-for="letter in letters" :key="letter">
  {{ letter }}
</router-link>


    </div>
    </div>

</template>

<script>
import { onMounted } from 'vue';
import axiosClientInstance from '../axiosClient.js';


export default {
  name:"Home-vue",
 data() {
    return {
      letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    };
  },
  setup() {
    onMounted(async () => {
   try {
        const response = await axiosClientInstance.get('./list.php?i=list');
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
        
    });
  }

}

</script>

<style>

</style>