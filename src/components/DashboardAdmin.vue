<template>
  <button>Ajout nouvelle demande</button>
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
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DashboardAdmin",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table,
td {
  border: 1px solid #333;
}

thead,
tfoot {
  background-color: #333;
  color: #fff;
}
</style>
