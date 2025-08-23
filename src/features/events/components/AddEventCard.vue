<script setup lang="ts">
import { inject, ref } from "vue";
const emit = defineEmits(['close']);
const eventsService  =  inject('eventsService')
const  event  =  ref({
  name: '',
  datetime: new Date(),
  location: '',
  description: '',
  host: ''
})

const close = (isSave: boolean) => {
  emit('close', isSave)
}
const save = async () => {
  await eventsService.upsert(event.value)
  close(true)

}
</script>

<template>
<div class="bg-slate-300 opacity-90 rounded-md text-slate-900">
  <div class="bg-slate-100 rounded-t-md p-4 font-bold flex justify-between w-full">
    <span>
    Add Event
    </span>
    <div>
      <button @click="close(false)" class="py-2 px-4 cursor-pointer hover:text-slate-700">Cancel</button>
      <button class="py-2 px-4 bg-slate-700 text-slate-100 rounded-md cursor-pointer active:bg-slate-900" @click="save">Save</button>
    </div>

  </div>
  <div class="p-4 flex flex-col gap-2">
    <div class="flex justify-between items-center gap-4">
      <span class="w-80 text-right">Name</span>
      <input v-model="event.name" class="w-full rounded-md border-slate-200"></input>
    </div>
    <div class="flex justify-between items-center gap-4">
      <span class="w-80 text-right">Location</span>
      <input v-model="event.location" class="w-full rounded-md border-slate-200"></input>
    </div>
    <div class="flex justify-between items-center gap-4">
      <span class="w-80 text-right">Time</span>
      <VueDatePicker v-model="event.datetime"></VueDatePicker>
    </div>
    <div class="flex justify-between items-center gap-4">
      <span class="w-80 text-right">Host</span>
      <input v-model="event.host" class="w-full rounded-md border-slate-200"></input>
    </div>
    <div class="flex justify-between items-center gap-4">
      <span class="w-80 text-right">Description</span>
      <textarea rows="6" v-model="event.description" class="w-full rounded-md border-slate-200"></textarea>
    </div>
  </div>

</div>
</template>

<style scoped>

</style>