<script setup>
import TopicCard from './TopicCard.vue';
import IconCalendar from '@/assets/icons/IconCalendar.vue';
import IconContact from '@/assets/icons/IconContact.vue';
import IconMap from '@/assets/icons/IconMap.vue';
import IconQuestion from '@/assets/icons/IconQuestion.vue';
import IconTrash from '@/assets/icons/IconTrash.vue';
import IconUser from '@/assets/icons/IconUser.vue';
</script>

<template>
  <div class="topics">
    <RouterLink to="/sorteringsguide">
      <TopicCard>
        <template #icon>
          <IconTrash />
        </template>
        <template #title>Sorteringsguide</template>
        <template #description>Hvor skal affaldet hen?</template>
      </TopicCard>
    </RouterLink>
    <RouterLink to="/">
      <TopicCard>
        <template #icon>
          <IconMap />
        </template>
        <template #title>Genbrugspladser</template>
        <template #description>Find genbrugsplads</template>
      </TopicCard>
    </RouterLink>
    <RouterLink to="/">
      <TopicCard>
        <template #icon>
          <IconCalendar />
        </template>
        <template #title>Tømmekalender</template>
        <template #description>Hvornår vi henter affald</template>
      </TopicCard>
    </RouterLink>
    <RouterLink to="/">
      <TopicCard>
        <template #icon>
          <IconUser />
        </template>
        <template #title>Selvbetjening</template>
        <template #description>Log ind på selvbetjening</template>
      </TopicCard>
    </RouterLink>
    <RouterLink to="/">
      <TopicCard>
        <template #icon>
          <IconQuestion />
        </template>
        <template #title>FAQ</template>
        <template #description>Ofte stillede spørgsmål</template>
      </TopicCard>
    </RouterLink>
    <RouterLink to="/">
      <TopicCard>
        <template #icon>
          <IconContact />
        </template>
        <template #title>Kontakt</template>
        <template #description>Ring eller skriv til os</template>
      </TopicCard>
    </RouterLink>
  </div>
</template>
