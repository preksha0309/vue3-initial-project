<template>
<div>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>
  <div>{{meals}}</div>
</div>

  

</template>

<script>
import store from '../store';
import { ref, computed } from 'vue';
export default {
  name:"MealsByName",
  setup() {
    const keyword = ref('');

    const meals = computed(() => store.state.searchedMeals);

    function searchMeals() {
      store.dispatch('searchMeals', keyword.value);
    }
        // Return variables and functions to be accessible in the template
    return { keyword, meals, searchMeals };


  }

}

// const keyword = ref('')
// // to acceess data from store -->  computed()
// const meals = computed(() => store.state.searchedMeals)
// function searchMeals (){
//   store.dispatch('searchMeals' , keyword.value)

// }
</script>

<style>

</style>