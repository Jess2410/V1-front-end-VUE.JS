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
        <th>Date</th>
        <th>Statut</th>
        <th>Description</th>
        <th>Photos</th>
        <th>Infos Client</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The table body</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
      </tr>
      <tr>
        <td>The table body</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
        <td>with two columns</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DashboardAdmin",
  props: {
    msg: String,
  },
  methods: {
    toggleModal() {
      this.$router.push("/form_demand");
      this.showModal = !this.showModal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

