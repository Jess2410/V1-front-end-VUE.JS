<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
    integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
    crossorigin="anonymous"
  />

  <router-view />
</template>



<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4c535a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #424eb9;
}

button {
  border-radius: 5px;
  box-shadow: #f8f8f8 5px 5px 5px;
  padding: 1em;
  background-color: #0877df;
  color: white;
  border: 0;
}

tbody {
  border-radius: 5px;
  padding: 5px;
  border-collapse: inherit;
  background-color: rgb(204, 200, 200);
}

thead,
tfoot {
  background-color: #f8f8f8;
  color: #4c535a;
  font-weight: 100;
}

table {
  border-radius: 5px;
  width: 90vw;
  margin: auto;
  margin-top: 10vh;
}
button {
  position: relative;
  margin-left: 80vw;
  font-weight: bold;
}
placeholder {
  font-size: 20 px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
