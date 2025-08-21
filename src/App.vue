<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { supabase } from './lib/supabase-client'
import { onMounted, ref } from 'vue'

const events = ref([])

async function getEvents() {
  const { data } = await supabase.from('events').select()
  events.value = data
  console.log(events.value)
}

onMounted(() => {
  getEvents()
})
</script>

<template>
  <!-- This is the container for the moving blob background -->
  <div class="blob-container bg-slate-800">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>

  <div class="flex flex-col justify-between h-dvh relative z-10 text-slate-200">
    <div class="px-8 py-4">

      <div class="flex gap-10 items-center justify-between">
        <a class="flex items-center" href="/">

        </a>
        <div class="font-bold uppercase text-xl"> {{ $route.name }}</div>
      </div>
    </div>

    <main class="p-4 flex flex-col h-full">
      <RouterView />
    </main>
    <NavBar></NavBar>

  </div>

</template>

<style scoped></style>
