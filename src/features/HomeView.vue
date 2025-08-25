<script setup lang="ts">
import {inject, onMounted, ref} from "vue";
import { storeToRefs } from 'pinia'
import { useSessionStore } from "@/services/session.store.ts";
import EventCard from "@/components/EventCard.vue";

const sessionStore = useSessionStore();
const { session, user } = storeToRefs(sessionStore)

const eventsService = inject('eventsService')
const events = ref([])

onMounted(async () => {
  events.value = await eventsService.listUpcoming()
})

</script>

<template>
  <ul class="flex flex-col justify-between items-center gap-4">
    <li v-for="event in events" class="w-full">
      <EventCard :event="event"></EventCard>
    </li>
  </ul>
</template>

<style scoped>

</style>