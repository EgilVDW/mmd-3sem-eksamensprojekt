<script setup>
import { ref } from 'vue';
import OpeningHoursCard from '@/components/OpeningHoursCard.vue';

const sites = ref([]);
const combinedDays = ref([]);

const getCombinedDays = () => {
  sites.value.forEach(site => {
    combinedDays.value.push(new Array);
    const days = new Array;
    for (let i = 0; i < site.openingHours.length; i++) {
      days.push(site.openingHours[i])
      if (i >= site.openingHours.length - 1 || ((site.openingHours[i].from != site.openingHours[i + 1].from) || (site.openingHours[i].to != site.openingHours[i + 1].to))) {
        const daysObject = {
          days: null,
          timeFrame: null
        }
        if (days.length > 1) {
          daysObject.days = `${days[0].day} - ${days[days.length - 1].day}`;
        }
        else {
          daysObject.days = days[0].day;
        }
        if ((days[0].from || days[0].to) != null) {
          daysObject.timeFrame = `${days[0].from} - ${days[0].to}`;
        }
        else {
          daysObject.timeFrame = 'Lukket';
        }
        combinedDays.value[combinedDays.value.length - 1].push(daysObject)
        days.length = 0;
      }
    }
  })
};

const getSites = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sites.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    sites.value = response;
    getCombinedDays();
  })
};

getSites();
</script>

<template>
  <div class="opening-hours">
    <OpeningHoursCard v-for="(site, index) in sites" :key="index">
      <template #name>{{ site.name }}</template>
      <template #content>
        <p v-for="(days) in combinedDays[index]">
          {{ days.days }}
          <br>
          {{ days.timeFrame }}
        </p>
      </template>
      <template #link>
        <RouterLink to="/">Se mere</RouterLink>
      </template>
    </OpeningHoursCard>
  </div>
</template>
