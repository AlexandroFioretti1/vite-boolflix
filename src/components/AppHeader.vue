<script>
import { store } from "../assets/data/store";

export default {
  name: "AppHeader",
  components: {},
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header>
    <!-- title Page -->
    <div class="container d-flex justify-content-between align-items-center pt-2">
      <h1>BOOLFLIX</h1>
      <!-- search bar for film and serie -->
      <div class="search_box">
        <div class="input-group mb-3">
          <input v-model="store.Search" type="text" class="form-control" placeholder="Search Film or Series" aria-label="Search Film or Series" aria-describedby="button-addon2" />
          <button @click="store.fetchMovie(), store.fetchSerie()" class="btn btn-outline-secondary c_red" type="button" >Search</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 8vh;
  background-color: black;

  h1,
  .red_c {
    color: red;
  }
}
</style>
