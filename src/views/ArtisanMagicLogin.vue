<template>
  <div><h1>Connexion en cours...</h1></div>
</template>

<script>
import axios from "axios";
import { apiUrl } from "../config.json";

export default {
  /* Props */
  props: {
    loginToken: String,
  },

  /* Data properties */
  data() {
    return { message: "" };
  },

  /* Mounted */
  mounted() {
    axios
      .post(apiUrl + "/auth/artisan", {
        loginToken: this.loginToken,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          this.$router.replace("/dashboard_artisan");
        } else {
          this.message = response.data.message;
        }
      });
  },
};
</script>

<style scoped></style>
