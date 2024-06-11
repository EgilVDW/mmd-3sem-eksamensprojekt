<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Sites from '@/components/Sites.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <div class="container">
      <h1>Admin</h1>
      <Sites />
    </div>
  </main>
  <footer>
    <FooterContent />
  </footer>
</template>
