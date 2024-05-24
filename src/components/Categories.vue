<script setup>
import { ref } from 'vue'
import CategoryCard from '../components/CategoryCard.vue'

const categories = ref([]);

const getCategories = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sorting.json', {
    method: 'GET'
  })
  .then((rawResponse) => { //Vi henter JSON-filen fra databasen
    return rawResponse.json();
  })
  .then((response) => { //Tager hvert object i array'et og sender den til et nyt array (categories)
    response.forEach(category => {
      categories.value.push(category);
    })
  })
};

getCategories(); //Kalder funktionen
console.log(categories.value)
</script>

<template>
  <div class="categories">
    <RouterLink v-for="(category, index) in categories" :key="index" :to="category.link"> <!--Kolon er en variable-->
      <CategoryCard> <!--Laver CategoryCard for hver category i categories-array'et-->
        <template #title>{{ category.title }}</template>
      </CategoryCard>
  </RouterLink>
  </div>
</template>
