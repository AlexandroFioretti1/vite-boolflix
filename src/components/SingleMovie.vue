<script>
import { store } from "../assets/data/store";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "SingleMovie",
  components: { CountryFlag },
  props: {
    movie: Object,
  },
  methods: {
    uselanguage(language) {
      switch (language) {
        case "ko":
          return "kr";
        case "ja":
          return "jp";
        case "en":
          return "gb";
        default:
          return language;
      }
    },
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- Card whit Films -->
  <div class="container d-flex justify-content-between text-center">
    <div class="row">
      <div class="col-4">
        <div class="card">
          <h2>Movie</h2>
          <img :src="`${store.Img_Path}${movie.poster_path}`" alt="img photo" />
          <h3>{{ movie.title }}</h3>
          <h3>{{ movie.original_title }}</h3>
          <p>Language: <country-flag :country="uselanguage(movie.original_language)" size="normal" :rounded="true" /> </p>
          <h3>{{ movie.vote_average }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
