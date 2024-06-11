import { createRouter, createWebHistory } from 'vue-router'

import AccueilView from '../views/accueil.vue'
import ContactView from '../views/contact.vue'  
import QuiView from '../views/qui.vue'  
import ProjetView from '../views/projet.vue'  
import Pb404View from '../views/pb404.vue'  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Route pour la page d'accueil
      path: '/',
      name: 'accueil',
      component: AccueilView
    },
    {
      // Route pour la page de contact
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      // Route pour la page de qui
      path: '/qui',
      name: 'qui',
      component: QuiView
    },
    {  // Route pour la page de Projet
      path: '/projet',
      name: 'projet',
      component: ProjetView
    },
    { path: '/:pathMatch(.*)*',

      name: 'pb404', 
      
      component: Pb404View 
      
      }

  ]
})

export default router
