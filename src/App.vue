<template>
  <div id="app">
    <exchange-navbar :navLogo="navLogo" :navMenu="navMenu" />
    <router-view />
  </div>
</template>

<script>
import exchangeNavbar from "./components/exchangeNavbar.vue";
export default {
  name: "App",
  components: {
    exchangeNavbar,
  },
  data() {
    return {
      navLogo: "Exchangario",
      navMenu: [
        { item: "Home", link: "/" },
        { item: "About", link: "/about" },
        { item: "Faq", link: "/faq" },
        { item: "Login", link: "/login" },
        { item: "Register", link: "/register" },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "assets/styles/various.scss";
@import "~bulma/bulma.sass";
@import "assets/styles/main.scss";
</style>
