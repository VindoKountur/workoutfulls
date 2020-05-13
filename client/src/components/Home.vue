<template>
  <div class="home d-flex justify-space-around">
    <router-link to="/personal" class="no-decoration">
      <v-card max-width="544">
        <v-img src="../assets/picture.jpg" height="400px"></v-img>
        <v-card-title>Personal Workout</v-card-title>
        <v-card-subtitle>Your Personal and Customized Workout.</v-card-subtitle>
      </v-card>
    </router-link>
    <router-link to="/hero" class="no-decoration">
      <v-card max-width="544">
        <v-img src="../assets/picture.jpg" height="400px"></v-img>
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