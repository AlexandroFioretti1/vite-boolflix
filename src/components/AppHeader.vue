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
    <div class="container">
      <div class="d-flex justify-content-between align-items-center pt-2">
        <h1>BOOLFLIX</h1>
        <div>
          <div class="input-group mb-3">

            <input v-model="store.SearchMovies" type="text" class="form-control" placeholder="Search Film or Series" aria-label="Search Film or Series" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" > Search </button>
            
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
