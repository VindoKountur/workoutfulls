<template>
  <v-app>
    <v-content>
      <Navbar />
      <Judul />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Judul from "./components/Judul";

export default {
  name: "App",

  components: {
    Navbar,
    Judul
  }
};
</script>
<style>
.no-decoration {
  text-decoration: none;
}
.relative--card {
  position: relative;
}
</style>