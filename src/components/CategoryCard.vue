<script setup>
import IconArrowRight from '@/assets/icons/IconArrowRight.vue'
</script>

<template>
  <div class="category-card">
    <slot name="title"></slot>
    <IconArrowRight />
  </div>
</template>
