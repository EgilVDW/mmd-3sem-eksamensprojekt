<script setup>
import NavigationBar from '@/components/NavigationBar.vue';
import Banner from '@/components/Banner.vue';
import OpeningHours from '@/components/OpeningHours.vue';
import FooterContent from '@/components/FooterContent.vue';
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <div class="container">
      <h1>Nye regler for aflevering af haveaffald</h1>
      <p>I forbindelse med ombygningen er det besluttet at lukke Middelfart Genbrugsplads midlertidigt i tre måneder. Vi ved, at dette kan medføre en vis ulejlighed for vores borgere, og vi opfordrer til forståelse og samarbejde i denne periode.</p>
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
