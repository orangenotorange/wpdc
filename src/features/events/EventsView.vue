<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSessionStore } from "@/services/session.store.ts";
import { inject, onMounted, ref } from "vue";
import { PlusIcon } from "@heroicons/vue/16/solid";
import EventCard from "@/components/EventCard.vue";
import AddEventCard from "@/features/events/components/AddEventCard.vue";

const sessionStore = useSessionStore();
const { user } = storeToRefs(sessionStore)
const isEditMode = ref(false)


const eventsService = inject('eventsService')
const events = ref([])
onMounted(async () => {
  events.value = await eventsService.list()
})

const onAddEventClose = async (isSave: boolean) => {
  isEditMode.value = false

  if(isSave) {
    events.value = await eventsService.list()
  }
}

</script>

<template>
<div class="flex justify-between items-center w-full text-slate-100">
  <div class="text-3xl font-bold">Events</div>
  <button v-if="!isEditMode" @click="addEvent" class=" rounded-md p-2 hover:bg-slate-200 stroke-slate-200  hover:stroke-slate-800 cursor-pointer">
    <PlusIcon class="size-8 stroke-2" @click="isEditMode = true"></PlusIcon>
  </button>
</div>
<div class="my-4 flex flex-col gap-4 overflow-y-auto">
  <div v-if="isEditMode" class="w-full">
    <AddEventCard  @close="onAddEventClose"></AddEventCard>
  </div>
  <ul v-else class="flex flex-col justify-between items-center gap-4">
    <li v-for="event in events" class="w-full">
      <EventCard :event="event"></EventCard>
    </li>
  </ul>
</div>

</template>

<style scoped>

</style>