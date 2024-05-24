<script setup>
import NavigationBar from '../components/NavigationBar.vue'
import Hero from '../components/Hero.vue'
import Topics from '../components/Topics.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <Hero />
    <div class="container">
      <h2>Emner</h2>
      <Topics />
    </div>
  </main>
</template>
