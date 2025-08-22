import { createRouter, createWebHistory } from 'vue-router'
import EventsView from "@/features/events/EventsView.vue";
import HomeView from "@/features/HomeView.vue";
import MembersView from "@/features/members/MembersView.vue";
import LandingView from "@/features/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      { path: '/landing', name: 'Landing', component: LandingView },
      { path: '/', name: 'Home', component: HomeView },
      { path: '/members', name: 'Members', component: MembersView },
      { path: '/events', name: 'Events', component: EventsView },
  ],
})

export default router
