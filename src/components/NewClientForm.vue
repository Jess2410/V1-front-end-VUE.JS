<template>
  <form class="form-style-9" @submit.prevent="createNewClient()">
    <h3>Création d'un nouveau client</h3>
    <ul>
      <label for="type">
        Particulier
        <input
          id="type"
          type="radio"
          @click="handleTypeChange('particular')"
          name="type"
          checked
        />
      </label>
      <label for="type">
        Entreprise
        <input
          id="type"
          type="radio"
          @click="handleTypeChange('company')"
          name="type"
        />
      </label>
      <li>
        <!-- <input type="hidden" placeholder="id" /> -->
        <input
          type="text"
          name="nameRS"
          class="field-style field-split align-left"
          placeholder="Raison Sociale"
          v-model="nameRS"
          v-if="type === 'company'"
        />
        <input
          type="number"
          name="siren"
          class="field-style field-split align-right"
          placeholder="Siren"
          v-model="siren"
          v-if="type === 'company'"
        />
      </li>
      <li>
        <input
          type="text"
          name="lastname"
          class="field-style field-split align-left"
          placeholder="Nom"
          v-model="lastname"
        />
        <input
          type="text"
          name="firstname"
          class="field-style field-split align-right"
          placeholder="Prénom"
          v-model="firstname"
        />
      </li>
      <li>
        <input
          type="text"
          name="adresse"
          class="field-style field-full align-none"
          placeholder="Adresse"
          v-model="adresse"
        />
      </li>
      <li>
        <input
          type="number"
          name="tel"
          class="field-style field-split align-left"
          placeholder="Téléphone"
          v-model="tel"
        />
        <input
          type="text"
          name="email"
          class="field-style field-split align-right"
          placeholder="Email"
          v-model="email"
        />
      </li>
      <li>
        <textarea
          name="comment"
          class="field-style"
          placeholder="Commentaire"
          v-model="comment"
        ></textarea>
      </li>
      <li>
        <input type="submit" value="Enregistrer" />
      </li>
    </ul>
  </form>

  <br />
</template>

<script>
import axios from "axios";

export default {
  name: "NewClient",
  components: {},
  data: function () {
    return {
      // id: "",
      type: "particular",
      nameRS: "",
      siren: "",
      lastname: "",
      firstname: "",
      adresse: "",
      tel: "",
      email: "",
      comment: "",
    };
  },
  methods: {
    //------------------------envoi validation formulaire Nouvel Artisan------------------------
    createNewClient: async function () {
      const body = {
        // id=this.id,
        nameRS: this.nameRS,
        siren: this.siren,
        lastname: this.lastname,
        firstname: this.firstname,
        adresse: this.adresse,
        tel: this.tel,
        email: this.email,
        comment: this.comment,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/client",
        body
      );

      if (response) {
        this.$router.push("/list_clients");
        window.alert("Le client a bien été ajouté.");
      } else {
        alert("Votre requête n'a pas été prise en compte");
      }
    },
    handleTypeChange(type) {
      this.type = type;
      if (type === "company") {
        this.textButton = "Ajouter un client Entreprise";
      } else {
        this.textButton = "Ajouter un client Particulier";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-style-9 {
  max-width: 550px;
  padding: 30px;
  margin: 50px auto;
}
.form-style-9 ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.form-style-9 ul li {
  display: block;
  margin-bottom: 10px;
  min-height: 35px;
}
.form-style-9 ul li .field-style {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 8px;
  outline: none;
}
.form-style-9 ul li .field-style:focus {
  box-shadow: 0 0 5px #b0cfe0;
  border: 1px solid #b0cfe0;
}
.form-style-9 ul li .field-split {
  width: 49%;
}
.form-style-9 ul li .field-full {
  width: 100%;
}
.form-style-9 ul li input.align-left {
  float: left;
}
.form-style-9 ul li input.align-right {
  float: right;
}
.form-style-9 ul li textarea {
  width: 100%;
  height: 100px;
}
.form-style-9 ul li input[type="button"],
.form-style-9 ul li input[type="submit"] {
  -moz-box-shadow: inset 0px 1px 0px 0px #3985b1;
  -webkit-box-shadow: inset 0px 1px 0px 0px #3985b1;
  box-shadow: inset 0px 1px 0px 0px #3985b1;
  background-color: #0877df;
  border: 1px solid #17445e;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  padding: 8px 18px;
  text-decoration: none;
  font: 12px Arial, Helvetica, sans-serif;
  border-radius: 5px;
}
.form-style-9 ul li input[type="button"]:hover,
.form-style-9 ul li input[type="submit"]:hover {
  background: linear-gradient(to bottom, #2d77a2 5%, #337da8 100%);
  background-color: #0877df;
  border-radius: 5px;
}
</style>
