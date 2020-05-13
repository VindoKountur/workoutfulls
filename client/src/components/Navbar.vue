<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <div>
        <router-link class="white--text no-decoration" to="/">Home</router-link>
      </div>
      <div class="ml-5">
        <router-link class="white--text no-decoration" to="/about"
          >About</router-link
        >
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navbar',
};
</script>
