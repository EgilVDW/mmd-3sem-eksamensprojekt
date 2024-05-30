<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Categories from '@/components/Categories.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <div class="container">
      <h1>Affaldssortering</h1>
      <p>Hvor skal affaldet hen?</p>
    </div>
    <div class="container">
      <Categories />
    </div>
  </main>
  <footer>
    <FooterContent />
  </footer>
</template>
