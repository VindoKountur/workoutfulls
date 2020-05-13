import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue'),
  },
  {
    path: '/hero',
    name: 'Hero',
    component: () => import('../components/HeroWorkout.vue'),
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import('../components/PersonalWorkout.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
