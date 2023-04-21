<script>
import { store } from "../assets/data/store";

export default {
  name: "AppFooter",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <!-- copyright footer -->
  <footer>
    <div class="container text-center">
      <span>COPYRIGHT By Alexandro Fioretti &copy;</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: black;
  height: 4vh;
    span {
      color: red;
}
}

</style>
