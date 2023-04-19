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
  <div>
    <div class="movie_info text-center">
      <div class="text">
        <div class="container d-flex justify-content-between">
          <div class="row col-4">
            <div class="card">
              <h3>{{ movie.title }}</h3>
              <h3>{{ movie.original_title }}</h3>
              <h3>{{ movie.original_language }}</h3>
              <h3>{{ movie.vote_average }}</h3>
              <p>
                Language: {{ movie.original_language
                }}<country-flag
                  :country="uselanguage(movie.original_language)"
                  size="normal"
                  :rounded="true"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
