<script setup lang="ts">
import {ref} from "vue";
import { supabase } from '../services/supabase-client.ts'



let count = ref(0)
const login =  async ()  => {

  // Gets Magic Link
  const { user, session, error } = await supabase.auth.signInWithOtp({
    email: 'keith.weiss@gmail.com',
  })
}
</script>

<template>

Landing {{count}}

  <button @click="login">Login</button>
</template>

<style scoped>

</style>