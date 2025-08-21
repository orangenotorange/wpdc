import { createRouter, createWebHistory } from 'vue-router'
import EventsView from "@/features/EventsView.vue";
import HomeView from "@/features/HomeView.vue";
import MembersView from "@/features/MembersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/', name: 'Home', component: HomeView },
      { path: '/members', name: 'Members', component: MembersView },
      { path: '/events', name: 'Events', component: EventsView },
  ],
})

export default router
