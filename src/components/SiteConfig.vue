<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const sites = ref([]);
const site = ref([]);
const siteLoaded = ref(false);

const monFrom = ref(null);
const monTo = ref(null);
const tueFrom = ref(null);
const tueTo = ref(null);
const wedFrom = ref(null);
const wedTo = ref(null);
const thuFrom = ref(null);
const thuTo = ref(null);
const friFrom = ref(null);
const friTo = ref(null);
const satFrom = ref(null);
const satTo = ref(null);
const sunFrom = ref(null);
const sunTo = ref(null);

const getSite = () => {
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sites.json', {
    method: 'GET'
  })
  .then((rawResponse) => {
    return rawResponse.json();
  })
  .then((response) => {
    sites.value = response;
    site.value = response[route.params.id];
    monFrom.value = site.value.openingHours[0].from;
    monTo.value = site.value.openingHours[0].to;
    tueFrom.value = site.value.openingHours[1].from;
    tueTo.value = site.value.openingHours[1].to;
    wedFrom.value = site.value.openingHours[2].from;
    wedTo.value = site.value.openingHours[2].to;
    thuFrom.value = site.value.openingHours[3].from;
    thuTo.value = site.value.openingHours[3].to;
    friFrom.value = site.value.openingHours[4].from;
    friTo.value = site.value.openingHours[4].to;
    satFrom.value = site.value.openingHours[5].from;
    satTo.value = site.value.openingHours[5].to;
    sunFrom.value = site.value.openingHours[6].from;
    sunTo.value = site.value.openingHours[6].to;
    siteLoaded.value = !siteLoaded.value;
  })
};

getSite();

const onSubmitForm = () => {
  site.value.openingHours[0].from = monFrom.value;
  site.value.openingHours[0].to = monTo.value;
  site.value.openingHours[1].from = tueFrom.value;
  site.value.openingHours[1].to = tueTo.value;
  site.value.openingHours[2].from = wedFrom.value;
  site.value.openingHours[2].to = wedTo.value;
  site.value.openingHours[3].from = thuFrom.value;
  site.value.openingHours[3].to = thuTo.value;
  site.value.openingHours[4].from = friFrom.value;
  site.value.openingHours[4].to = friTo.value;
  site.value.openingHours[5].from = satFrom.value;
  site.value.openingHours[5].to = satTo.value;
  site.value.openingHours[6].from = sunFrom.value;
  site.value.openingHours[6].to = sunTo.value;
  site.value.openingHours.forEach((day) => {
    if (day.from == '') {
      day.from = null;
    }
    if (day.to == '') {
      day.to = null;
    }
  });
  sites.value[route.params.id] = site.value;
  fetch('https://mmd-3sem-eksamensprojekt-default-rtdb.europe-west1.firebasedatabase.app/sites.json', {
    method: 'PUT',
    body: JSON.stringify(sites.value)
  })
}
</script>

<template>
  <div class="site-config">
    <form v-if="siteLoaded" v-on:submit.prevent="onSubmitForm">
      <div>
        <h2>Mandag</h2>
        <input type="text" v-model.value="monFrom">
        <input type="text" v-model.value="monTo">
      </div>
      <div>
        <h2>Tirsdag</h2>
        <input type="text" v-model.value="tueFrom">
        <input type="text" v-model.value="tueTo">
      </div>
      <div>
        <h2>Onsdag</h2>
        <input type="text" v-model.value="wedFrom">
        <input type="text" v-model.value="wedTo">
      </div>
      <div>
        <h2>Torsdag</h2>
        <input type="text" v-model.value="thuFrom">
        <input type="text" v-model.value="thuTo">
      </div>
      <div>
        <h2>Fredag</h2>
        <input type="text" v-model.value="friFrom">
        <input type="text" v-model.value="friTo">
      </div>
      <div>
        <h2>Lørdag</h2>
        <input type="text" v-model.value="satFrom">
        <input type="text" v-model.value="satTo">
      </div>
      <div>
        <h2>Søndag</h2>
        <input type="text" v-model.value="sunFrom">
        <input type="text" v-model.value="sunTo">
      </div>
      <button type="submit">Gem</button>
    </form>
  </div>
</template>