<script setup>
import { ref } from 'vue';
import BannerItem from '@/components/BannerItem.vue';

const closingTimes = ref([]);

const getSites = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sites.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    response.forEach(site => {
      getClosingTime(site);
    })
  })
};

getSites();

const getClosingTime = (site => {
  let firstMatch;
  const time = new Date;
  site.openingHours.unshift(site.openingHours.pop());
  if ((site.openingHours[time.getDay()].from || site.openingHours[time.getDay()].to)) {
    for (let i = time.getDay(); i < site.openingHours.length && !firstMatch; i++) {
      if (!(site.openingHours[i].from || site.openingHours[i].to)) {
        firstMatch = i;
      }
    }
    if (!firstMatch) {
      for (let i = 0; i < time.getDay() && !firstMatch; i++) {
        if (!(site.openingHours[i].from || site.openingHours[i].to)) {
          firstMatch = i;
        }
      }
    }
    if (firstMatch != null) {
      let lastDay;
      if (firstMatch > 0) {
        lastDay = firstMatch - 1;
      }
      else {
        lastDay = 6;
      }
      closingTimes.value.push({
        name: site.name,
        lastDay: site.openingHours[lastDay].day.toLowerCase(),
        lastHourAndMinute: site.openingHours[lastDay].to
      })
    }
  }
});
</script>

<template>
  <div class="banner">
    <p>Åbent nu:</p>
    <div class="banner-content">
      <BannerItem v-for="(site, index) in closingTimes" :key="index">
        <template #name>{{ site.name }}</template>
        <template #days>{{ site.lastDay }}</template>
        <template #hours>{{ site.lastHourAndMinute }}</template>
      </BannerItem>
    </div>
  </div>
</template>
