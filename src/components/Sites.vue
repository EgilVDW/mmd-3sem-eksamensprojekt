<script setup>
import { ref } from 'vue';

const sites = ref([]);

const getSites = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sites.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    sites.value = response;
  })
};

getSites();
</script>

<template>
  <div class="sites">
    <RouterLink v-for="(site, index) in sites" :key="index" :to="{ path: `/admin/${index}`}">{{ site.name }}</RouterLink>
  </div>
</template>