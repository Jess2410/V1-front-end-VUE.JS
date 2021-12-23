<template>
  <p>à effacer</p>
  <!-- <input
    type="text"
    name="field1"
    class="field-style field-full"
    placeholder="Titre"
  />
  <li>
    <select>
      <option value="1" selected :key="key" v-for="(el, key) in clients">
        <p>{{ el.nameRS }}</p>
        <p>{{ el.lastname }}</p>
      </option>
    </select>
  </li>

  <li>
    <select id="statut" class="field-style field-full">
      <option value="0">0 - Demande annulée</option>
      <option value="1" selected>1 - Attente acceptation artisan</option>
      <option value="2">2 - Attente de réception devis</option>
      <option value="3">3 - Attente d'approbation devis</option>
      <option value="4">4 - Attente de devis</option>
      <option value="5">5 - Travaux à réaliser</option>
      <option value="6">6 - Travaux réalisés</option>
      <option value="7">7 - Travaux annulés</option>
    </select>
  </li>

  <li>
    <input
      type="text"
      name="field4"
      class="field-style field-split align-left"
      placeholder="Description"
    />

    <input
      type="text"
      name="field4"
      class="field-style field-split align-right"
      placeholder="Adresse des Travaux"
    />
  </li>
  <li>
    <input
      type="date"
      name="field3"
      class="field-style field-split align-left"
      placeholder="Date début travaux"
    />

    <input
      type="date"
      name="field4"
      class="field-style field-split align-right"
      placeholder="Date fin travaux"
    />
  </li>
  <li>
    <input type="file" value="Joindre Photos" />
  </li> -->

  <!-- <input
          type="text"
          name="field3"
          class="field-style field-split align-left"
          placeholder="Statut"
        /> -->
</template>


<script>
import axios from "axios";
export default {
  name: "NewDemand",
  components: {},
  data: function () {
    return {
      // id: "",
      clients: [],
      nameRS: "",
      adresse: "",
      siren: "",
      email: "",
      tel: "",
      comment: "",
    };
  },
  async mounted() {
    axios
      .get("http://127.0.0.1:8000/api/client")
      .then((response) => (this.clients = response.data));
  },
  methods: {
    //------------------------envoi validation formulaire Nouvelle demande------------------------
    createNewDemand: async function () {
      const body = {
        // id=this.id,
        nameRS: this.nameRS,
        adresse: this.adresse,
        siren: this.siren,
        email: this.email,
        tel: this.tel,
        comment: this.comment,
      };

      const response = await axios.post(
        "http://127.0.0.1:8000/api/demandes",
        body
      );

      if (response) {
        this.$router.push("/");
      } else {
        alert("Votre requête n'a pas été prise en compte");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-style-9 {
  max-width: 450px;
  background: #fafafa;
  padding: 30px;
  margin: 50px auto;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  border: 6px solid #0877df;
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
fieldset {
  border-radius: 5px;
  padding: 20px;
  border: #0877df 1px solid;
}

legend {
  padding: 5px;
  color: #0877df;
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
</style>
