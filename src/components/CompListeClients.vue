<template>
  <button class="newClient" @click="toggleModal">
    <i class="fas fa-plus"></i> Nouveau Client
  </button>
  <br />
  <table>
    <thead>
      <tr>
        <th>N° ID</th>
        <th>Raison sociale</th>
        <th>SIREN</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Adresse</th>
        <th>Téléphone</th>
        <th>Email</th>
        <th>Commentaire</th>
        <th>Action</th>
      </tr>
    </thead>
    <!-- email et comment à rajouter dans le back -->
    <tbody>
      <tr :key="key" v-for="(el, key) in clients">
        <td>{{ el.id }}</td>
        <td>{{ el.nameRS }}</td>
        <td>{{ el.siren }}</td>
        <td>{{ el.lastname }}</td>
        <td>{{ el.firstname }}</td>
        <td>{{ el.adresse }}</td>
        <td>{{ el.tel }}</td>
        <td>{{ el.email }}</td>
        <td>{{ el.comment }}</td>
        <td>
          <button @click="del"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "CompListeClients",
  props: {},
  data() {
    return {
      clients: [],
    };
  },

  methods: {
    toggleModal() {
      this.$router.push("/form_client");
      this.showModal = !this.showModal;
    },
    del() {
      confirm("Êtes-vous sûr de vouloir supprimer ce client?");
    },
  },
  async mounted() {
    axios
      .get("http://127.0.0.1:8000/api/client")
      .then((response) => (this.clients = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin: 2px;
  box-shadow: none;
  background-color: rgb(199, 23, 23);
}
.newClient {
  position: relative;
  margin-left: 75vw;
  font-weight: bold;
  background-color: #0877df;
}
</style>
