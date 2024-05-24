<script setup>
import { ref, watch } from 'vue';
import IconSearch from '../assets/icons/IconSearch.vue'
import IconClose from '../assets/icons/IconClose.vue'
</script>

<template>
  <form v-on:submit.prevent="onSubmitForm">
    <div class="search-bar">
      <IconSearch />
      <input type="text" placeholder="Søg" v-model="search" />
      <button type="reset">
        <IconClose />
      </button>
    </div>
  </form>
</template>