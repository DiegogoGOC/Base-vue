<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import debut from './components/debut.vue'
import fin from './components/fin.vue'
import accueil from './views/accueil.vue'
import qui from './views/qui.vue'
import contact from './views/contact.vue'
import projet from './views/projet.vue'
import pb404 from './views/pb404.vue'
</script>

<template>
  <debut></debut>
  <br/>
  <!--<accueil></accueil>
  <br/>
  <qui></qui>
  <br/>
  <projet></projet>
  <br/>
  <contact></contact>
  <br/>
  <pb404></pb404>-->
  <router-view></router-view>
  <br/>
  <fin></fin>

</template>

<style scoped>
</style>
