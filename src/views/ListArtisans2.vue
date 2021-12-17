<template>
  <div class="home">
    <CompListArtisans />
  </div>
</template>

<script>
// @ is an alias to /src

import CompListeArtisans from "../components/CompListeArtisans.vue";

export default {
  name: "ListArtisans2",
  components: {
    CompListeArtisans,
  },
};
</script>