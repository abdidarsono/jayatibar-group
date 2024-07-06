import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HousingType from '../views/HousingType.vue'
import District1 from '../views/District1.vue'
import Commercial from '../views/Commercial.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/housing-type',
    name: 'housing type',
    component: HousingType,
    // children: [
    //   {
    //     path: 'district1',
    //     name: 'district 1',
    //     component: District1
    //   }
    // ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/housing-type/district1',
    name: 'district 1',
    component: District1
  },
  {
    path: '/commercial-type',
    name: 'commercial',
    component: Commercial
  },
  {
    path: '/about-developer',
    name: 'about developer',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
