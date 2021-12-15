<template>
  <form class="form-style-9" @submit="createNewArtisan()">
    <h3>Création d'une nouvelle demande</h3>
    <ul>
      <li>
        <input type="hidden" placeholder="id" />
        <div class="part1">
          <input
            type="text"
            name="field1"
            class="field-style field-split align-left"
            placeholder="Titre"
          />

          <input
            type="date"
            name="field2"
            class="field-style field-split align-right"
            placeholder="Date"
          />

          <li>
            <select id="statut">
              <option value="0">0 - Demande annulée</option>
              <option value="1" selected>
                1 - Attente acceptation artisan
              </option>
              <option value="2">2 - Attente de réception devis</option>
              <option value="3">3 - Attente d'approbation devis</option>
              <option value="4">4 - Attente de devis</option>
              <option value="5">5 - Travaux à réaliser</option>
              <option value="6">6 - Travaux réalisés</option>
              <option value="7">7 - Travaux annulés</option>
            </select>
          </li>
        </div>
        <!-- <input
          type="text"
          name="field3"
          class="field-style field-split align-left"
          placeholder="Statut"
        /> -->
        <p>Type de client :</p>

        <div>
          <input
            type="radio"
            id="particulier"
            name="particulier"
            value="Particulier"
            checked
          />
          <label for="particulier">Particulier</label>

          <input
            type="radio"
            id="Entreprise"
            name="entreprise"
            value="Entreprise"
          />
          <label for="entreprise">Entreprise</label>
        </div>

        <input
          type="text"
          name="field4"
          class="field-style field-split align-right"
          placeholder="Description"
        />
      </li>

      <details>
        <summary>Informations Client</summary>

        <li>
          <input
            type="text"
            name="field3"
            class="field-style field-full align-none"
            placeholder="Particulier ou Entreprise - reste à mettre autres inputs"
          />
        </li>
      </details>
      <li>
        <textarea
          name="field5"
          class="field-style"
          placeholder="Commentaire"
        ></textarea>
      </li>
      <li>
        <input type="button" value="Joindre Photos" />
      </li>
      <li>
        <input type="submit" value="Enregistrer" />
      </li>
    </ul>
  </form>
</template>




<script>
export default {
  name: "NewDemand",
  components: {},
  data: function () {
    return {
      numeroArtisan: "",
      raisonSociale: "",
      adresse: "",
      siren: "",
      email: "",
      telphone: "",
      commentaire: "",
    };
  },
  // methods: {
  //   //------------------------envoi validation formulaire Nouvel Artisan------------------------

  //   CreateClubAcount: async function () {
  //     const body = {
  //       nomDuClub: this.nomDuClub,
  //       nomDuRepresentant: this.nomDuRepresentant,
  //       emailClub: this.emailClub,
  //       motDePasseClub: this.motDePasseClub,
  //       confirmePassClub: this.confirmePassClub,
  //     };
  //     console.log(body);
  //     const response = await axios.post(
  //       "https://localhost:8000/club/new",
  //       body
  //     );
  //     if (response.data === "Success") {
  //       const redirect_url = "/";
  //       this.$router.push(redirect_url);
  //     }
  //   },
  // },
  // // -----------------------envoi validation formulaire Particulier---------------

  // CreateParticulierAcount: async function () {
  //   if (this.passParticulier !== this.confirmePassParticulier) {
  //     console.log("create ok");
  //     alert("veuillez saisir un mot de passe identique");
  //   } else {
  //     const body = {
  //       nomParticulier: this.nomParticulier,
  //       emailParticulier: this.emailParticulier,
  //       passParticulier: this.passParticulier,
  //       confirmePassParticulier: this.confirmePassParticulier,
  //       codeParrainage: this.codeParrainage,
  //     };
  //     console.log("create ok");
  //     const response = await axios.post(
  //       "https://localhost:8000/user/new",
  //       body
  //     );

  //     if (response.data === "Success") {
  //       const redirect_url = "/";
  //       this.$router.push(redirect_url);
  //     }
  //   }
  // },
  // myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // },
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
/* .part1,
.part2 {
  background-color: #d3dce6;
  border-radius: 5px;
  height: 1rem;
} */
</style>
