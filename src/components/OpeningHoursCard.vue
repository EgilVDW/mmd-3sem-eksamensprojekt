<script setup>
import OpeningHoursCard from '@/components/OpeningHoursCard.vue';
</script>

<template>
  <div class="opening-hours-card">
    <h3>
      <slot name="name"></slot>
    </h3>
    <slot name="content"></slot>
    <slot name="link"></slot>
  </div>
</template>
