<script>
import { store } from "../assets/data/store";
import SingleMovie from "./SingleMovie.vue";
import SingleSerie from "./SingleSerie.vue";

export default {
  name: "AppMain",
  components: {
    SingleMovie,
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
  <!-- Cards for movie cicle for num film -->
  <SingleMovie :movie="movie" v-for="movie in store.movies"></SingleMovie>

  <!-- Cards for movie cicle for num serie -->
  <SingleSerie :serie="serie" v-for="serie in store.series"></SingleSerie>
</template>
