<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSessionStore } from "@/services/session.store.ts";
import { inject, onMounted, ref } from "vue";


const sessionStore = useSessionStore();
const { user } = storeToRefs(sessionStore)


const eventsService = inject('eventsService')
const events = ref([])
onMounted(async () => {
  events.value = await eventsService.list()
})

</script>

<template>
<div>
  <div>Events</div>
  <button @click="addEvent">
    <UserGroupIcon></UserGroupIcon>
  </button>/
</div>
  <li v-for="event in events">
    {{ event }}
  </li>

</template>

<style scoped>

</style>