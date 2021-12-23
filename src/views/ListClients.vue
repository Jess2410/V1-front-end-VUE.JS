<template>
  <nav>
    <div id="nav">
      <img :src="require('../assets/plateologo.png')" />
      <router-link to="/"> Mon Dashboard </router-link> |
      <!-- <router-link to="/form_artisan">Créer un nouvel artisan</router-link> | -->
      <router-link to="/list_artisans"> Liste des artisans </router-link> |
      <router-link to="/list_clients"> Liste des clients </router-link> |
      <router-link to="/login_artisan"> Login Artisan </router-link> |
      <router-link to="/login_artisan"> Dashboard Artisan </router-link> |
      <router-link to="/login"> Login </router-link>
    </div>
  </nav>
  <div class="home">
    <CompListeClients />
  </div>
</template>

<script>
// @ is an alias to /src

import CompListeClients from "../components/CompListeClients.vue";

export default {
  name: "ListClients",
  components: {
    CompListeClients,
  },
};
</script>
<style scoped>
img {
  position: absolute;
  margin: 0;
  height: 20%;
  left: 10vw;
  top: -3.5vh;
}
</style>
