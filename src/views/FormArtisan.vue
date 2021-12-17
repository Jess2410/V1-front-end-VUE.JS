<template>
  <div id="mainContainer">
    <div v-show="showModal" class="modal">
      <a class="align-right" href="/">Annuler</a>
      <NewArtisanForm />
    </div>
    <div v-show="showModal" class="overlay"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewArtisanForm from "@/components/NewArtisanForm.vue";
// import axios from "axios";

export default {
  name: "FormArtisan",
  components: {
    NewArtisanForm,
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

<style scoped>
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
  z-index: 1000;
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