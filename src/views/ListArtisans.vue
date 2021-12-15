<template>
  <div class="home">
    <CompListeArtisans />
  </div>
</template>

<script>
// @ is an alias to /src

import CompListeArtisans from "../components/CompListeArtisans.vue";

export default {
  name: "ListArtisans",
  components: {
    CompListeArtisans,
  },
};
</script>