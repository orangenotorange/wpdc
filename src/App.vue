<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <!-- This is the container for the moving blob background -->
  <div class="blob-container bg-slate-800">
    <div class="blob"></div>
    <div class="blob"></div>
    <div class="blob"></div>
  </div>

  <div class="flex flex-col justify-between h-dvh relative z-10 text-slate-200">
<!--    <app-page-header> </app-page-header>-->

    <div class="px-8 py-4">
<!--      @if (pageName() !== 'Home') {-->
      <div class="flex gap-10 items-center justify-between">
        <a class="flex items-center" href="/">

        </a>
        <div class="font-bold uppercase text-xl">Page name</div>
      </div>
    </div>

    <div class="p-4 flex flex-col h-full">

    </div>
<!--    <app-login></app-login>-->
    <NavBar></NavBar>

  </div>

</template>

<style scoped></style>
