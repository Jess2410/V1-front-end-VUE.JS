<template>
  <button @click="toggleModal">
    <i class="fas fa-plus"></i> Nouvelle demande
  </button>
  <br />
  <table>
    <thead>
      <tr>
        <th>N° ID</th>
        <th>Titre</th>
        <th>Description</th>
        <th>Adresse</th>
        <th>Id Client</th>
        <th>Date Début</th>
        <th>Date fin</th>
        <th>Statut</th>
        <th>Date demande</th>
        <th>Photos</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="key" v-for="(el, key) in demandes">
        <td>{{ el.id }}</td>
        <td>{{ el.title }}</td>
        <td>{{ el.description }}</td>
        <td>{{ el.adresse }}</td>
        <td>{{ el.clients_id }}</td>
        <td>{{ el.start }}</td>
        <td>{{ el.end }}</td>
        <td>{{ el.status }}</td>
        <td>{{ el.created_at }}</td>

        <!-- <td>{{ el.photos }}</td> -->
        <td>{{ el.infos }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "DashboardAdmin",
  data() {
    return {
      demandes: [],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    toggleModal() {
      this.$router.push("/form_demand");
      this.showModal = !this.showModal;
    },
  },
  async mounted() {
    axios
      .get("http://127.0.0.1:8000/api/demande")
      .then((response) => (this.demandes = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

