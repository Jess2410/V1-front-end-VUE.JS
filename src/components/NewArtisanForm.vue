<template>
  <form class="form-style-9" @submit="createNewArtisan()">
    <h3>Création d'un nouvel artisan</h3>
    <ul>
      <li>
        <input type="hidden" placeholder="id" />
        <input
          type="text"
          name="field1"
          class="field-style field-split align-left"
          placeholder="Raison Sociale"
        />
        <input
          type="email"
          name="field2"
          class="field-style field-split align-right"
          placeholder="Adresse"
        />
      </li>
      <li>
        <input
          type="text"
          name="field3"
          class="field-style field-split align-left"
          placeholder="Siren"
        />
        <input
          type="url"
          name="field4"
          class="field-style field-split align-right"
          placeholder="Email"
        />
      </li>
      <li>
        <input
          type="text"
          name="field3"
          class="field-style field-full align-none"
          placeholder="Téléphone"
        />
      </li>
      <li>
        <textarea
          name="field5"
          class="field-style"
          placeholder="Commentaire"
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
  name: "NewArtisan",
  components: {},
  data: function () {
    return {
      id: "",
      raisonSociale: "",
      adresse: "",
      siren: "",
      email: "",
      telephone: "",
      commentaire: "",
    };
  },
  methods: {
    //------------------------envoi validation formulaire Nouvel Artisan------------------------
    // CreateNewArtisan: async function () {
    //   const body = {
    //     // id=this.id,
    //     raisonSociale: this.raisonSociale,
    //     adresse: this.adresse,
    //     siren: this.siren,
    //     email: this.email,
    //     telephone: this.telephone,
    //     commentaire: this.commentaire,
    //   };
    //   console.log(body);
    //   const response = await axios.post(
    //     "https://localhost:8000/club/new",
    //     body
    //   );
    //   if (response.data === "Success") {
    //     const redirect_url = "/";
    //     this.$router.push(redirect_url);
    //   }
    // },
  },
  // -----------------------envoi validation formulaire Particulier---------------

  CreateParticulierAcount: async function () {
    if (this.passParticulier !== this.confirmePassParticulier) {
      console.log("create ok");
      alert("veuillez saisir un mot de passe identique");
    } else {
      const body = {
        nomParticulier: this.nomParticulier,
        emailParticulier: this.emailParticulier,
        passParticulier: this.passParticulier,
        confirmePassParticulier: this.confirmePassParticulier,
        codeParrainage: this.codeParrainage,
      };
      console.log("create ok");
      const response = await axios.post(
        "https://localhost:8000/user/new",
        body
      );

      if (response.data === "Success") {
        const redirect_url = "/";
        this.$router.push(redirect_url);
      }
    }
  },
  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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
</style>

