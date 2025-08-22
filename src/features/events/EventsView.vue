<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSessionStore } from "@/services/session.store.ts";
import { inject, onMounted, ref } from "vue";
import { PlusIcon } from "@heroicons/vue/16/solid";
import EventCard from "@/features/events/components/EventCard.vue";

const sessionStore = useSessionStore();
const { user } = storeToRefs(sessionStore)


const eventsService = inject('eventsService')
const events = ref([])
onMounted(async () => {
  events.value = await eventsService.list()
})

</script>

<template>
<div class="flex justify-between items-center w-full text-slate-200 ">
  <div class="text-3xl font-bold">Events</div>
  <button @click="addEvent" class="border-2 border-slate-200 rounded-md p-2 hover:bg-slate-200  hover:text-slate-800 cursor-pointer">
    <PlusIcon class="size-6"></PlusIcon>
  </button>
</div>
<ul class="flex justify-between items-center my-4">
  <li v-for="event in events" class="w-full">
    <EventCard :event="event"></EventCard>
  </li>
</ul>



</template>

<style scoped>

</style>