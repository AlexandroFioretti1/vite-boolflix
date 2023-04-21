<script>
import { store } from "../assets/data/store";
import CountryFlag from "vue-country-flag-next";

export default {
  name: "SingleSerie",
  components: { CountryFlag },
  props: {
    serie: Object,
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
    calcStar(vote) {
      return Math.round(Number(vote) / 2);
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
  <!-- Card whit Series Tv -->
  <div class="col-4 pt-4">
    <div class="card text-center">
      <h2 class="red_c">Series</h2>
      <img class="img-fluid" :src="`${store.Img_Path}${serie.poster_path}`" alt="img serie" />
      <h4>Title: {{ serie.name }}</h4>
      <h4>Original title {{ serie.original_name }}</h4>
      <p>Language <country-flag :country="uselanguage(serie.original_language)" size="normal" :rounded="true" /></p>

      <!-- svg stars gold -->
      <p>
        <svg v-for="n in calcStar(serie.vote_average)" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
          fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>

        <!-- svg stars clear -->
        <svg v-for="n in 5 - calcStar(serie.vote_average)" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
          fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path
            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </p>
    </div>
  </div>
</template>

<style>
.card {
  background-color: black;
  color: white;
}

.red_c {
  color: red;
}</style>
