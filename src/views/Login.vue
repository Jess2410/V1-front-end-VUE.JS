<template>
  <div class="flex">
    <div class="part">
      <img :src="require('../assets/Logoquadri.png')" />
    </div>
    <div class="part2">
      <form class="form-style-9" @submit="login()">
        <h4>Bienvenue</h4>
        <h3>Connectez-vous</h3>
        <label for="email">Adresse email :</label>
        <br />
        <input
          type="email"
          name="email"
          class="field-style field-full align-none"
          placeholder="John@mail.fr"
          v-model="email"
        />
        <br />
        <label for="password">Mot de passe :</label>
        <br />
        <input
          type="password"
          name="password"
          class="field-style field-full align-none"
          placeholder="*********"
          v-model="password"
        />
        <br />
        <input type="submit" value="Connexion" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.form-style-9 {
  max-width: 550px;
  padding: 30px;
  margin-left: 10px auto;
  z-index: 1000;
  margin-top: 50%;
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
  background-color: #2b90d9;
  color: white;
  border: 0;
  font-weight: bold;
}
img {
  margin-top: 15%;
  height: 45%;
  position: absolute;
  margin-left: 8%;
}

.flex {
  display: flex;
  flex-direction: row;
}
.part2 {
  position: absolute;
  margin-left: 60%;
}
placeholder {
  font-size: 15px;
}
</style>
