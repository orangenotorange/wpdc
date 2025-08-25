<script setup lang="ts">
import {inject, onMounted, ref} from "vue";
import MemberCard from "@/features/members/components/MemberCard.vue";
import {PlusIcon} from "@heroicons/vue/16/solid";

const membersService = inject('membersService')
const members = ref([])

onMounted(async () => {
  members.value = membersService.list()
})
</script>

<template>
<div class="flex justify-between items-center w-full text-slate-100">
  <div class="text-3xl font-bold">Members</div>
  <button v-if="!isEditMode" @click="addEvent" class=" rounded-md p-2 hover:bg-slate-200 stroke-slate-200  hover:stroke-slate-800 cursor-pointer">
    <PlusIcon class="size-8 stroke-2" @click="isEditMode = true"></PlusIcon>
  </button>
  </div>
<ul>
  <li v-for="member in members" class="w-full">
    <MemberCard :event="event"></MemberCard>
  </li>
</ul>
</template>

<style scoped>

</style>