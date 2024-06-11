<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import SiteConfig from '@/components/SiteConfig.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <div class="container">
      <SiteConfig />
    </div>
  </main>
  <footer>
    <FooterContent />
  </footer>
</template>
