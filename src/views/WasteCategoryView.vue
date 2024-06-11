<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBar from '@/components/NavigationBar.vue';
import Banner from '@/components/Banner.vue';
import OpeningHours from '@/components/OpeningHours.vue';
import FooterContent from '@/components/FooterContent.vue';

const route = useRoute();

const category = ref({});

const getCategory = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sorting.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    category.value = response[route.params.id];
  })
};

getCategory();
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <div class="container">
      <h1>{{ category.title }}</h1>
      <h2 v-if="category.alertTitle">{{ category.alertTitle }}</h2>
      <p v-if="category.alertText">{{ category.alertText }}</p>
    </div>
    <Banner />
    <div class="container">
      <h2>Åbningstider</h2>
        <OpeningHours />
    </div>
  </main>
  <footer>
    <FooterContent />
  </footer>
</template>
