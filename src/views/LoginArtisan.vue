<template>
  <div class="flex">
    <div class="part">
      <img :src="require('../assets/plateologo.png')" />
    </div>
    <div class="part2">
      <form class="form-style-9" @submit="login()">
        <h5>Bienvenue</h5>
        <h4>Connectez-vous</h4>
        <label for="email">Adresse email :</label>
        <br />
        <input
          type="email"
          name="email"
          class="field-style field-full align-none"
          placeholder="John@mail.fr"
          v-model="email"
        />

        />
        <br />
        <input type="submit" value="Bienvenue" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginArtisan",
};
</script>

<style scoped>
.form-style-9 {
  max-width: 550px;
  padding: 30px;
  margin-left: 10px auto;
  z-index: 1000;
  margin-top: 10%;
}
input {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}

.submit {
  border-radius: 5px;
  box-shadow: #f8f8f8 5px 5px 5px;
  padding: 1em;
  background-color: #0877df;
  color: white;
  border: 0;
  font-weight: bold;
}
img {
  height: 80%;
  position: absolute;
  margin-left: 10%;
}

.flex {
  display: flex;
  flex-direction: row;
}
.part2 {
  position: absolute;
  margin-left: 60%;
}
</style>
