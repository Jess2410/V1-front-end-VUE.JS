<template>
  <form action="" method="post">
    <label for="id">N° Artisan : </label>
    <input type="text" name="id" />
    <br />
    <label for="nom">Raison sociale : </label>
    <input type="text" name="nom" />
    <br />
    <label for="adresse">Adresse : </label>
    <input type="text" name="adresse" />
    <br />
    <label for="siren">SIREN : </label>
    <input type="text" name="siren" />
    <br />
    <label for="email">Email : </label>
    <input type="text" name="email" />
    <br />
    <label for="telephone">Téléphone : </label>
    <input type="text" name="telephone" />
    <br />
    <label for="commentaire">Commentaire : </label>
    <textarea name="commentaire" cols="30" rows="10"></textarea>
    <br />
    <button type="submit">Enregistrer</button>
  </form>
</template>


<script>
export default {
  name: "NewArtisan",
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
