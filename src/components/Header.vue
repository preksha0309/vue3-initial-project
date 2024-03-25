<template>
      <header class="bg-white shadow h-16 flex justify-between items-center">
     <router-link :to="{name:'Home'}" class="inline-flex items-center h-full px-5">
        Home
     </router-link>
     <div class="flex items-center gap-1"> 
        <router-link :to="{name:'byName'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
         Search Meals
        </router-link>
     
        <router-link :to="{name:'byLetter'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
            Meals By Letter
        </router-link>
     
        <router-link :to="{name:'byIngredient'}" class=" inline-flex items-center px-2 h-full transition-colors hover:bg-purple-200">
            Meals By Ingredients
        </router-link>
     </div>
    </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>

</style>