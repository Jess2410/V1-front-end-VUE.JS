<template>
  <div class="flex">
    <div class="part">
      <img :src="require('../assets/plateologo.png')" />
    </div>
    <div class="part2">
      <form class="form-style-9" @submit.prevent="login()">
        <h5>Bienvenue</h5>
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
        <input
          type="submit"
          value="Bienvenue >"
          placeholder="Bienvenue f054"
          class="submit"
        />
      </form>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../config.json";

export default {
  name: "LoginArtisan",

  data() {
    return {
      email: "",
      message: "",
    };
  },

  methods: {
    login() {
      axios
        .post(apiUrl + "/magic-link/artisan", {
          email: this.email,
        })
        .then((response) => {
          this.message = response.data.message;
        });
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
}

.submit {
  border-radius: 20px;
  box-shadow: #f8f8f8 5px 5px 5px;
  padding: 1em;
  background: rgb(53, 57, 251);
  background: linear-gradient(
    90deg,
    rgba(53, 57, 251, 1) 1%,
    rgba(0, 212, 255, 1) 66%
  );
  color: white;
  border: 0;
  font-weight: bold;
}
img {
  height: 50%;
}

.flex {
  display: flex;
  flex-direction: column;
}
</style>
