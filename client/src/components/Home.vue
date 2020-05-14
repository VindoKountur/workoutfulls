<template>
  <div class="home d-flex justify-space-around">
    <router-link to="/personal" class="no-decoration">
      <v-card max-width="544" class="relative--card">
        <v-img src="../assets/picture.jpg" height="400px"></v-img>
        <v-icon large color="white darken-2" class="red roundbox">mdi-plus</v-icon>
        <v-card-title>Personal Workout</v-card-title>
        <v-card-subtitle>Your Personal and Customized Workout.</v-card-subtitle>
      </v-card>
    </router-link>
    <router-link to="/hero" class="no-decoration">
      <v-card max-width="544" class="relative--card">
        <v-img src="../assets/picture.jpg" height="400px"></v-img>
        <v-icon large color="white darken-2" class="red roundbox">mdi-plus</v-icon>
        <v-card-title>Hero Workout</v-card-title>
        <v-card-subtitle>Your Precompiled and Ready to Use Workout.</v-card-subtitle>
      </v-card>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home"
};
</script>
<style scoped>
.roundbox {
  border-radius: 50%;
  position: absolute;
  margin-top: -18px;
  right: 3rem;
}
</style>