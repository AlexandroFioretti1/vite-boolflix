<script>
import { store } from "../assets/data/store";

export default {
  name: "SingleMovie",
  props: {
    movie: Object,
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
