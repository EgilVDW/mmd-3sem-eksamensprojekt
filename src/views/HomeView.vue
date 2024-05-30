<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Hero from '@/components/Hero.vue';
import Topics from '@/components/Topics.vue';
import FooterContent from '@/components/FooterContent.vue';
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
  <footer>
    <FooterContent />
  </footer>
</template>
