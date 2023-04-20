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
    <div class="serie_info text-center">
      <div class="text">
        <div class="container d-flex justify-content-between">
          <div class="row col-4">
            <div class="card">
              <h2>Series</h2>
              <img :src="`${store.Img_Path}${serie.poster_path}`" alt="">
              <h3>{{ serie.name }}</h3>
              <h3>{{ serie.original_name }}</h3>
              <p> Language: <country-flag :country="uselanguage(serie.original_language)" size="normal" :rounded="true" /> </p>
              <h3>{{ serie.vote_average }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped lang="scss">

</style>
