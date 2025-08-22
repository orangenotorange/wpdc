<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from 'pinia'
import { useSessionStore } from "@/services/session.store.ts";

const sessionStore = useSessionStore();
const { session, user } = storeToRefs(sessionStore)
</script>

<template>
Home User {{ user?.email }}
</template>

<style scoped>

</style>