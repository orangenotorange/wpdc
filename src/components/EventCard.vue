<script setup lang="ts">
const { event } = defineProps(['event'])
</script>

<template>
<div class="bg-slate-300 opacity-70 rounded-md text-slate-900">
  <div class="bg-slate-300 rounded-t-md px-4 py-2 font-bold flex justify-between w-full">
    <span>
    {{event.name}}
    </span>
    <span>
    {{event.datetime.toLocaleDateString()}} {{event.datetime.toLocaleTimeString()}}
    </span>

  </div>
  <div class="px-4 flex flex-col gap-2">
    <div class="flex justify-between">
      <span class="font-bold">{{event.location}}</span>
    </div>
    <div>{{event.description}}</div>
    <div class="flex justify-end w-full">{{event.host}}</div>
  </div>

</div>
</template>

<style scoped>

</style>