<script setup lang="ts">
import {inject, onMounted, ref} from "vue";

const membersService = inject('membersService')
const members = ref([])

onMounted(async () => {
  members.value = membersService.list()
})
</script>

<template>
Members
</template>

<style scoped>

</style>