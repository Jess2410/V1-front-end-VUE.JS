<template>
  <button @click="toggleModal">Contact Plateo</button>

  <div>
    <h2>Demandes en attente</h2>
    <div :key="key" v-for="(el, key) in demandes" class="cardContainer">
      <h3>{{ el.title }}</h3>
      <p>{{ el.status }}</p>
      <div class="part">
        <div class="infos1">
          <!-- <img :src="require('../assets/plateologo.png')" /> -->
        </div>
        <div class="infos">
          <p>
            <i class="fas fa-map-marker-alt"></i> <span>{{ el.adresse }}</span>
          </p>
          <p>
            <i class="far fa-star"></i> Demande n°<span>{{ el.id }}</span>
          </p>
          <p>{{ el.created_at }}</p>
          <p>{{ el.status }}</p>
        </div>
      </div>
      <div class="button">
        <button class="accept" @click="accept(el.id)">Accepter</button>
        <button class="refus" @click="refus">Refuser</button>
      </div>
      <details>
        <summary>Détails de la demande</summary>
        <p>{{ el.nameRS }}</p>
        <p>{{ el.lastname }}</p>
        <p>{{ el.description }}</p>
        <p>{{ el.start }}</p>
        <p>{{ el.end }}</p>

        <!-- <p>Photos</p> -->
      </details>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashboardAdmin",
  data() {
    return {
      demandes: [],
      status: "",
    };
  },
  props: {
    msg: String,
  },
  methods: {
    accept: async function (id) {
      if (confirm("Êtes-vous sûr de vouloir accepter cette mission ?")) {
        const body = { status: "2 - Attente de réception de devis" };
        await axios.put("http://127.0.0.1:8000/api/demande/" + id, body);
        window.location.reload();
      }
    },
    //  refus: async function(){

    //  }
  },
  async mounted() {
    axios
      .get("http://127.0.0.1:8000/api/demande")
      .then((response) => (this.demandes = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to pis component only -->
<style scoped>
.cardContainer {
  background: rgb(53, 57, 251);
  background: radial-gradient(
    circle,
    rgba(53, 57, 251, 1) 1%,
    rgba(0, 212, 255, 1) 96%
  );
  border-radius: 5px;
  color: white;
  padding: 10px;
  margin: 15px;
}
.button {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 0;
  margin-top: 10px;
  margin-bottom: 15px;
}
.accept {
  background-color: rgb(0, 104, 0);
  margin-left: 0;
  width: 35%;
}
.refus {
  background-color: rgb(192, 1, 1);
  margin-left: 0;
  width: 35%;
}
.infos {
  font-weight: 100;
  text-align: left;
  margin-left: 30%;
}
h3 {
  letter-spacing: 1px;
  font-size: 1.5rem;
  margin: 0;
}
p {
  margin: 0.4px;
}
.part {
  display: flex;
}
.infos1 {
  background-image: src= url(../assets/plateologo.png);
  background-size: 100% 100%;
}
h2 {
  text-align: left;
  padding: 15px;
  letter-spacing: 0.5px;
}
span {
  font-weight: bold;
}
</style>
