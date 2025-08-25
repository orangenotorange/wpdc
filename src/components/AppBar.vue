<script setup lang="ts">

import { UserCircleIcon, CalendarIcon } from "@heroicons/vue/16/solid";
</script>

<template>
  <nav class="relative flex items-center justify-between bg-slate-900 text-slate-200 px-4 py-2">
    <RouterLink to="/"  >
      <span class="font-bold">WPDC</span>
    </RouterLink>

    <RouterLink to="/members/1">
      <UserCircleIcon class="size-8"></UserCircleIcon>
    </RouterLink>
  </nav>

</template>

<style scoped>

</style>