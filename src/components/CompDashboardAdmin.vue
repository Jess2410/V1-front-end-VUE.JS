<template>
  <button class="newDemand" @click="toggleModal">
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
        <th class="bouton">Action</th>
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
        <td>
          <button @click="del(el.id)"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "CompDashboardAdmin",
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
    del: async function (id) {
      if (confirm("Êtes-vous sûr de vouloir supprimer cette demande?")) {
        await axios.delete("http://127.0.0.1:8000/api/demande/" + id);
        window.location.reload();
      }
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
<style scoped>
.newDemand {
  position: relative;
  margin-left: 75vw;
  font-weight: bold;
  background-color: #0877df;
}
button {
  margin: 2px;
  box-shadow: none;
  background-color: rgb(199, 23, 23);
}
</style>
