<template>
  <v-container class="card-deck">
    <div class="d-flex justify-space-between align-center">
      <p>All heroes workout</p>
      <input
        rounded
        class="grey lighten-4 px-3 py-1 black--text"
        type="search"
        v-model="searchKeyword"
        placeholder="Search Workout"
      />
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        v-for="hero in searchKeyword.length === 0 ? heroes : searchHeroes"
        :key="hero.id"
      >
        <v-card>
          <v-img src="../assets/picture.jpg" height="350px"></v-img>
          <v-card-title class="card-title">{{
            hero.workoutTitle
          }}</v-card-title>
          <v-card-subtitle class="card-text">{{
            hero.deskripsiSingkat
          }}</v-card-subtitle>
          <v-card-actions class="card-footer">
            <v-btn class="secondary" @click="getHeroes(hero.id)">Detail</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- MODAL -->
    <template v-if="this.show">
      <v-row justify="center">
        <v-dialog v-model="this.show" persistent max-width="600">
          <v-card>
            <v-card-title>{{ showHero.workoutTitle }}</v-card-title>
            <v-card-subtitle class="card-text">{{
              showHero.deskripsiSingkat
            }}</v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Exercise</th>
                    <th class="text-left">Warm Up</th>
                    <th class="text-left">Working Sets</th>
                    <th class="text-left">Rest Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="excercise in showHero.excerciseData"
                    :key="excercise.id"
                  >
                    <td>{{ excercise.excercise }}</td>
                    <td>{{ excercise.warmup }}</td>
                    <td>{{ excercise.workingSets }}</td>
                    <td>{{ excercise.restPeriod }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-card-actions>
              <v-btn class="secondary" @click="hideModal">Got It</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-container>
</template>
<script>
import axios from 'axios';

const mainUrl = `http://localhost:5000/heroes`;

export default {
  name: 'heroWorkout',
  data() {
    return {
      heroes: [],
      searchHeroes: [],
      searchKeyword: '',
      show: false,
      showHero: {},
    };
  },
  methods: {
    async fetchHeroes() {
      const { data } = await axios.get(mainUrl);
      this.heroes = data;
    },
    async getHeroes(id) {
      const { data } = await axios.get(`${mainUrl}/${id}`);
      this.showHero = data;
      this.show = true;
    },
    hideModal() {
      this.showHero = {};
      this.show = false;
    },
    filterHeroes(value) {
      this.searchHeroes = this.heroes.filter((hero) =>
        hero.workoutTitle.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
  mounted() {
    this.fetchHeroes();
  },
  watch: {
    searchKeyword: function(value) {
      this.filterHeroes(value);
    },
  },
};
</script>
