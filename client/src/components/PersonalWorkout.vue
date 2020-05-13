<template>
  <v-container>
    <p>Please Type Your Workout Type</p>
    <div v-if="this.doingUpdate">
      <form @submit.prevent="updatePersonals">
        <v-layout>
          <v-flex xs12>
            <input
              type="text"
              v-model="newWorkout"
              placeholder="Workout Type"
              class="py-2 px-1"
              style="width:100%; border: 1px solid black"
            />
          </v-flex>
          <v-flex xs6 class="ml-1">
            <v-btn type="submit" class="secondary white--text px-4">Update</v-btn>
            <v-btn class="red white--text" @click="deletePersonal">Delete</v-btn>
            <v-btn @click="closeSelect">Close</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </div>
    <div v-else>
      <form @submit.prevent="addPersonals">
        <v-layout>
          <v-flex xs12>
            <input
              type="text"
              v-model="newWorkout"
              placeholder="Workout Type"
              class="py-2 px-1"
              style="width:100%; border: 1px solid black"
            />
          </v-flex>
          <v-flex xs4 class="ml-1">
            <v-btn type="submit" class="secondary white--text px-4">Add</v-btn>
          </v-flex>
        </v-layout>
      </form>
    </div>

    <div class="mt-3">
      <h2>Your Today Workout</h2>
      <div
        class="workoutList d-flex justify-start align-center"
        v-for="personal in personals.slice().reverse()"
        :key="personal.id"
      >
        <div>
          <input type="checkbox" @click.prevent="getPersonal(personal.id)" :id="personal.id" />
        </div>
        <label class="ml-2" :for="personal.id">{{ personal.workout }}</label>
      </div>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";

const mainUrl = `http://localhost:5000/personal`;
export default {
  name: "PersonalWorkout",
  data() {
    return {
      personals: [],
      newWorkout: "",
      doingUpdate: false,
      selectId: ""
    };
  },
  methods: {
    async fetchPersonals() {
      const { data } = await axios.get(mainUrl);
      this.personals = data;
    },
    async addPersonals() {
      const data = {
        workout: this.newWorkout
      };
      await axios.post(mainUrl, data);
      await this.fetchPersonals();
    },
    async getPersonal(id) {
      const { data } = await axios.get(`${mainUrl}/${id}`);
      this.newWorkout = data.workout;
      this.selectId = id;
      // console.log(this.selectId);
      this.doingUpdate = true;
    },
    async updatePersonals() {
      await axios.put(`${mainUrl}/${this.selectId}`, {
        workout: this.newWorkout
      });
      await this.fetchPersonals();
      this.closeSelect();
    },
    async deletePersonal() {
      await axios.delete(`${mainUrl}/${this.selectId}`);
      await this.fetchPersonals();
      this.closeSelect();
    },
    closeSelect() {
      this.selectId = "";
      this.newWorkout = "";
      this.doingUpdate = false;
      this.selectId = "";
    }
  },
  mounted() {
    this.fetchPersonals();
  }
};
</script>