<script setup>
import Logo from '@/assets/images/logo.png';
import IconSearch from '@/assets/icons/IconSearch.vue';
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">
          <img :src="Logo" class="icon">
        </RouterLink>
      </li>
      <li>
        <a>
          <IconSearch />
        </a>
      </li>
    </ul>
  </nav>
</template>