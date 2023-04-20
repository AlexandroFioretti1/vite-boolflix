<script>
import { store } from "../assets/data/store";
import SingleMovie from "./SingleMovie.vue";
import CountryFlag from "vue-country-flag-next";
import SingleSerie from "./SingleSerie.vue";

export default {
  name: "AppMain",
  components: {
    SingleMovie,
    CountryFlag,
    SingleSerie,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>

  <SingleMovie :movie="movie" v-for="movie in store.movies"></SingleMovie>
  <SingleSerie :serie="serie" v-for="serie in store.series"></SingleSerie>
  
</template>

<style scoped lang="scss"></style>
