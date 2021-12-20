<template>
  <button @click="toggleModal">
    <i class="fas fa-plus"></i> Nouvel artisan
  </button>
  <br />
  <table>
    <thead>
      <tr>
        <th>N° ID</th>
        <th>Raison sociale</th>
        <th>Adresse</th>
        <th>SIREN</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Commentaire</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="key" v-for="(el, key) in artisans">
        <td>{{ el.id }}</td>
        <td>{{ el.nameRS }}</td>
        <td>{{ el.adresse }}</td>
        <td>{{ el.siren }}</td>
        <td>{{ el.email }}</td>
        <td>{{ el.tel }}</td>
        <td>{{ el.comment }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "CompListeArtisans",
  props: {},
  data() {
    return {
      artisans: [],
    };
  },

  methods: {
    toggleModal() {
      this.$router.push("/form_artisan");
      this.showModal = !this.showModal;
    },
  },
  async mounted() {
    axios
      .get("http://127.0.0.1:8000/api/artisan")
      .then((response) => (this.artisans = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
