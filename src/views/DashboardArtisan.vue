<template>
  <div class="home">
    <DashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdmin from "@/components/DashboardAdmin.vue";
// import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    DashboardAdmin,
  },
};
</script>
