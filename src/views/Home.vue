<template>
  <div class="home">
    <DashboardAdmin />
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardAdmin from "@/components/DashboardAdmin.vue";

export default {
  name: "Home",
  components: {
    DashboardAdmin,
  },
};
</script>
