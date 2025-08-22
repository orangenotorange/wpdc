<script setup lang="ts">

import { UserGroupIcon, CalendarIcon } from "@heroicons/vue/16/solid";
</script>

<template>
  <nav>
    <div class="relative flex items-center justify-between bg-slate-700 text-slate-800">
      <RouterLink to="/events" class="w-1/2 flex flex-col items-center px-3 py-2 hover:text-slate-200 text-center font-bold text-xl pb-4">
        <CalendarIcon class="size-6" ></CalendarIcon>
        <span class="text-sm">Events</span>
      </RouterLink>

      <RouterLink to="/members"  class="w-1/2 flex flex-col items-center px-3 py-2 hover:text-slate-200 text-center font-bold text-xl pb-4">
        <UserGroupIcon class="size-6"></UserGroupIcon>
        <span class="text-sm">Members</span>
      </RouterLink>
    </div>
  </nav>

</template>

<style scoped>

</style>