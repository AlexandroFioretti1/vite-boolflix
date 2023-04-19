<script>
import { store } from "../assets/data/store";
import SingleMovie from "./SingleMovie.vue";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "AppMain",
  components: {
    SingleMovie,
    CountryFlag,
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
</template>

<style scoped lang="scss"></style>
