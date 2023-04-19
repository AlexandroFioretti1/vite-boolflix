import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  loading: true,
  API_URL: "api_key=8948c6e3da5a8ad54939ce7b68f2b97b",
  cards: null,
  fetchCard(url) {
    axios
      .get(url)
      .then((response) => {
        this.cards = response.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        console.error(err.messagge);
      });
  },
});
