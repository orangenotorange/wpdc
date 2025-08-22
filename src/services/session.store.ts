
import { defineStore } from 'pinia'
import {ref} from "vue";
import type { User, Session } from "@supabase/supabase-js";

export const useSessionStore = defineStore('session',() => {
    const session = ref<Session | null>(null)
    const user = ref<User | null>(null)

    const setSession = (newSession: Session) => {
        session.value = newSession
        user.value = newSession.user
    }

    return { user, session, setSession }
})