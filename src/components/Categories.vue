<script setup>
import { ref, watch } from 'vue'
import CategoryCard from './CategoryCard.vue'
import IconClose from '@/assets/icons/IconClose.vue'
import IconSearch from '@/assets/icons/IconSearch.vue'

const categories = ref([]);
const filteredCategories = ref([]);

const searchInput = ref('');

const filterCategories = () => {
  filteredCategories.value.length = 0;
  categories.value.forEach(category => {
    if (category.title.toLowerCase().search(searchInput.value.toLowerCase()) > -1) {
      filteredCategories.value.push(category);
    }
  })
};

watch(searchInput, () => {
  filterCategories();
});

const searchReset = () => {
  searchInput.value = '';
  filterCategories();
};

const getCategories = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sorting.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    categories.value = response;
    filterCategories();
  })
};

getCategories();
</script>

<template>
  <form v-on:submit.prevent="onSubmitForm">
    <div class="search-bar">
      <IconSearch />
      <input type="text" placeholder="Søg" v-model="searchInput" />
      <button type="reset" @click="searchReset">
        <IconClose />
      </button>
    </div>
  </form>
  <div class="categories">
    <RouterLink v-for="(category, index) in filteredCategories" :key="index" :to="category.link">
      <CategoryCard>
        <template #title>{{ category.title }}</template>
      </CategoryCard>
  </RouterLink>
  </div>
</template>
