<template>
  <div id="mainContainer">
    <div v-show="showModal" class="modal">
      <form class="form-style-9" @submit="createNewDemand()">
        <a class="align-right" href="/">Annuler</a>
        <h3>Création d'une nouvelle demande</h3>
        <ul>
          <input type="hidden" placeholder="id" />
          <fieldset>
            <legend class="part-title">Information du client</legend>
            <input type="radio" name="client" value="new" checked />
            <label for="new">Nouveau Client</label>
            <input type="radio" name="client" value="exist" />
            <label for="exist">Client existant</label>

            <!-- <CompFormNewClient />
        <CompFormClientExists /> -->
          </fieldset>
          <fieldset>
            <legend>Information de la demande</legend>
            <NewDemandForm />
          </fieldset>
        </ul>

        <br />

        <input type="submit" value="Enregistrer" class="submit" />
      </form>
    </div>
    <div v-show="showModal" class="overlay"></div>
  </div>
</template>



<script>
// import CompFormNewClient from "@/components/CompFormNewClient.vue";
// import CompFormClientExists from "@/components/CompFormClientExists.vue";
import NewDemandForm from "@/components/NewDemandForm.vue";

export default {
  name: "FormDemand",
  components: {
    // CompFormNewClient,
    // CompFormClientExists,
    NewDemandForm,
  },
  data: function () {
    return {
      showModal: true,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .form-style-9 {
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
} */
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
html,
body {
  margin: 0;
}

#mainContainer .modal {
  position: fixed;
  top: 10vh;
  bottom: 10vh;
  left: 20vw;
  right: 20vw;
  background-color: white;
  box-shadow: 3px 4px 8px black;
  border-radius: 5px;
  padding: 20px;
  z-index: 10;
}
#mainContainer .overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: black;
  opacity: 0.7;
}
.align-right {
  float: right;
  text-align: right;
  margin-right: 0;
}
</style>
