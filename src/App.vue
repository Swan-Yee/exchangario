<template>
  <div>
    <exchange-navbar />
    <exchange-hero />
    <exchange-list />
    <exchange-pagination />
  </div>
</template>

<script>
import exchangeNavbar from "./components/exchangeNavbar.vue";
import exchangeHero from "./components/exchangeHero.vue";
import exchangeList from "./components/exchangeList.vue";
import exchangePagination from "./components/exchangePagination.vue";

export default {
  name: "App",
  components: {
    exchangeNavbar,
    exchangeHero,
    exchangeList,
    exchangePagination,
  },
};
</script>
<style lang="scss">
@import "assets/styles/various.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
</style>
