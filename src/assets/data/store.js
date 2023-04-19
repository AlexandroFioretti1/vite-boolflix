import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL:
    "https://api.themoviedb.org/3/search/movie?api_key=8948c6e3da5a8ad54939ce7b68f2b97b&query=",
  movies: [],
  SearchMovies: "",
  fetchMovie() {
    let url = this.API_URL + this.SearchMovies
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
});
