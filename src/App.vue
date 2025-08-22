<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { supabase } from './services/supabase-client.ts'
import { onMounted, provide } from 'vue'
import { useSessionStore } from './services/session.store.ts'
import { EventsService } from "@/services/events.service.ts";
import {MembersService} from "@/services/members.service.ts";

const sessionStore = useSessionStore();

provide('eventsService', new EventsService())
provide("membersService", new MembersService())


onMounted(async () => {
  //const session =  localStorage.setItem('session', JSON.stringify(data.session))
  const { data } = await supabase.auth.getSession()
  console.log(data)
  sessionStore.setSession(data.session)

  supabase.auth.onAuthStateChange((_, _session) => {
    sessionStore.setSession(_session)
  })
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
    <main class="p-4 flex flex-col h-full">
      <RouterView />
    </main>
    <NavBar></NavBar>
  </div>

</template>

<style scoped></style>
