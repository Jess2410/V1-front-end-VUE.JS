<template>
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