<template>
  <nav>
    <p>Bonjour,</p>
  </nav>
  <br />
  <div class="home">
    <CompDashboardArtisan />
  </div>
</template>

<script>
// @ is an alias to /src
import CompDashboardArtisan from "@/components/CompDashboardArtisan.vue";
// import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    CompDashboardArtisan,
  },
};
</script>
<style scoped>
nav {
  height: 5%;
  margin: 0;
  background-color: #00a3ff;
  color: white;
  text-align: left;
  padding: 1%;
}
</style>