<template>
  <button>Ajout nouvel artisan</button>
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
  name: "CompListeArtisans",
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
