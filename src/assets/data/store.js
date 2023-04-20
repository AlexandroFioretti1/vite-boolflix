import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  /* API for movies */
  API_URL: "https://api.themoviedb.org/3/search/movie?api_key=8948c6e3da5a8ad54939ce7b68f2b97b&query=",

  /* API for series */
  API_URL_SERIES: "https://api.themoviedb.org/3/search/tv?api_key=8948c6e3da5a8ad54939ce7b68f2b97b&query=",

  /* Url for link img */
  Img_Path: "https://image.tmdb.org/t/p/w342",
  movies: [],
  series: [],
  Search: "",

  /* function for fetch Movie */
  fetchMovie() {
    let url = this.API_URL + this.Search;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.movies = response.data.results;
        console.log(this.movies);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },

  /* function for fetch Serie */
  fetchSerie() {
    let url = this.API_URL_SERIES + this.Search;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.series = response.data.results;
        console.log(this.series);
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
